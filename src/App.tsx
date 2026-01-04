import ScrollToTop from "./components/features/scroll-up";
import { Header } from "./components/features/header";
import Certifications from "./pages/certifications";
import Testimonials from "./pages/testimonials";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
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
        <Testimonials />
        <Certifications />
        <Contact />
        <ScrollToTop />
      </main>

      <Footer />
    </>
  );
}

export default App;
