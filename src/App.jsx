import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Edit from "./pages/Edit"
import Create from "./pages/Create"

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>


      </Routes>
    </div>
    </>
  )
}

export default App