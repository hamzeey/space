
import Nav from '../Nav/Nav'
function Main() {
    return (
        <div className="main bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen bg-no-repeat bg-center bg-cover  lg:pt-9">

            <Nav />
            <div className='inline-block lg:grid lg:grid-cols-2 ' >
                <div className='mt-10 lg:mt-24'>
                    <p className='text-gray-400 text-center text-sm lg:text-xl uppercase font-barlow tracking-widest'>so, you want to  travel to</p>
                    <h1 className='text-white text-center mt-4 text-8xl font-bellefair'>SPACE</h1>
                    <p className='text-gray-400 text-center overflow-hidden mx-6 mt-76 text-base lg:text-lg tracking-widest md:mx-40 lg:mx-16'> {`Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience `}</p>
                </div>

                <div className='flex justify-center items-center '>
                    <div className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-white flex  justify-center items-center mt-24  md:mt-16 lg:mt-60 lg:ml-24  hover:outline-[40px] hover:outline hover:outline-accent/50 box-content transition-all ease-in-out duration-[4000] delay-200 '>
                        <button className='text-zinc-950 text-3xl font-bellefair font-medium  '>Explore</button>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Main