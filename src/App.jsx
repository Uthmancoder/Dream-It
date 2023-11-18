import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite';
import About from "./About";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";
import Projects from "./Components/Projects";
import Reviews from "./Components/Reviews";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


function App() {


  return (
    <div>
      <Navbar />
      <div className="w-full first-letter:mx-auto">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about" className="max-w-[1100px] mx-auto px-8 md:px-0">
          <About />
        </div>
        <div id="services"><Services /></div>
        <div className="max-w-[1100px] mx-auto px-8 md:px-0">
          <WhyChooseUs />
        </div>
        <Projects />
        <div className="max-w-[1100px] mx-auto   md:px-0">
          <div id="reviews">
            <Reviews />
          </div>
          <div id="contact">   <Contact /></div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
