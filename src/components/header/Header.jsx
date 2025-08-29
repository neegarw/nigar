import Logo from '../logo/Logo'

function Header() {
  return (
    <>
      <div className='bg-transparent'>
        <div>
          <Logo />
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Header