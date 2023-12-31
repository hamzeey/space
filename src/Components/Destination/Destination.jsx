import Nav from "../Nav/Nav"
import { Link, Outlet } from "react-router-dom"
import moonImage from '../../Asssets/image-moon.png'
import marsImage from '../../Asssets/image-mars.png'
import europaImage from '../../Asssets/image-europa.png'
import titanImage from '../../Asssets/image-titan.png'
import { useState } from "react"


function Destination() {

    const [moonsrc, setsrc] = useState(moonImage)
    const [isActiveMoon, setActiveMoon] = useState(false)
    const [isActiveMars, setActiveMars] = useState(false)
    const [isActiveEuropa, setActiveEuropa] = useState(false)
    const [isActiveTitan, setActiveTitan] = useState(false)

    const handleclick1 = () => {
        setsrc(moonImage);
        setActiveMoon(true);
        setActiveMars(false);
        setActiveEuropa(false);
        setActiveTitan(false);
    }
    const handleclick2 = () => {
        setsrc(marsImage);
        setActiveMoon(false);
        setActiveMars(true);
        setActiveEuropa(false);
        setActiveTitan(false);
    }
    const handleclick3 = () => {
        setsrc(europaImage);
        setActiveMoon(false);
        setActiveMars(false);
        setActiveEuropa(true);
        setActiveTitan(false);
    }
    const handleclick4 = () => {
        setsrc(titanImage);
        setActiveMoon(false);
        setActiveMars(false);
        setActiveEuropa(false);
        setActiveTitan(true);
    }
    return (

        <div className=" bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9 text-white">
            <Nav />
            <div className="lg:grid lg:grid-cols-2 ">
                <div>
                    <div className="flex justify-center md:justify-start lg:justify-center lg:mt-14 md:ml-4 font-barlow mt-2 sm:mt-4 text-xl tracking-wide">
                        <p><span className="text-gray-500 mr-2">01</span> PICK YOUR DESTINATION</p>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-2 mb-4 lg:mt-24 lg:ml-12">
                        <img src={moonsrc} alt="images" className="w-36 sm:w-40 lg:w-72 " />
                    </div>
                </div>
                <div>
                    <nav className="flex justify-center items-center gap-10  font-barlow  text-lg text-gray-400 lg:mt-20 lg:text-xl">

                        <Link to='moon' className={`border-b-4 duration-300 border-transparent hover:border-gray-200 ${isActiveMoon ? 'text-white border-white' : 'text-gray-500 border-gray-200 border-b-transparent'}`} onClick={handleclick1}>MOON</Link>
                        <Link to='mars' className={`border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200 ${isActiveMars ? 'text-white border-white' : 'text-gray-500 border-gray-200 border-b-transparent'}`} onClick={handleclick2} >MARS</Link>
                        <Link to='europa' className={`border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200 ${isActiveEuropa ? 'text-white border-white' : 'text-gray-500 border-gray-200 border-b-transparent'}`} onClick={handleclick3}>EUROPA</Link>
                        <Link to='titan' className={`border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200 ${isActiveTitan ? 'text-white border-white' : 'text-gray-500 border-gray-200 border-b-transparent'}`} onClick={handleclick4}>TITAN</Link>
                    </nav>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Destination