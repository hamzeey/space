

function Moon() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center mt-3 sm:mt-6 font-bellefair text-4xl sm:text-5xl md:text-6xl lg:text-7xl">MOON</h2>
                <p className="text-center mx-6 mt-2 sm:mt-4 sm:mx-8 md:mx-16 lg:text-lg text-gray-300">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
            <hr className="border-b-2 border-gray-800 mt-3 sm:mt-5 mx-10 lg:mt-4" />

            <div className="text-center sm:mt-5 md:flex md:justify-center gap-28">
                <div className="mt-2 sm:mt-2">
                    <h2 className="font-barlow text-base sm:text-lg text-gray-300  lg:text-xl">AVG. DISTANCE</h2>
                    <h3 className="mt-1 sm:mt-2 font-bellefair text-2xl sm:text-3xl lg:text-3xl ">384,400 km</h3>
                </div>
                <div className="mt-2 sm:mt-2">
                    <h2 className="font-barlow text-base sm:text-lg text-gray-300 lg:text-xl">EST. TRAVEL TIME</h2>
                    <h3 className="mt-1 sm:mt-2 font-bellefair text-2xl sm:text-3xl lg:text-3xl">3 days</h3>
                </div>
            </div>
        </div>
    )
}

export default Moon