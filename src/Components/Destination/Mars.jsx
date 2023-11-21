// import mars from '../../Asssets/image-mars.png'

function Mars() {
    return (
        <div>
            <div>
                <h2 className="flex justify-center mt-3 font-bellefair text-4xl">MARS</h2>
                <p className="text-center mx-6 mt-2 text-gray-300">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
            </div>
            <hr className="border-b-2 border-gray-800 mt-3 mx-10" />

            <div className="text-center">
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">AVG. DISTANCE</h2>
                    <h3 className="mt-1 font-bellefair text-2xl">225 mil. km</h3>
                </div>
                <div className="mt-2">
                    <h2 className="font-barlow text-base text-gray-300">EST. TRAVEL TIME</h2>
                    <h3 className="mt-1 font-bellefair text-2xl ">9 months</h3>
                </div>
            </div>
        </div>
    )
}

export default Mars