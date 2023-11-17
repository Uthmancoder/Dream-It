import Engineer from "../assets/engineer.jpg"
import { Box, LinearProgress } from "@mui/material"
import CustomizedProgressBars from "./Progress"
const WhyChooseUs = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <img className="w-full h-full" src={Engineer} alt="" />
                </div>
                <div className="p-4 text-start">
                    <h2 className="font-bold text-md mt-8">WHY CHOOSE US</h2>
                    <h3 className="text-4xl font-serif font-bold mt-8">Offer Reliable Services For
                        Most Mome <span className="text-blue-800">Services</span>

                    </h3>
                    <div className='w-[100px] my-8 '>
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress
                                sx={{
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: '#1E40AF',
                                    },
                                }}
                            />
                        </Box>
                    </div>
                    <p className="text-slate-500 border-l-[3px] pl-4 text-xl border-blue-800">Proin gravida nibh vel velit auctor aliquet. sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum, sagittis sem nibh elit veniam, quis nostrud exercitation</p>
                    {/* Experiences */}
                    <div className="mt-8">
                        <div className="grid">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">Handyman Experience</h2>
                                <h2 className="text-md font-bold">92</h2>
                            </div>
                            <div className="mt-[-10px]"><CustomizedProgressBars value={92}/></div>
                        </div>
                        <div className="grid mt-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">Plumbimg Experience</h2>
                                <h2 className="text-md font-bold">91</h2>
                            </div>
                            <div className="mt-[-10px]"><CustomizedProgressBars value={91}/></div>
                        </div>
                        <div className="grid mt-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-bold">Industry Experience</h2>
                                <h2 className="text-md font-bold">82</h2>
                            </div>
                            <div className="mt-[-10px]"><CustomizedProgressBars value={82}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs