import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";

import Projects from "./components/Project/Project";
import Navbar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
