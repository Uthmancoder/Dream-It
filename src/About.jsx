import human from './assets/human.png'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import svg from "./assets/images-removebg-preview.png"
import svg2 from "./assets/images-removebg-preview (2).png"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

const About = () => {
    return (
        <div className=" grid  md:grid-cols-2 items-center  gap-5">
            <div>
                <h2 className="text-xl text-blue-800  font-bold  border-b-2 mb-12 border-slate-800 w-fit ">About</h2>
                <h1 className="text-2xl md:text-4xl font-poppins font-bold">20 Years Experience In The
                    Handyman <span className='text-blue-800'>& Plumber</span></h1>
                <div className='w-[100px] mt-4'>
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

                <p className='text-md md:text-lg text-slate-600  border-l-2 pl-4 mt-5 border-blue-800 '>Proin gravida nibh vel velit auctor aliquet. sollicitudi lorem quis bibendum auctor, nisi elit consequat ipsum, sagittis sem nibh elit veniam, quis nostrud exercitation</p>
                <div className='grid md:grid-cols-2 gap-4 mt-6'>
                    <div className="flex gap-4  items-center">
                        <img className='w-[50px]' src={svg} alt="" />
                        <h3 className="text-md  md:text-xl">The Best Handyman  Services</h3>
                    </div>
                    <div className="flex gap-4  items-center">
                        <img className='w-[50px]' src={svg2} alt="" />
                        <h3 className="text-md  md:text-xl">The Best Plumbering Services</h3>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='flex items-center gap-2 my-1'><IoIosCheckmarkCircleOutline className='text-blue-800 font-bold ' size={20} /> <span className='text-[13px] text-slate-500'> Praesent quis odio sit amet nisl luctus venenatis.</span></div>
                    <div className='flex items-center gap-2 my-1'><IoIosCheckmarkCircleOutline className='text-blue-800 font-bold ' size={20} /> <span className='text-[13px] text-slate-500'>Regular solution give for home problems by handyman.</span></div>
                    <div className='flex items-center gap-2 my-1'><IoIosCheckmarkCircleOutline className='text-blue-800 font-bold ' size={20} /> <span className='text-[13px] text-slate-500'> Office Desk and Floor Cleaning Services.</span></div>
                </div>

                <div className="mt-8">
                    <button className="aboutMore-button button bg-blue-800 py-3 px-6 md:py-4 md:px-12">About More</button>
                </div>
            </div>
            <div>
                <img src={human} alt="" />
            </div>
        </div>
    )
}

export default About