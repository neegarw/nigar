import { Route, Routes } from "react-router-dom"
import Landing from "./layout/Landing"
import Main from "./components/main/Main"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import CustomCursor from "./components/cursor/CustomCursor"

function App() {
  
  return (
    <>
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
    </>
  )
}

export default App