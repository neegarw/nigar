import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";

import a101 from "../../assets/imgs/a101.png";
import apple from "../../assets/imgs/apple.png";
import bayfilm from "../../assets/imgs/bayfilm.png";
import neptun from "../../assets/imgs/neptun.png";
import papa from "../../assets/imgs/papa.png";
import StarButton from "../buttons/StarButton";

function Projects() {
    const { theme } = useContext(ThemeContext);

    const projects = [
        { img: a101, link: "https://a101-react-594wlsusi-neegars-projects.vercel.app/" },
        { img: apple, link: "https://apple-demo-eight.vercel.app/" },
        { img: bayfilm, link: "https://bayfilm-ten.vercel.app/" },
        { img: neptun, link: "https://neptun-react.vercel.app/" },
        { img: papa, link: "https://papa-nextjs.vercel.app/" }
    ];

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1500, once: true });
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Dynamic background, text, selection rəngləri
    const bgColor = theme === "dark" ? "bg-[#4C3A69]" : "bg-[#AE8FDB]";
    const textColor = theme === "dark" ? "text-white" : "text-[#404040]";
    const selectionText = theme === "dark" ? "selection:text-[#AE8FDB]" : "selection:text-[#AE8FDB]";
    const selectionBg = theme === "dark" ? "selection:bg-[#643959]" : "selection:bg-white";

    return (
        <div 
        id="project"
        className={`${bgColor} w-full ${textColor} py-[50px] md:py-[70px] lg:py-[100px] flex flex-col justify-center items-center relative ${selectionBg} ${selectionText}`}>
            <h2 className="text-[40px] md:text-[50px] lg:text-[60px] text-center px-4">Projects</h2>
            <div className="container mx-auto px-4 py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 relative z-10 top-0">

                {projects.map((project, index) => {
                    const aosType = isDesktop
                        ? (index % 2 === 0 ? "fade-right" : "fade-left")
                        : (index % 2 === 0 ? "fade-left" : "fade-right");

                    return (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos={aosType}
                            className="relative block w-full overflow-hidden rounded-[15px]"
                            whileHover={{ scale: 1.05 }}
                        >

                            <div className="h-[20px] border-2 border-gray-500 rounded-t-[15px] px-2 py-3 flex gap-1 items-center bg-red-100">
                                <div className="bg-[#FE5F57] border border-[#E34037] rounded-full w-[10px] h-[10px]"></div>
                                <div className="bg-[#FFBE2F] border border-[#FEBC27] rounded-full w-[10px] h-[10px]"></div>
                                <div className="bg-[#29C742] border border-[#1DA823] rounded-full w-[10px] h-[10px]"></div>
                            </div>
                            <div className="w-full h-[237px] border-b-2 border-l-2 border-r-2 border-gray-500 rounded-b-[15px] overflow-hidden">
                                <img
                                    src={project.img}
                                    alt={`project-${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <motion.div
                                className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 transition-opacity duration-300"
                                whileHover={{ opacity: 1 }}
                            >
                                <StarButton />
                            </motion.div>
                        </motion.a>
                    );
                })}

                {/* More Projects Card */}
                <motion.a
                    data-aos={isDesktop ? "fade-left" : "fade-right"} 
                    href="https://github.com/neegarw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn relative block w-full h-[257px] overflow-hidden rounded-[15px] border-2 border-gray-500 flex justify-center items-center h-[237px] bg-gray-200 hover:bg-gray-300 transition"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-xl font-bold text-black">More Projects</span>
                </motion.a>

            </div>
        </div>
    );
}

export default Projects;
