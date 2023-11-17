import { Box, LinearProgress } from "@mui/material"
import RevCard from "./ReviewsCard"
// import engineer from '../assets/engineer.jpg'

const Reviews = () => {
    return (
        <div className="my-24">
            <div>
                <h4 className="text-center font-bold text-md">OUR CLIENTS TESTIMONIALS</h4>
                <h1 className="text-center font-bold text-4xl font-serif md:w-[50%] mx-auto my-5">What People Say For Your Happy Client </h1>
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

                <div className="grid md:grid-cols-3 gap-12 my-8 w-full ">
                    <RevCard text="Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" image="https://html.ditsolution.net/dreamit/handyman/assets/images/resource/testi3.jpg" Techincian="Al-Amin Sorkar" Occupation="Cleaning" />
                    <RevCard text="Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" image="https://html.ditsolution.net/dreamit/handyman/assets/images/resource/testi1.jpg" Techincian="Anowar Hossain" Occupation="Plumbering Service" />
                    <RevCard text="Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" image="https://html.ditsolution.net/dreamit/handyman/assets/images/resource/testi2.jpg" Techincian="Mehedi Hasan" Occupation="Repair Service" />
                </div>
            </div>
        </div>
    )
}

export default Reviews