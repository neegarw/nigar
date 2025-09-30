import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Landing({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Landing
