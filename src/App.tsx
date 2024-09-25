import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dasboard/Dashboard'
import Login from './pages/Login/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path='*' element={<>NOT FOUND</>}></Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
