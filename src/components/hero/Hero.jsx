import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Sticker from "./Sticker";

function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="home"
      className={`flex relative h-screen md:h-auto left-0 z-[-10] transition-colors duration-700 ${theme === "dark" ? "bg-[#1F1F1F] text-[#E0E0E0]" : "bg-[#F6F4F6] text-[#404040]"
        }`}
    >
      {/* Left Side */}
      <div
        className={`w-[40%] h-[90vh] md:h-screen pt-[230px] hidden md:block transition-colors duration-700 ${theme === "dark" ? "bg-[#29272A]" : "bg-[#F6F4F6]"
          }`}
      >
        <div className="w-[80%] mx-auto text-left">
          <Sticker />
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`md:w-[60%] w-full h-screen md:h-auto px-4 pt-[150px] transition-colors duration-700 ${theme === "dark" ? "bg-[#774069] text-[#E0E0E0] selection:bg-[#643959] selection:text-[#29272A]" : "md:bg-[#6FDCBE] bg-[#f6f4f6] text-[#404040] selection:bg-white selection:text-[#6fdcbe]"
          } text-[28px] md:text-[30px] xl:text-[50px] lg:text-[40px] `}
      >
        <div className="md:w-[70%] w-[90%] mx-auto text-left md:leading-15 leading-10 ">
          <h1 className="text-[20px] block py-2 -rotate-5">
            👋 Hi, I’m Nigar
          </h1>
          I’m a Front-End Developer passionate about building user-friendly, pixel-perfect interfaces. Currently working with{" "}
          <span className="reactspan selection:text-[#404040]">React</span>, Next.js and creating real-world projects.
        </div>
      </div>
    </div>
  );
}

export default Hero;
