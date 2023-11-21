// import titan from '../../Asssets/image-titan.png'

function Titan() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center mt-3 font-bellefair text-4xl">TITAN</h2>
                <p className="text-center mx-6 mt-2 text-gray-300">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            </div>
            <hr className="border-b-2 border-gray-800 mt-3 mx-10" />

            <div className="text-center">
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">AVG. DISTANCE</h2>
                    <h3 className="mt-1 font-bellefair text-2xl">1.6 bil. km</h3>
                </div>
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">EST. TRAVEL TIME</h2>
                    <h3 className="mt-1 font-bellefair text-2xl ">7 years</h3>
                </div>
            </div>
        </div>
    )
}

export default Titan