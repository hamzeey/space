

function Capsule() {
    return (
        <div className="md:mt-10 lg:mt-20">
            <div className="uppercase text-white mt-4 ">
                <h3 className="flex justify-center lg:justify-start  text-gray-400 tracking-wide">The terminology...</h3>
                <h1 className="flex justify-center text-2xl lg:justify-start lg:mt-4 lg:mb-2 tracking-widest mt-2">space capsle</h1>

            </div>

            <div className="mt-2 text-gray-400 text-center mx-[50px] md:mx-[150px] lg:mx-0 lg:text-xl lg:text-left ">
                <p>{`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`}</p>
            </div>
        </div>
    )
}

export default Capsule