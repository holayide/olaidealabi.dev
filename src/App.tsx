import { Header } from "./components/features/header";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import About from "./pages/about";
import Hero from "./pages/hero";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
