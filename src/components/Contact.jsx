import { useState } from "react";
import { useInView } from "../hooks/useInView.js";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [leftRef, leftVisible] = useInView();
  const [formRef, formVisible] = useInView();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatusMessage("Thanks! Your message has been sent.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage(
        "Could not reach the server. Please make sure the backend is running.",
      );
    }

    setIsSending(false);
  }

  return (
    <section
      id="contact"
      className="section-padding py-24 md:py-28 border-t border-core-line"
    >
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        <div
          ref={leftRef}
          className={`transition-all duration-500 ${
            leftVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper-high mb-6">
            Let's Connect
          </h2>
          <p className="text-paper-mid leading-relaxed max-w-md">
            Whether it's an internship opportunity, collaboration, project idea,
            or simply a conversation about technology, I'd be happy to connect.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-5 transition-all duration-500 delay-100 ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div>
            <label htmlFor="name" className="block text-sm text-paper-mid mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-core-graphite border border-core-line rounded-md px-4 py-3 text-paper-high placeholder:text-paper-low focus:border-signal-cyan outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-paper-mid mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-core-graphite border border-core-line rounded-md px-4 py-3 text-paper-high placeholder:text-paper-low focus:border-signal-cyan outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm text-paper-mid mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-core-graphite border border-core-line rounded-md px-4 py-3 text-paper-high placeholder:text-paper-low focus:border-signal-cyan outline-none resize-none"
              placeholder="What would you like to say?"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full sm:w-auto px-7 py-3 rounded-md bg-signal-blue text-core-black font-medium hover:bg-signal-cyan transition-colors duration-200 disabled:opacity-60"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p className="text-sm text-paper-mid pt-1">{statusMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
