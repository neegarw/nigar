import { Route, Routes } from "react-router-dom"
import Landing from "./layout/Landing"
import CustomCursor from "./components/cursor/CustomCursor"
import { ThemeProvider } from "./context/ThemeContext"
import Hero from "./components/hero/Hero"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Routes>
        <Route path="/" element={
          <Landing>
            <Hero />
            <Projects />
            <About />
            <Contact endpoint="https://nigar-backend.vercel.app/api/contact" />
          </Landing>
        } />
      </Routes>
    </ThemeProvider>
  )
}

export default App
