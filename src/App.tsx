import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dasboard/Dashboard'
import Login from './pages/Login/Login'
import { PrivateRoute, PublicRoute } from './models'
import AuthGuard from './guards/auth.guard'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path={PublicRoute.LOGIN} element={<Login/>}></Route>
        {/* Utilizar Guard en React */}
        <Route element={<AuthGuard/>}>
        <Route path={PrivateRoute.DASHBOARD} element={<Dashboard/>}></Route>

        </Route>
        <Route path='*' element={<>NOT FOUND</>}></Route>
    </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
