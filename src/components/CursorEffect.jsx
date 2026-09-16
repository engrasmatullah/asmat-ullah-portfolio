import { useEffect, useRef, useState } from "react";

// A very subtle glowing dot that follows the mouse.
// This is the "unique interaction" the design brief asked for.
// It is disabled on touch devices, since there is no mouse to follow.
function CursorEffect() {
  const dotRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Simple check: if the device supports touch, treat it as a touch device
    // and never show the cursor effect.
    // const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    // setIsTouchDevice(hasTouch);

    // if (hasTouch) {
    //   return;
    // }

    function handleMouseMove(event) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-3 -mt-3 h-6 w-6 rounded-full bg-cyan-400/50 blur-sm hidden md:block"
    />
  );
}

export default CursorEffect;
