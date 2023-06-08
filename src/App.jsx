import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import { Home } from "./screens/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
