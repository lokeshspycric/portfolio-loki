import TypeIt from "typeit-react";
import profilePic from "../assets/lokesh.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0f0f1a] text-center px-4">
      {/* Profile Image */}
      <img
        src={profilePic}
        alt="Lokesh Reddy"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-600 dark:border-purple-400 shadow-lg mb-6 object-cover"
      />

      {/* Typing Animation */}
      <div className="text-lg md:text-2xl font-mono mb-4 text-blue-600 dark:text-purple-400">
        <TypeIt options={{ speed: 50, waitUntilVisible: true }}>
          lokesh@portfolio:~$ I build intelligent, scalable systems that empower people.
        </TypeIt>
      </div>

      {/* Headline & CTA */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Engineer with Imagination 👨‍💻</h1>
      <p className="text-lg md:text-2xl mb-6 max-w-2xl text-gray-700 dark:text-gray-300">
        DevOps • ML • Web • Cloud – Built for performance. Designed with purpose.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
  <a
    href="#projects"
    className="bg-blue-600 hover:bg-blue-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-xl text-lg transition"
  >
    Explore My Work
  </a>

  <a
    href="/Lokesh_Reddy_Dumpa_SD.pdf"
    download
    className="border border-blue-600 dark:border-purple-400 text-blue-600 dark:text-purple-400 hover:bg-blue-600 dark:hover:bg-purple-500 hover:text-white px-6 py-3 rounded-xl transition"
  >
    📄 Download Resume
  </a>
</div>

    </section>
  );
}
