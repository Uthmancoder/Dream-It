import background from '../assets/tap.jpg';
import { Box, LinearProgress } from '@mui/material';
import SlideComponent from './Slider';

const Projects = () => {
    return (
        <div>
            <div className="relative w-full h-48 mt-8">
                <div className="absolute text-white inset-0 w-full h-screen opacity-90">
                    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
                        <h2 className='text-white font-bold text-lg'>CASE STUDY WORK</h2>
                        <h1 className='text-white text-5xl my-6 w-[50%] mx-auto text-center font-bold'>Handyman Best Work & Solution Project </h1>
                        <div className='w-[100px] my-8 '>
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
                <div className='absolute top-[80%]  inset-0 w-full h-fit opacity-90'>
<SlideComponent/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
