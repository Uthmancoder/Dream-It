import { useState } from 'react';
// import bgImg from '../assets/bgImage.webp';

const CaseStdCard = ({  Title, Text, img  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative w-full md:w-fit h-[200px] p-4 bg-white text-black shadow-lg text-center flex flex-col items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{zIndex : 1}}>

            {/* Content */}
            <div className={`relative z-10  ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                <div className='p-4 flex flex-col items-center justify-center'>
                    <h2 className="font-bold text-2xl">{Title}</h2>
                    <p>{Text}</p>
                </div>
            </div>

            {/* Hovered content with background image */}
            {isHovered && (
                <div className="absolute bg-blue-800 text-white duration-100 ease-in-out inset-0 w-full h-full opacity-90  ">
                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
                        <div className='p-4 flex flex-col items-center justify-center '>
                            <h2 className="font-bold text-2xl">{Title}</h2>
                            <p>{Text}</p>
                        </div>
                    </div>
                    <img className="w-full h-full" src={img} alt="" />
                    <div className="absolute inset-0 w-full h-full bg-blue-800 opacity-90" style={{ zIndex: 1 }}></div>
                </div>
            )}
        </div>
    );
};

export default CaseStdCard;
