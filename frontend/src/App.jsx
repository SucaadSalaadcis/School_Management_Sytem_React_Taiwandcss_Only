import React from 'react'
import SideNav from './components/SideNav'
import {Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Students from "./pages/Students"
import Teachers from "./pages/Teachers"
import Documents from "./pages/Documents"

function App() {
  return (
      <SideNav>
    <Routes >

      <Route path='/' element={<Dashboard/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/teachers' element={<Teachers/>}/>
      <Route path='/documents' element={<Documents/>}/>
    </Routes>
      </SideNav>
  )
}

export default App