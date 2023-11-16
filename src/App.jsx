import HeroSection from "./Components/HeroSection"
import Navbar from "./Components/Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'flowbite';
import SecondCard from "./SecondCard";


function App() {


  return (
    <div>
      <Navbar />
      <div className="w-full first-letter:mx-auto">
        <HeroSection />
        <div className="max-w-[1100px] mx-auto px-8 md:px-0">
          <SecondCard />
        </div>
      </div>
    </div>
  )
}

export default App
