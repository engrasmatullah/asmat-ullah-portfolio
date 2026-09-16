import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// This component draws a simple 3D "engineering core" object:
// a rotating central cube (like a CPU) with small orbiting cube "nodes"
// and thin connecting lines (like circuit traces), plus a few floating dots
// that represent digital particles.
//
// The code is kept simple on purpose: plain useState/useFrame,
// no custom hooks, no physics engine.

function CentralCore() {
  const meshRef = useRef();

  // useFrame runs on every animation frame (many times per second).
  // We use it to slowly rotate the central core.
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshStandardMaterial
        color="#0D1520"
        emissive="#3B82F6"
        emissiveIntensity={0.4}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

// One small orbiting node that circles around the central core.
// "radius" and "speed" control how far out and how fast it orbits.
function OrbitingNode({ radius, speed, offset, color }) {
  const nodeRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed + offset;
    if (nodeRef.current) {
      nodeRef.current.position.x = Math.cos(time) * radius;
      nodeRef.current.position.z = Math.sin(time) * radius;
      nodeRef.current.position.y = Math.sin(time * 0.6) * 0.4;
    }
  });

  return (
    <mesh ref={nodeRef}>
      <sphereGeometry args={[0.09, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
    </mesh>
  );
}

// A ring of thin "circuit line" style geometry around the core,
// giving the impression of a circuit board without heavy detail.
function CircuitRing({ radius, tiltX }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tiltX, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 8, 64]} />
      <meshBasicMaterial color="#22D3EE" transparent opacity={0.35} />
    </mesh>
  );
}

// This is the whole group of 3D objects together: core + nodes + rings.
// It also gently reacts to the mouse position (slight tilt), which is the
// "slight interaction" the design brief asked for.
function EngineeringCoreGroup({ reducedDetail }) {
  const groupRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      // Convert mouse position to a small -1 to 1 range
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly move the whole group toward the mouse tilt (very subtle).
      const targetRotationY = mouse.current.x * 0.3;
      const targetRotationX = mouse.current.y * 0.15;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.03;
    }
  });

  // On mobile (reducedDetail = true) we render fewer orbiting nodes
  // and skip the extra ring, to keep performance smooth.
  const nodes = useMemo(() => {
    const colors = ["#22D3EE", "#3B82F6", "#8B6BF0"];
    const count = reducedDetail ? 3 : 6;
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        radius: 1.9 + (i % 2) * 0.5,
        speed: 0.3 + i * 0.05,
        offset: i * 1.3,
        color: colors[i % colors.length],
      });
    }
    return items;
  }, [reducedDetail]);

  return (
    <group ref={groupRef}>
      <CentralCore />
      <CircuitRing radius={2.1} tiltX={Math.PI / 2.2} />
      {!reducedDetail && <CircuitRing radius={2.6} tiltX={Math.PI / 1.6} />}
      {nodes.map((node, index) => (
        <OrbitingNode
          key={index}
          radius={node.radius}
          speed={node.speed}
          offset={node.offset}
          color={node.color}
        />
      ))}
    </group>
  );
}

function ThreeDScene() {
  // We detect a small screen once, on load, to decide whether to
  // simplify the 3D scene for better mobile performance.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={isMobile ? 1 : [1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#3B82F6" />
        <pointLight position={[-4, -2, -2]} intensity={0.6} color="#22D3EE" />
        <EngineeringCoreGroup reducedDetail={isMobile} />
      </Canvas>
    </div>
  );
}

export default ThreeDScene;
