import Nav from "./Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import LanguageContext from "./sections/LanguageContext";

function App() {
  return (
    <>
      <LanguageContext >
        <Nav />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </LanguageContext>
    </>
  );
}

export default App;
