import { useContext } from "react";
import { FaRegStar } from 'react-icons/fa';
import Logo from '../logo/Logo';
import { GrContact } from "react-icons/gr";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import { TbHomeHeart } from "react-icons/tb";
import './header.css';
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const textColor = theme === "dark" ? "text-white" : "text-black";
  const bgColor = theme === "dark" ? "bg-transparent" : "bg-transparent";
  const mobileBg = theme === "dark" ? "bg-[#29272A]" : "bg-[#F6F4F6]";
  const selectionColor = theme === "dark"
    ? "selection:bg-[#643959] selection:text-[#29272A]"
    : "selection:bg-white selection:text-[#6fdcbe]";

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop header */}
      <div className={`${bgColor} ${selectionColor} absolute w-full top-0 left-0 z-10 transition-colors duration-500`}>
        <div className='container mx-auto flex justify-between items-center py-6 px-8 md:px-0'>
          <Logo />
          <div className={`flex items-center gap-6`}>
            <ul className={`gap-10 ${textColor} text-lg font-medium hidden md:flex`}>
              <li className='nav-link'>
                <a href="#project" onClick={handleScroll("project")}>Projects</a>
              </li>
              <li className='nav-link'>
                <a href="#about" onClick={handleScroll("about")}>About</a>
              </li>
              <li className='nav-link'>
                <a href="#contact" onClick={handleScroll("contact")}>Contact</a>
              </li>
              <li className='nav-link'>
                <a href="#home" onClick={handleScroll("home")}>Home</a>
              </li>
            </ul>
            {/* Theme toggle */}
            <input
              type="checkbox"
              className="l"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className='md:hidden block'>
        <ul className={`fixed ${mobileBg} z-50 bottom-0 left-0 right-0 flex justify-center items-center py-3 border-t md:hidden gap-4 transition-colors duration-500`}>
          <li className={`nav-link ${textColor}`}>
            <a href="#home" onClick={handleScroll("home")} className="flex flex-col items-center"><TbHomeHeart /><span>Home</span></a>
          </li>
          <li className={`nav-link ${textColor}`}>
            <a href="#project" onClick={handleScroll("project")} className="flex flex-col items-center"><PiProjectorScreenChartDuotone /><span>Projects</span></a>
          </li>
          <li className={`nav-link ${textColor}`}>
            <a href="#about" onClick={handleScroll("about")} className="flex flex-col items-center"><FaRegStar /><span>About</span></a>
          </li>
          <li className={`nav-link ${textColor}`}>
            <a href="#contact" onClick={handleScroll("contact")} className="flex flex-col items-center"><GrContact /><span>Contact</span></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
