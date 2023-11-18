import { useState } from 'react';
import bgImg from '../assets/bgImage.webp';
import bgImg2 from '../assets/plumbing5.jpeg';
import bgImg3 from '../assets/plumbing3.jpg';
import bgImg4 from '../assets/plumbing4.jpg';
import { FaPhone, FaTools } from 'react-icons/fa';
import Card from './Card';
import { MdCleaningServices, MdRoomService } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { GiAutoRepair, GiTap, GiKitchenTap } from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 3));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 0));
    };


    return (
        <div>
            <div className='relative flex flex-col items-center justify-center h-full '>
                <div id="default-carousel" className="relative w-full h-screen">
                    {[bgImg, bgImg2, bgImg3, bgImg4].map((bg, index) => (
                        <div
                            key={index}
                            className={`absolute ${currentSlide === index ? 'block' : 'hidden'
                                } w-full h-screen overflow-hidden ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
                            style={{ zIndex: 1 }}
                        >
                            <img src={bg} alt={`Slide ${index + 1}`} className="w-full h-full ease-in-out" />
                            <div className="absolute inset-0 w-full h-full bg-slate-800 opacity-70" style={{ zIndex: 2 }}></div>
                            <div className="left-[5%] md:left-[10%] absolute top-[20%] z-[999] font-serif">
                                <p className="pl-12 md:pl-0 text-white font-bold text-2xl md:text-2xl">Welcome To DreamIt</p>
                                <h1 className="text-center md:text-start pl-[-10px] md:pl-0  text-white font-bold  my-3 text-3xl font-serif md:text-6xl md:w-[80%]">
                                    Best Home Services Repair Offers
                                </h1>
                                <p className="text-md text-center mt-8 md:mt-4 md:pl-0 my-2 md:text-2xl text-white md:w-[70%]">
                                    Have a plumbing issue? Call 24 hours emergency service at all times
                                </p>
                                <div className="flex items-center gap-4 my-6 pl-20 md:pl-0">
                                    <span className="bg-blue-800 text-white p-3 rounded-full">
                                        <FaPhone size={20} />
                                    </span>{' '}
                                    <span className="text-xl md:text-4xl text-white">0123456789</span>
                                </div>
                                <div className="grid md:grid-cols-2 items-center gap-8 md:gap-4 mt-8 md:w-[40%]">
                                    <button className="get-started-button button bg-blue-800 py-4 px-12 w-[70%] mx-auto md:w-fit md:mx-0">Get Started</button>
                                    <button className="contact-us-button button text-blue-800 py-4 px-12 w-[70%] mx-auto md:w-fit md:mx-0">Contact Us</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={handlePrev}
                    >

                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border-slate-100 border-2 shadow-md dark:bg-slate-800/30 text-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-slate-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only text-white">Previous</span>
                        </span>
                    </div>

                    <div
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        onClick={handleNext}
                    >
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border-slate-100 border-2 dark:bg-slate-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-slate-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center z-[999] md:left-[7%] my-10" style={{ zIndex: 1 }}>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[90%] mx-auto gap-8'>
                        <Card svg1={<MdEngineering size={60} />} Title="Handyman" Text="At Our Company we'll help you fi xand repair  broken or leaking tap " svg2={<GiAutoRepair size={60} />} />
                        <Card svg1={<FaTools size={60} />} Title="Pipe Repair" Text="Lorem ipsum dolor thises amet, consectetur is adipiscing elit

p " svg2={<GrHostMaintenance size={60} />} />
                        <Card svg1={<MdCleaningServices size={60} />} Title="Cleaning Service" Text="At Our Company we'll help you fi xand repair  broken or leaking tap " svg2={<MdRoomService size={60} />} />
                        <Card svg1={<GiTap size={60} />} Title="Tap Repair" Text="At Our Company we'll help you fi xand repair  broken or leaking tap " svg2={<GiKitchenTap size={60} />} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;


