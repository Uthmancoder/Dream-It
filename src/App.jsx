import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite';
import About from "./About";
import Services from "./Components/Services";
import WhyChooseUs from "./Components/WhyChooseUs";
import Projects from "./Components/Projects";


function App() {


  return (
    <div>
      <Navbar />
      <div className="w-full first-letter:mx-auto">
        <HeroSection />
        <div className="max-w-[1100px] mx-auto px-8 md:px-0">
          <About />
        </div>
        <Services />
        <div className="max-w-[1100px] mx-auto px-8 md:px-0">
          <WhyChooseUs />
        </div>
        <Projects/>
      </div>
    </div>
  )
}

export default App
