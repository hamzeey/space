import './Main.css'
import Nav from '../Nav/Nav'
function Main() {
    return (
        <div className="main bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9">

            <Nav />
            <div className='inline-block lg:grid lg:grid-cols-2 ' >
                <div className='mt-16 lg:mt-24'>
                    <p className='text-gray-400 text-center text-sm lg:text-xl uppercase font-barlow tracking-widest'>so, you want to  travel to</p>
                    <h1 className='text-white text-center mt-8 text-8xl font-bellefair'>SPACE</h1>
                    <p className='text-gray-400 text-center overflow-hidden mx-6 mt-10 text-base lg:text-lg tracking-widest md:mx-40 lg:mx-16'> {`Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience `}</p>
                </div>

                <div className='flex justify-center '>
                    <div className='w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-white flex  justify-center items-center mt-24  md:mt-16 lg:mt-64 lg:ml-24 '>
                        <h1 className='text-zinc-950 text-3xl font-bellefair font-medium'>Explore</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main