import { Header } from "./components/features/header";
import About from "./pages/about";
import Hero from "./pages/hero";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
