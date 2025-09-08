import { FaRegStar } from 'react-icons/fa'
import Logo from '../logo/Logo'
import { GrContact } from "react-icons/gr"
import { PiProjectorScreenChartDuotone } from "react-icons/pi"
import { TbHomeHeart } from "react-icons/tb"
import './Header.css'

function Header() {
  return (
    <>
      <div className='bg-transparent absolute w-full top-0 left-0 z-10'>
        <div className='container mx-auto flex justify-between items-center py-6 px-8 md:px-0'>
          <Logo />
          <div className='flex items-center gap-6 selection:bg-white selection:text-[#6fdcbe]'>
            <ul className='gap-10 text-black text-lg font-medium hidden md:flex'>
              <li className='nav-link'>Projects</li>
              <li className='nav-link'>About</li>
              <li className='nav-link'>Contact</li>
            </ul>
            <input className="l" type="checkbox" />

          </div>
        </div>
      </div>

      <div className='md:hidden block'>
        <ul className="fixed bg-[#F6F4F6] z-50 bottom-0 left-0 right-0 flex justify-center items-center py-3 border-t md:hidden gap-4">
          <li className='nav-link'>
            <TbHomeHeart />
            <span>Home</span>
          </li>
          <li className='nav-link'>
            <PiProjectorScreenChartDuotone />
            <span>Projects</span>
          </li>
          <li className='nav-link'>
            <FaRegStar />
            <span>About</span>
          </li>
          <li className='nav-link'>
            <GrContact />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
