import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

function Landing() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Landing