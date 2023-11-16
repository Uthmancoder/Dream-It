
import { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [openMenu, setopenMenu] = useState(false)
    const NavLinks = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Services", path: "/services" },
        { link: "Reviews", path: "/reviews" },
        { link: "Offers", path: "/offers" },
        { link: "Contact", path: "/contact" },
    ]

    const handleClick = () => {
        setopenMenu(!openMenu)
    }
    return (
        <nav className='w-full bg-white shadow-sm z-[999] sticky top-0' style={{zIndex : 999}}>
            <div className="flex items-center justify-between max-w-[1100px] mx-auto h-16 pr-4 pt-2 md:pr-0 ">
                {/* Logo */}
                <div className="logo">
                    <img className='w-[150px]' src={logo} alt="" />
                </div>
                {/* Nav Links */}
                <div className=' items-center gap-4 hidden md:flex'>
                    <ul>
                        {NavLinks.map((link, index) => {
                            return (
                                <li key={index} className="inline-block p-4">
                                    <NavLink exact to={link.path} activeClassName="text-gray-900" className="text-gray-500 hover:text-gray-900" >{link.link}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <button className='bg-blue-800 py-2 px-5 rounded-[3px] text-white'>Get A Quote</button>
                </div>
                {/* menu section */}
                <div onClick={handleClick} className='block md:hidden'>
                    {openMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>

            {/* small screen Nav */}
            <div className={`transform transition-all duration-1000 ${openMenu ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                <div className='flex flex-col items-center gap-4 md:hidden bg-white shadow pb-4'>
                    <ul>
                        {NavLinks.map((link, index) => {
                            return (
                                <li key={index} className="inline-block p-4">
                                    <NavLink exact to={link.path} activeClassName="text-gray-900" className="text-gray-500 hover:text-gray-900" >{link.link}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    <button className='bg-blue-800 py-2 px-5 rounded-[3px] text-white'>Get A Quote</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar