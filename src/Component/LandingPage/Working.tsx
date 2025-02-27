import landingImage from '../../assets/images/Connecting.png';

const Working = () => {
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl text-center font-semibold mb-3 text-cape-cod-100">
                How to get <span className="text-blue-400">started</span>
            </div>
            <p className="text-lg mb-10 mx-auto text-cape-cod-300 text-center w-1/2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos incidunt.</p>

            <div className="flex px-16 justify-around items-center">
                <div>
                    <img className="w-[30rem]" src={landingImage} alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-blue-300 rounded-full">
                            <img className="h-12 w-12" src={landingImage} alt="" />
                        </div>
                        <div>
                            <div className="text-cape-cod-200 text-xl font-semibold">build resume..</div>
                            <div className="text-cape-cod-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Working