import { useState } from 'react'
import Hamburger from '../../Asssets/icon-hamburger.svg'
import close from '../../Asssets/icon-close.svg'
import Logo from '../../Asssets/logo.svg'

import { NavLink } from 'react-router-dom'


function Nav() {
    const [isOpen, setOpen] = useState(false)

    return (

        <nav className='text-white flex justify-between items-center pt-4 md:pt-2 font-barlow text-sm md:text-base lg:text-xl '>


            <img src={Logo} alt="logo" className='w-8 md:w-10 lg:w-12 ml-8' />
            <img src={isOpen ? close : Hamburger} alt="" className='z-20 fixed right-5 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!isOpen)} />
            <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 lg:pl-20 pr-20 md:pr-2 lg:pr-20 z-10 p-6 md:static fixed top-0  md:h-auto h-screen ${!isOpen ? 'right-[-100%]' : 'right-0'}`}>
                <li className='md:inline-block md:ml-10 ml-5 border-b-4  border-transparent active:border-white duration-300  pb-4 lg:pb-0 md:my-0 my-6 hover:border-gray-500'>    <NavLink to='/' > 00 HOME</NavLink></li>
                <li className='md:inline-block md:ml-10 ml-5 border-b-4 border-transparent active:border-white duration-300 pb-4 lg:pb-0 md:my-0 my-6 hover:border-gray-500'>   <NavLink to='/destination'> 01 DESTINATION</NavLink> </li>
                <li className='md:inline-block md:ml-10 ml-5 border-b-4 border-transparent active:border-white duration-300 pb-4 lg:pb-0 md:my-0 my-6 hover:border-gray-500'>    <NavLink to='/crew'> 02 CREW</NavLink> </li>
                <li className='md:inline-block md:ml-10 ml-5 border-b-4 border-transparent active:border-white duration-300 pb-4 lg:pb-0 md:my-0 my-6 hover:border-gray-500'>      <NavLink to='/technology'> 03 TECHNOLOGY</NavLink> </li>
            </ul>

        </nav>
    )
}

export default Nav