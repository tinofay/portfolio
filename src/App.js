import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import ProductImpact from "./components/ProductImpact";
import Testimonials from "./components/Testimonials";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <ProductImpact />
      <Experience />
      <Testimonials />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
