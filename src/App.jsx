

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import AddTask from "./components/Pages/AddTask"
import ListOfTask from "./components/Pages/ListOfTask"
import EditTask from "./components/Pages/EditTask"
import DeleteTask from "./components/Pages/DeleteTask"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/list" element={<ListOfTask/>} />
          <Route path="/edit" element={<EditTask />} />
          <Route path="/delete" element={<DeleteTask />} />
          <Route path="*" element={<h1>Error 404 Page not Found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
