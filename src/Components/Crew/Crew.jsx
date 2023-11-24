import Nav from "../Nav/Nav"
import { Link, Outlet } from "react-router-dom"
import douglas from '../../Asssets/image-douglas-hurley.png'
import mark from '../../Asssets/image-mark-shuttleworth.png'
import victor from '../../Asssets/image-victor-glover.png'
import ansari from '../../Asssets/image-anousheh-ansari.png'
import { useState } from "react"


function Crew() {

    const [Image, setImage] = useState(douglas)
    const [DougActive, setDougAcive] = useState(false)
    const [MarkActive, setMArkAcive] = useState(false)
    const [VicActive, setVicAcive] = useState(false)
    const [AnsActive, setAnsAcive] = useState(false)

    const handleclick1 = () => {
        setImage(douglas)
        setDougAcive(true)
        setMArkAcive(false)
        setVicAcive(false)
        setAnsAcive(false)
    }
    const handleclick2 = () => {
        setImage(mark)
        setDougAcive(false)
        setMArkAcive(true)
        setVicAcive(false)
        setAnsAcive(false)
    }
    const handleclick3 = () => {
        setImage(victor)
        setDougAcive(false)
        setMArkAcive(false)
        setVicAcive(true)
        setAnsAcive(false)
    }
    const handleclick4 = () => {
        setImage(ansari)
        setDougAcive(false)
        setMArkAcive(false)
        setVicAcive(false)
        setAnsAcive(true)
    }
    return (
        <div className=" bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9">
            <Nav />

            <div className="lg:grid grid-cols-2">
                <div >
                    <div className="flex justify-center md:justify-start md:ml-5 font-barlow mt-6 lg:mt-10 lg:justify-center text-xl tracking-wide text-white ">
                        <p><span className="text-gray-500 mr-2">02</span> MEET YOUR CREW</p>
                    </div>
                    <div className="flex justify-center mt-6 ">
                        <img src={Image} alt="crew member" className="w-44 md:hidden " />
                    </div>
                    <hr className="border-t-2 border-gray-600 mx-10 mb-4 md:hidden" />



                    <nav className="flex justify-center items-center gap-6 mt-6  md:hidden">

                        <Link to='douglas' onClick={handleclick1}> <div className={`  ${DougActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div> </Link>
                        <Link to='mark' onClick={handleclick2}><div className={` ${MarkActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div></Link>
                        <Link to='victor' onClick={handleclick3}><div className={`  ${VicActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div> </Link>
                        <Link to='ansari' onClick={handleclick4}> <div className={` ${AnsActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div></Link>

                    </nav>
                    <Outlet />
                    <nav className="md:flex md:justify-center md:items-center md:gap-6 md:mt-7 hidden ">

                        <Link to='douglas' onClick={handleclick1}> <div className={`  ${DougActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div> </Link>
                        <Link to='mark' onClick={handleclick2}><div className={` ${MarkActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div></Link>
                        <Link to='victor' onClick={handleclick3}><div className={` ${VicActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div> </Link>
                        <Link to='ansari' onClick={handleclick4}> <div className={` ${AnsActive ? 'bg-white' : 'bg-gray-500'} w-3 h-3 rounded-full bg-white`}></div></Link>

                    </nav>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0 ">
                    <img src={Image} alt="crew member" className=" w-48 md:w-56 lg:w-80 lg:mt-5 hidden md:block " />
                </div>
            </div>
        </div>
    )
}

export default Crew