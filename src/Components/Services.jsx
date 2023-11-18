import background from '../assets/tools.avif'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ServiceCard from './ServiceCard';
import icon from '../assets/download-removebg-preview (1).png'
import { MdCleaningServices  } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { GiAutoRepair,GiTap, GiPipes, GiShower   } from "react-icons/gi";


const Services = () => {
  return (
    <div className='mt-8 h-fit bg-slate-400'>
      <div className='relative w-full h-[1100px] md:h-screen'>
        <div className="absolute text-white  inset-0 w-full h-full opacity-80  ">
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ zIndex: 2 }}>
            {/* All the texts Goes In Here  */}
            <div className='p-4 flex flex-col items-center justify-center '>
              <h2 className='text-3xl border-b-2 border-blue-800 font-bold text-white font-serif mb-5'>Our Services </h2>
              <h1 className='text-2xl font-serif md:text-5xl font-bold w-[70%] mx-auto text-center'>We Provides You  One Of The Best
                Plumbing <span className="text-blue-400 font-extrabold">Services</span></h1>
              <div className='w-[100px] mt-4 mx-auto'>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: 'blue',
                      },
                    }}
                  />
                </Box>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-6 max-w-[1100px] mx-auto">
                <div>
                  <ServiceCard className=" bg-white  w-full whitesvcard p-4 text-slate-800" icon={<MdCleaningServices  size={50}/>} Title="Cleaning Services" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
                <div>
                  <ServiceCard className=" bg-[#1923f0]  w-full svcard p-4 text-white" icon={<MdEngineering  size={50}/>} Title="Plumber Services" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
                <div>
                  <ServiceCard className=" bg-white  w-full whitesvcard p-4  text-slate-800" icon={<GiShower  size={50}/>} Title="Shower Repair" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
                <div>
                  <ServiceCard className=" bg-[#1923f0]  w-full svcard p-4 text-white" icon={<GiAutoRepair  size={50}/>} Title="Maintenance Services" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
                <div>
                  <ServiceCard className=" bg-white  w-full whitesvcard p-4  text-slate-800" icon={<GiTap  size={50}/>} Title="Plumber Services" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
                <div>
                  <ServiceCard className=" bg-[#1923f0] w-full svcard p-4 text-white" icon={<GiPipes  size={50}/>} Title="Plumber Services" Text="Lorem Ipsum simply dummy text of the printing" />
                </div>
              </div>
            </div>
          </div>
          <img className='w-full h-screen' src={background} alt="" />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              zIndex: 1,
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.8))',
            }}
          ></div>

        </div>
      </div>

    </div>
  )
}

export default Services