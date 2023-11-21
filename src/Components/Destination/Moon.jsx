

function Moon() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center mt-3 font-bellefair text-4xl">MOON</h2>
                <p className="text-center mx-6 mt-2 text-gray-300">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            </div>
            <hr className="border-b-2 border-gray-800 mt-3 mx-10" />

            <div className="text-center">
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">AVG. DISTANCE</h2>
                    <h3 className="mt-1 font-bellefair text-2xl">384,400 km</h3>
                </div>
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">EST. TRAVEL TIME</h2>
                    <h3 className="mt-1 font-bellefair text-2xl ">3 days</h3>
                </div>
            </div>
        </div>
    )
}

export default Moon