// import mars from '../../Asssets/image-mars.png'

function Mars() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center mt-3 sm:mt-6 font-bellefair text-4xl sm:text-5xl md:text-6xl lg:text-7xl">MARS</h2>
                <p className="text-center mx-6 mt-2 sm:mt-4 sm:mx-8 md:mx-16 lg:text-lg text-gray-300">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            </div>
            <hr className="border-b-2 border-gray-800 mt-3 sm:mt-5 mx-10 lg:mt-4" />

            <div className="text-center sm:mt-5 md:flex md:justify-center gap-28">
                <div className="mt-2 sm:mt-2">
                    <h2 className="font-barlow text-base sm:text-lg text-gray-300  lg:text-xl">AVG. DISTANCE</h2>
                    <h3 className="mt-1 sm:mt-2 font-bellefair text-2xl sm:text-3xl lg:text-3xl ">225 mil. km</h3>
                </div>
                <div className="mt-2 sm:mt-2">
                    <h2 className="font-barlow text-base sm:text-lg text-gray-300 lg:text-xl">EST. TRAVEL TIME</h2>
                    <h3 className="mt-1 sm:mt-2 font-bellefair text-2xl sm:text-3xl lg:text-3xl">9 months</h3>
                </div>
            </div>
        </div>
    )
}

export default Mars