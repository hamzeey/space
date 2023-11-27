import Nav from "../Nav/Nav"
import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import vehicle from '../../Asssets/image-launch-vehicle-landscape.jpg'
import vehicle2 from '../../Asssets/image-launch-vehicle-portrait.jpg'
import spaceport from '../../Asssets/image-spaceport-landscape.jpg'
import spaceport2 from '../../Asssets/image-spaceport-portrait.jpg'
import capsule from '../../Asssets/image-space-capsule-landscape.jpg'
import capsule2 from '../../Asssets/image-space-capsule-portrait.jpg'
function Technology() {

    const [src, setsrc] = useState(vehicle)
    const [vehicleActive, setVehicleActive] = useState(false)
    const [portActive, setPortActive] = useState(false)
    const [capsuleActive, setCapsuleActive] = useState(false)
    const [src2, setsrc2] = useState(vehicle2)

    const handleclick1 = () => {

        setsrc(vehicle)
        setsrc2(vehicle2)
        setVehicleActive(true)
        setPortActive(false)
        setCapsuleActive(false)
    }
    const handleclick2 = () => {

        setsrc(spaceport)
        setsrc2(spaceport2)
        setVehicleActive(false)
        setPortActive(true)
        setCapsuleActive(false)
    }
    const handleclick3 = () => {

        setsrc(capsule)
        setsrc2(capsule2)
        setVehicleActive(false)
        setPortActive(false)
        setCapsuleActive(true)
    }
    return (

        <div className=" bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9 text-white">
            <Nav />
            <div className="lg:grid lg:grid-cols-2 lg:pt-2">

                <div>
                    <div className="flex justify-center md:justify-start md:ml-7 md:mb-5 font-barlow mt-4 mb-3 text-xl tracking-widest lg:hidden ">
                        <p><span className="text-gray-500 mr-4 ">03</span>SPACE LAUNCH 101</p>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-2 mb-4 lg:mt-8">
                        <img src={src} alt="" className=" w-full md:h-[250px] flex lg:hidden " />
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-2 mb-4 lg:mt-4">
                        <img src={src2} alt="" className=" w-[400px]  hidden lg:block" />
                    </div>
                </div>
                <div className="lg:order-first ">
                    <div className="lg:flex justify-start ml-20  mb-5 font-barlow mt-4 text-xl tracking-widest hidden ">
                        <p><span className="text-gray-500 mr-4 ">03</span>SPACE LAUNCH 101</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-[150px,1fr]">
                        <div>

                            <nav className="flex justify-center items-center gap-10  font-barlow  text-lg text-gray-400 mt-6 lg:flex-col lg:mt-24">
                                <Link to='vehicle'><div className={` ${vehicleActive ? 'bg-white text-black' : 'text-white'} w-[40px] h-[40px] rounded-full flex justify-center items-center outline outline-1  `} onClick={handleclick1}>1</div></Link>
                                <Link to='spaceport'><div className={` ${portActive ? 'bg-white text-black' : 'text-white'} w-[40px] h-[40px] rounded-full flex justify-center items-center outline outline-1 `} onClick={handleclick2}>2</div></Link>
                                <Link to='capsule'><div className={` ${capsuleActive ? 'bg-white text-black' : 'text-white'} w-[40px] h-[40px] rounded-full flex justify-center items-center outline outline-1  `} onClick={handleclick3}>3</div></Link>
                            </nav>
                        </div>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology