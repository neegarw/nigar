import { Route, Routes } from "react-router-dom"
import Landing from "./layout/Landing"
import Main from "./components/main/Main"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
    </>
  )
}

export default App