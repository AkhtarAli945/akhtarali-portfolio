// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Toast from "./components/Toast";
// import { useTheme } from "./hooks/useTheme";

// export default function App() {
//   const { theme } = useTheme();

//   return (
//     <div className={theme === "dark" ? "dark" : ""}>
//       <div className="dark:bg-[#020617] dark:text-white bg-white text-black transition-colors">
//         <Navbar />
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//         <Footer />
//         <Toast />
//       </div>
//     </div>
//   );
// }

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-[#020617] dark:text-white transition-colors">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toast />
      </div>
    </div>
  );
}