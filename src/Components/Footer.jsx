import logo from '../assets/whiteLogo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaPhone, FaNetworkWired } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-blue-900 text-slate-300 py-2 md:py-16'>
            <div className='max-w-[1100px] mx-auto px-8 md:px-0'>
                <div className="grid md:grid-cols-4  gap-4 items-center ">
                    <div className="md:mt-[-70px]">
                        <img className='w-[150px]' src={logo} alt="" />
                        <p>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque</p>
                        <div className='flex items-center justify-between gap-4 mt-4'>
                            <div className='bg-white text-blue-800 shadow-lg p-2 '><FaFacebook size={25} /></div>
                            <div className='bg-white text-blue-800 shadow-lg p-2 '><FaTwitter size={25} /></div>
                            <div className='bg-white text-blue-800 shadow-lg p-2 '><FaInstagram size={25} /></div>
                            <div className='bg-white text-blue-800 shadow-lg p-2 '><FaLinkedin size={25} /></div>
                        </div>
                    </div>

                    <div className="md:mt-[-30px]">
                        <h1 className='text-3xl font-bold text-white'>Our Service</h1>
                        <ul>
                            <li className="p-2">- Our Services</li>
                            <li className="p-2">- Electrician Services</li>
                            <li className="p-2">- Handyman Service</li>
                            <li className="p-2">- Plumbing Services</li>
                            <li className="p-2">- Repair Services</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='text-3xl font-bold text-white mb-4'>Recent Post</h1>
                        <div className='grid gap-2'>
                            <div className='flex items-center justify-center gap-4'>
                                <img className='rounded-md' src="https://html.ditsolution.net/dreamit/handyman/assets/images/resource/footer.jpg" alt="" />
                                <div>
                                    <p className='text-white font-bold'>Plumbing Tips For Winter and summer</p>
                                    <p className='text-slate-300'>10 July, 2021</p>
                                </div>
                            </div>
                            <hr className='bg-white my-4' />
                            <div className='flex items-center justify-center gap-4'>
                                <img className="rounded-md" src="https://html.ditsolution.net/dreamit/handyman/assets/images/resource/footer2.jpg" alt="" />
                                <div>
                                    <p className='text-white'>Equipping Researchers in the Developing.</p>
                                    <p className='text-slate-300'>10 July, 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-4 md:mt-[-30px]'>
                        <h2 className='text-3xl font-bold text-white'>Quick Connect</h2>
                        <div className='flex items-center gap-2'>
                            <span><FaHome size={30} /></span>
                            <div>  <h4><b>Adress : </b> <br /> Dhaka, Bangladesh Road 22 </h4>  </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><FaPhone size={30} /></span>
                            <div>  <h4><b>Teliphone:</b> <br /> 088 4785 6589 </h4>  </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><FaNetworkWired size={30} /></span>
                            <div>  <h4><b>Email: </b> <br /> Dhaka, Bangladesh Road 22 </h4>  </div>
                        </div>
                    </div>
                </div>

                <hr className='bg-slate-500 text-slate-500   mx-auto mt-16 ' />

                <p className="text-slate-500 text-lg mt-8">Copyright © dreamit all rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer