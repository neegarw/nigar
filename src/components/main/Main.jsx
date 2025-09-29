import About from "../about/About"
import Contact from "../contact/Contact"
import Hero from "./Hero"
import Projects from "./Projects"

function Main() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            <Contact endpoint="https://nigar-backend.vercel.app/api/contact" />
         </>
    )
}

export default Main