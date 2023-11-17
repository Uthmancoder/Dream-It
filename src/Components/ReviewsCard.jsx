import { FaQuoteLeft } from "react-icons/fa";

const RevCard = ({ text, image, Techincian, Occupation }) => {
    return (
        <div className="grid items-center">
            <div className="w-full relative shadow-xl border border-slate-100 p-8">
                <div className="flex items-center justify-center gap-6">
                    <hr className="text-slate-600 bg-slate-400 w-[100px] p-[1px]" />
                    <div className="p-4 rounded-full bg-blue-800 text-white"><FaQuoteLeft size={30} /> </div>
                    <hr className="text-slate-600 bg-slate-400 w-[100px] font-bold p-[1px]" />
                </div>
                <p>{text}</p>
                <div className="box  absolute left-[45%] top-[90%] w-[40px] h-[40px] rotate-[40deg] bg-white "></div>
            </div>
            <div className="grid text-center mt-4">
                <img className="w-[100px] h-[100px] rounded-full mx-auto mt-8" src={image} alt="" />
                <h2 className="text-2xl font-bold mt-1 font-serif">{Techincian}</h2>
                <p className="text-lg font-semibold text-blue-800">{Occupation}</p>
            </div>
        </div>
    )
}
export default RevCard;