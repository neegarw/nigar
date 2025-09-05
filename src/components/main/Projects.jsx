import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import a101 from "../../assets/imgs/a101.png";
import apple from "../../assets/imgs/apple.png";
import bayfilm from "../../assets/imgs/bayfilm.png";
import neptun from "../../assets/imgs/neptun.png";
import papa from "../../assets/imgs/papa.png";

function Projects() {
    const images = [a101, apple, bayfilm, neptun, papa];
    const links = [
        "https://a101-react-594wlsusi-neegars-projects.vercel.app/",
        "https://apple-demo-eight.vercel.app/",
        "https://bayfilm-ten.vercel.app/",
        "https://neptun-react.vercel.app/",
        "https://papa-nextjs.vercel.app/"
    ];

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // AOS başlat
        AOS.init({ duration: 1500, once: true });

        // Ekran ölçüsünü yoxla
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="bg-[#AE8FDB] w-full text-[#404040] py-[50px] md:py-[70px] lg:py-[100px] flex flex-col justify-center items-center absolute">
                <div className="container mx-auto flex justify-center items-center">
                    <h2 className="text-[40px] md:text-[50px] lg:text-[60px] text-center px-4">Projects</h2>
                </div>
                <div className="container mx-auto px-4 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-8 gap-x-6 relative z-10 top-0">
                    {images.map((src, index) => {
                        // Mobil və desktop üçün animasiya
                        const aosType = isDesktop
                            ? (index % 2 === 0 ? "fade-right" : "fade-left")  // desktop
                            : (index % 2 === 0 ? "fade-left" : "fade-right"); // mobile

                        return (
                            <a
                                href={links[index]}
                                key={index}
                                className="mx-auto block w-full md:w-[90%]"
                                rel="noopener noreferrer"
                                target="_blank"
                                data-aos={aosType}
                            >
                                {/* üst hissə */}
                                <div className="h-[20px] border-2 border-gray-500 rounded-t-[15px] px-2 py-3 flex gap-1 items-center bg-white">
                                    <div className="bg-[#FE5F57] border border-[#E34037] rounded-full w-[10px] h-[10px]"></div>
                                    <div className="bg-[#FFBE2F] border border-[#FEBC27] rounded-full w-[10px] h-[10px]"></div>
                                    <div className="bg-[#29C742] border border-[#1DA823] rounded-full w-[10px] h-[10px]"></div>
                                </div>

                                {/* şəkil hissəsi */}
                                <div className="w-full h-[237px] bg-white border-r-2 border-l-2 border-b-2 border-gray-500 rounded-b-[15px]">
                                    <img
                                        className="w-full h-[235px] object-cover rounded-b-[13px]"
                                        src={src}
                                        alt={`img-${index}`}
                                    />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Projects;
