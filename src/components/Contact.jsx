import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
    }, 1500); // Simulate success
  };

  return (
    <section className="max-w-2xl mx-auto px-4 mt-24 pb-32">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-4 text-center">
        Let's Build Something Together 🤝
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Whether it’s scaling systems, training models, or launching creative products — I’m ready. Drop a message below or just say hi!
      </p>

      <p className="text-sm text-center italic text-gray-400 mb-6">
        Currently exploring: AI + DevOps integrations & portfolio redesigns
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          required
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition w-full font-semibold"
        >
        Launch Message
        </button>

        {status === "sending" && (
          <p className="text-yellow-400 text-center animate-pulse">
            ⏳ Dispatching your message to Lokesh...
          </p>
        )}
        {status === "success" && (
          <div className="text-green-400 text-center mt-2 space-y-2 animate-fade-in">
            <p>✅ Message deployed successfully!</p>
            <p className="text-xl">🎉 Thank you for reaching out! I’ll be in touch soon.</p>
          </div>
        )}
      </form>

      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        <a
          href="https://github.com/lokeshspycric"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-gray-700 rounded-full text-white border border-gray-600 transition"
        >
          <span>🌐 GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/lokesh-reddy-dumpa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-blue-600 rounded-full text-white transition"
        >
          <span>💼 LinkedIn</span>
        </a>
        <a
          href="/Lokesh_Resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2 bg-gray-700 hover:bg-green-600 rounded-full text-white transition"
        >
          <span>📄 Download Resume</span>
        </a>
      </div>
    </section>
  );
}
