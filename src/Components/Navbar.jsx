import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const NavLinks = [
        { link: 'Home', path: '/', id: 'home' },
        { link: 'About', path: '/about', id: 'about' },
        { link: 'Services', path: '/services', id: 'services' },
        { link: 'Reviews', path: '/reviews', id: 'reviews' },
        { link: 'Contact', path: '/contact', id: 'contact' },
    ];

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    const handleNavLinkClick = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setOpenMenu(false);
    };

    return (
        <nav className="w-full bg-white shadow-sm z-[999] sticky top-0" style={{ zIndex: 999 }}>
            <div className="flex items-center justify-between max-w-[1100px] mx-auto h-16 pr-4 pt-2 md:pr-0 ">
                {/* Logo */}
                <div onClick={() => handleNavLinkClick('home')} className="logo">
                    <img className="w-[150px]" src={logo} alt="" />
                </div>
                {/* Nav Links */}
                <div className="items-center gap-4 hidden md:flex">
                    <ul>
                        {NavLinks.map((link, index) => (
                            <li key={index} className="inline-block p-4">
                                <NavLink
                                    exact
                                    to={link.path}
                                    activeClassName="active-link" // Add a CSS class for the active link
                                    className="text-gray-500 navlink hover:text-gray-900 relative"
                                    onClick={() => handleNavLinkClick(link.id)}
                                >
                                    {link.link}
                                    {link.link === 'Home' && <span className="underline"></span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-blue-800 py-2 px-5 rounded-[3px] text-white">Get A Quote</button>
                </div>
                {/* menu section */}
                <div onClick={handleClick} className="block md:hidden">
                    {openMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>  
            </div>

            {/* small screen Nav */}
            <aside className={`transform transition-all duration-1000 ${openMenu ? 'fixed top-0 left-0 h-screen w-[60%]' : 'fixed top-0 left-[-60%] h-screen w-[60%]'}`}>
                <div className="flex flex-col items-center gap-4 md:hidden bg-white shadow pb-4">
                    <div onClick={() => handleNavLinkClick('home')} className="logo mt-[-30px] ml-[-70px]">
                        <img className="w-[150px]" src={logo} alt="" />
                    </div>
                    <ul className='mt-[-60px] pl-4'>
                        {NavLinks.map((link, index) => (
                            <li key={index} className="inline-block p-4 w-full border-b border-slate-200">
                                <Link to={link.path} className="text-gray-500 hover:text-gray-900" onClick={() => handleNavLinkClick(link.id)}>
                                    {link.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h2 className='inline-block pl-8 text-slate-500 pb-4 w-full border-b border-slate-200'>Socials</h2>
                    <div className='flex items-center justify-between gap-4 mt-4'>
                        <div className='bg-white text-blue-800 shadow-lg p-2 '><FaFacebook size={20} /></div>
                        <div className='bg-white text-blue-800 shadow-lg p-2 '><FaTwitter size={20} /></div>
                        <div className='bg-white text-blue-800 shadow-lg p-2 '><FaInstagram size={20} /></div>
                        <div className='bg-white text-blue-800 shadow-lg p-2 '><FaLinkedin size={20} /></div>
                    </div>
                    <button className="bg-blue-800 py-2 px-5 rounded-[3px] text-white">Get A Quote</button>
                </div>
            </aside>
        </nav>
    );
};

export default Navbar;
