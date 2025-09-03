import a101 from "../../assets/imgs/a101.png"
import apple from "../../assets/imgs/apple.png"
import bayfilm from "../../assets/imgs/bayfilm.png"
import neptun from "../../assets/imgs/neptun.png"
import papa from "../../assets/imgs/papa.png"

function Projects() {
    const images = [a101, apple, bayfilm, neptun, papa];
    const links = [
        "https://a101-react-594wlsusi-neegars-projects.vercel.app/",
        "https://apple-demo-eight.vercel.app/",
        "https://bayfilm-ten.vercel.app/",
        "https://neptun-react.vercel.app/",
        "https://papa-nextjs.vercel.app/"
    ]

    return (
        <>
            <div className="bg-[#EDB0FD] w-full text-[#404040] py-[50px]  md:py-[70px] ld:py-[100px]">
                <div className="container mx-auto">
                    <h2 className="text-[40px] md:text-[50px] lg:text-[60px] md:text-left text-center pb-[40px] px-4">Projects</h2>
                    <div className="grid gap-6 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-3
                    px-4">
                        {images.map((src, index) => (
                            <a href={links[index]} key={index} className="mx-auto block w-full" rel="noopener noreferrer" target="_blank">
                                {/* üst hissə */}
                                <div className="h-[20px] border-2 border-gray-500 rounded-t-[15px] px-2 py-3 flex gap-1 items-center bg-white">
                                    <div className="bg-[#FE5F57] border border-[#E34037] rounded-full w-[10px] h-[10px]"></div>
                                    <div className="bg-[#FFBE2F] border border-[#FEBC27] rounded-full w-[10px] h-[10px]"></div>
                                    <div className="bg-[#29C742] border border-[#1DA823] rounded-full w-[10px] h-[10px]"></div>
                                </div>
                                {/* şəkil hissəsi */}
                                <div className="w-full h-[237px] bg-white border-r-2 border-l-2 border-b-2 border-gray-500 rounded-b-[15px]">
                                    <img className="w-full h-[235px] object-cover rounded-b-[13px]" src={src} alt={`img-${index}`} />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects