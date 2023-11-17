import { useState } from 'react'
import Hamburger from '../../Asssets/icon-hamburger.svg'
import close from '../../Asssets/icon-close.svg'
import Logo from '../../Asssets/logo.svg'
import './Nav.css'
import { NavLink } from 'react-router-dom'


function Nav() {
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!isOpen)
    }
    return (

        <nav className='text-white bg-gray-400  '>
            <div className='flex justify-between items-center pt-4 '>
                <div className='logo text-white'>
                    <img src={Logo} alt="" />
                </div>
                <NavLink to='/'> 00 HOME</NavLink>
                <NavLink to='/destination'> 01 DESTINATION</NavLink>
                <NavLink to='/crew'> 02 CREW</NavLink>
                <NavLink to='/technology'> 03 TECHNOLOGY</NavLink>
            </div>
        </nav>
    )
}

export default Nav