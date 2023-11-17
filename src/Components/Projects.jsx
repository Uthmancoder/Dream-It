import background from '../assets/tap.jpg';
import { Box, LinearProgress } from '@mui/material';
import CaseStdCard from './CaseStdCard';
const Projects = () => {
    return (
        <div>
            <div className="relative w-full  h-screen  mt-8 justify-center">
                <div className="absolute text-white inset-0 w-full h-screen opacity-90">
                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
                        <h2 className='text-white font-bold text-lg'>CASE STUDY WORK</h2>
                        <h1 className='text-white text-3xl md:text-5xl md:my-6  md:w-[50%] mx-auto text-center font-bold'>Handyman Best Work & Solution Project </h1>
                        <div className='w-[100px] my-2 md:my-8 '>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress
                                    sx={{
                                        "& .MuiLinearProgress-bar": {
                                            backgroundColor: 'black',
                                        },
                                    }}
                                />
                            </Box>
                        </div>
                        <div className='w-full h-fit opacity-90 max-w-[1100px] mx-auto' >
                            <div className='grid md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0'>
                                <CaseStdCard Title="Plumbing" Text="Lorem Ipsum simply dummy text of the printing" img={background} />
                                <CaseStdCard Title="Handyman" Text="Lorem Ipsum simply dummy text of the printing" img={background} />
                                <CaseStdCard Title="Cleaning" Text="Lorem Ipsum simply dummy text of the printing" img={background} />
                            </div>
                        </div>
                    </div>
                    <img className='w-full h-screen object-cover' src={background} alt="" />
                    <div
                        className="absolute inset-0 w-full h-screen"
                        style={{
                            zIndex: 1,
                            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.8))',
                            height: '100%', // Set the height to 100% to match the image height
                        }}
                    ></div>
                </div>

            </div>

            
        </div>
    );
}
export default Projects;
