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
        <div className="relative w-full md:w-fit p-4 bg-white text-slate-800 shadow-lg text-center flex flex-col items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ zIndex: 1 }}>

            {/* Content */}
            <div className={`relative z-10 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className='p-4 flex flex-col text-slate-800 items-center justify-center '>
                    <div className='text-slate-700'>{svg1}</div>
                    <h2 className="font-bold text-2xl">{Title}</h2>
                    <p>{Text}</p>
                    <div className='self-end mt-4 text-slate-700'>{svg2}</div>
                </div>
            </div>

            {/* Hovered content with background image */}
            {isHovered && (
                <div className="absolute bg-blue-800 text-white duration-100 ease-in-out inset-0 w-full h-full opacity-80  ">
                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
                        <div className='p-4 flex flex-col items-center justify-center '>
                            <div >{svg1}</div>
                            <h2 className="font-bold text-2xl">{Title}</h2>
                            <p>{Text}</p>
                            <div className='self-end'>{svg2}</div>
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
