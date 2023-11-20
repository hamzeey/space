import Nav from "../Nav/Nav"
import { Link, Outlet } from "react-router-dom"

function Destination() {
    return (

        <div className=" bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9 text-white ">
            <Nav />

            <div className="flex justify-center font-barlow">
                <p><span className="text-gray-500">01</span> PICK YOUR DESTINATION</p>
            </div >

            <nav className="flex justify-center items-center gap-10 font-barlow">
                <Link to='moon' className="border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200">MOON</Link>
                <Link to='mars' className="border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200">MARS</Link>
                <Link to='europa' className="border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200">EUROPA</Link>
                <Link to='titan' className="border-b-4 duration-300 border-transparent active:border-white hover:border-gray-200">TITAN</Link>
            </nav>
            <Outlet />
        </div >
    )
}

export default Destination