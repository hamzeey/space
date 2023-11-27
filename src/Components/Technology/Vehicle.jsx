

function Vehicle() {
    return (
        <div className="md:mt-10 lg:mt-20">
            <div className="uppercase text-white mt-4 ">
                <h3 className="flex justify-center lg:justify-start  text-gray-400 tracking-wide">The terminology...</h3>
                <h1 className="flex justify-center text-2xl lg:justify-start lg:mt-4 lg:mb-2 tracking-widest mt-2">launch vehicle</h1>

            </div>

            <div className="mt-2 text-gray-400 text-center mx-[50px] md:mx-[150px] lg:mx-0 lg:text-xl lg:text-left ">
                <p>{`A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`}</p>
            </div>
        </div>
    )
}

export default Vehicle