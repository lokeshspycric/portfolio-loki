import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import NavBar from "./components/NavBar";
import LokeshBot from "./components/LokeshBot";
import Certifications from "./components/Certifications";


import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";
import Project3 from "./routes/Project3";
import Project4 from "./routes/Project4";


export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f1a] text-black dark:text-white transition-colors duration-300">
      <NavBar />
      <ThemeToggle />
      <LokeshBot />

<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route
      path="/"
      element={
        <>
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="experience"><Experience /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="certifications"><Certifications /></div>
          <div id="contact"><Contact /></div>
        </>
      }
    />
    <Route path="/Projects/Project1" element={<Project1 />} />
    <Route path="/Projects/Project2" element={<Project2 />} />
    <Route path="/Projects/Project3" element={<Project3 />} />
    <Route path="/Projects/Project4" element={<Project4 />} />
  </Routes>
</AnimatePresence>

    </div>
  );
}
