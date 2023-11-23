import Nav from "../Nav/Nav"
import { Link, Outlet } from "react-router-dom"
import douglas from '../../Asssets/image-douglas-hurley.png'
import mark from '../../Asssets/image-mark-shuttleworth.png'
import victor from '../../Asssets/image-victor-glover.png'
import ansari from '../../Asssets/image-anousheh-ansari.png'
import { useState } from "react"


function Crew() {

    const [Image, setImage] = useState(douglas)

    const handleclick1 = () => {
        setImage(douglas)
    }
    const handleclick2 = () => {
        setImage(mark)
    }
    const handleclick3 = () => {
        setImage(victor)
    }
    const handleclick4 = () => {
        setImage(ansari)
    }
    return (
        <div className=" bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9">
            <Nav />

            <div>
                <div>
                    <div className="flex justify-center md:justify-start lg:justify-center lg:mt-14 md:ml-4 font-barlow mt-2 sm:mt-4 text-xl tracking-wide text-white">
                        <p><span className="text-gray-500 mr-2">02</span> MEET YOUR CREW</p>
                    </div>
                    <div className="flex justify-center mt-2 sm:mt-2  lg:mt-24 lg:ml-12">
                        <img src={Image} alt="crew member" className="w-44" />
                    </div>
                    <hr className="border-t-2 border-gray-600 mx-10 mb-4" />

                </div>

                <nav className="flex justify-center items-center gap-6">

                    <Link to='douglas' onClick={handleclick1}> <div className="w-3 h-3 rounded-full bg-white"></div> </Link>
                    <Link to='mark' onClick={handleclick2}><div className="w-3 h-3 rounded-full bg-white"></div></Link>
                    <Link to='victor' onClick={handleclick3}><div className="w-3 h-3 rounded-full bg-white"></div> </Link>
                    <Link to='ansari' onClick={handleclick4}> <div className="w-3 h-3 rounded-full bg-white"></div></Link>

                </nav>
            </div>
        </div>
    )
}

export default Crew