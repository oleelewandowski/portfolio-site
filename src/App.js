import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
