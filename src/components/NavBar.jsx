import { Link } from "react-scroll";

const sections = ["home", "about", "experience", "skills", "projects", "contact"];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#0f0f1a] shadow p-4 flex justify-center gap-6 text-sm font-semibold text-blue-600 dark:text-purple-400">
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="border-b-2 border-blue-600 dark:border-purple-400"
          spy={true}
          className="cursor-pointer capitalize hover:underline"
        >
          {section}
        </Link>
      ))}
    </nav>
  );
}
