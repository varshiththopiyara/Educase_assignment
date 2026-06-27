import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home'
import Register from './Components/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Toaster position="top-center" />
    <Routes>
      <Route path="/"element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  
    </>
  )
}

export default App
