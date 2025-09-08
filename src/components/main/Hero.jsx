import Sticker from "./Sticker"

function Hero() {
    return (
        <>
            <div className="flex relative  left-0 z-[-10] text-[#404040]">
                <div className="bg-[#F6F4F6] w-[40%] h-[90vh] md:h-screen pt-[230px] hidden md:block ">
                    <div className="w-[80%] mx-auto text-left">
                        <Sticker />
                    </div>
                </div>
                <div className="md:w-[60%] w-full h-[90vh] md:h-screen px-4 pt-[150px] md:bg-[#6FDCBE] bg-[#f6f4f6] text-[28px] md:text-[30px] xl:text-[50px] lg:text-[40px] selection:bg-white selection:text-[#6fdcbe]">
                    <div className="md:w-[70%] w-[90%] mx-auto text-left md:leading-15 leading-10 ">
                        <h1 className="text-[20px] block py-2 -rotate-5">👋 Hi, I’m Nigar</h1>
                        I’m a Front-End Developer passionate about building user-friendly, pixel-perfect interfaces. Currently working with <span className="reactspan selection:text-[#404040]">React</span>, Next.js and creating real-world projects.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero