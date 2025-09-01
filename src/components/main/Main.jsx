import Sticker from "./Sticker"

function Main() {
    return (
        <>
            <div className="flex relative top-[-135px] left-0 z-[-10] text-[#404040]">
                <div className="bg-[#F6F4F6] w-[40%] h-screen pt-[200px] hidden md:block ">
                    <div className="w-[80%] mx-auto text-left">
                        <Sticker />
                    </div>
                </div>
                <div className="md:w-[60%] w-full h-screen mb-4 p-10 pt-[200px] md:bg-[#6FDCBE] bg-[#f6f4f6] text-[30px] md:text-[40px] lg:text-[50px]">
                    <div className="md:w-[70%] w-[90%] mx-auto text-left md:leading-15 leading-10">
                        <h1 className="text-[20px] block py-2">👋 hi, I’m nigar</h1>
                        I’m a Front-End Developer passionate about building user-friendly, pixel-perfect interfaces. Currently working with React, Next.js and creating real-world projects.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main