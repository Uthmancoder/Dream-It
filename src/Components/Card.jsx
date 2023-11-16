import { useState } from 'react';
import bgImg from '../assets/bgImage.webp';

const Card = ({ svg1, Title, Text, svg2 }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative w-full md:w-fit p-4 bg-white text-black shadow-lg text-center flex flex-col items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex : 1}}>

            {/* Content */}
            <div className={`relative z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className='p-4'>
                    <img className="w-[80px] mx-auto mb-auto" src={svg1} alt="" />
                    <h2 className="font-bold text-2xl">{Title}</h2>
                    <p>{Text}</p>
                    <img className="w-[80px] self-end" src={svg2} alt="" />
                </div>
            </div>

            {/* Hovered content with background image */}
            {isHovered && (
                <div className="absolute bg-blue-800 text-white duration-100 ease-in-out inset-0 w-full h-full opacity-80  ">
                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
                        <div className='p-4 flex flex-col items-center justify-center '>
                            <img className="w-[80px] mb-2" src={svg1} alt="" />
                            <h2 className="font-bold text-2xl">{Title}</h2>
                            <p>{Text}</p>
                            <img className="w-[80px] mt-2 self-end mr-2" src={svg2} alt="" />
                        </div>
                    </div>
                    <img className="w-full h-full" src={bgImg} alt="" />
                    <div className="absolute inset-0 w-full h-full bg-blue-800 opacity-90" style={{ zIndex: 1 }}></div>
                </div>
            )}
        </div>
    );
};

export default Card;
