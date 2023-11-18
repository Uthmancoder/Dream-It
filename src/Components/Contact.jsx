import { Box, LinearProgress } from "@mui/material"
import { MdOutlineContactPhone } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <div className="my-24">
                <div className="grid md:grid-cols-2 shadow-lg">
                    <div>
                        <img className="w-full h-full" src="https://html.ditsolution.net/dreamit/handyman/assets/images/project/call.jpg" alt="" />
                    </div>
                    <div className="p-8">
                        <h4 className="text-lg font-bold">LIMITED PERIOD OFFER</h4>
                        <h1 className="text-3xl font-bold mt-5 font-poppins text-slate-800">Get a demo cleaning on your first
                            booking absolutely free.</h1>
                        <hr className="bg-slate-400 w-full my-6" />
                        <div className="grid md:grid-cols-2">
                            <div className="mt-8 mx-auto md:mx-0">
                                <button className="aboutMore-button button bg-blue-800 py-3 px-6 md:py-4 md:px-12">Book Appointment</button>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3 justify-center mt-8">
                                <div className="p-4 text-white rounded-full bg-blue-800">
                                    {<MdOutlineContactPhone size={30}/>}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700">24 Hours</h3>
                                    <p className="text-lg text-slate-500 font-semibold">0123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h4 className="text-center font-bold text-md">CONTACT US</h4>
                    <h1 className="text-center font-bold text-4xl font-serif md:w-[35%] mx-auto my-5">Feel Free Contact
                        Now Us </h1>
                    <div className='w-[100px] mt-6 mx-auto' >
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

                    {/* form  */}
                    <form id="quote" className="w-full my-8 grid gap-6 px-8 md:px-0">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input className="p-3 w-full rounded-md border-slate-400 focus:ring-2 outline-none  duration-100 ease-in-out ring-blue-800 border" type="text" placeholder="Your Name" name="" id="" />
                            <input className="p-3 w-full rounded-md border-slate-400 focus:ring-2 outline-none  duration-100 ease-in-out ring-blue-800 border" type="text" placeholder="Your Email" name="" id="" />
                            <input className="p-3 w-full rounded-md border-slate-400 focus:ring-2 outline-none  duration-100 ease-in-out ring-blue-800 border" type="number" placeholder="Your Phone" name="" id="" />
                            <input className="p-3 w-full rounded-md border-slate-400 focus:ring-2 outline-none  duration-100 ease-in-out ring-blue-800 border" type="text" placeholder="Subject" name="" id="" />           
                        </div>
                        <textarea className="p-3 w-full rounded-md border-slate-400 focus:ring-2 outline-none  duration-100 ease-in-out ring-blue-800 border" placeholder="Message"  name="" id="" cols="0" rows="6"></textarea>
                        <button className="w-full py-4 bg-blue-800 text-white font-bold  rounded-md hover:bg-blue-700">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact