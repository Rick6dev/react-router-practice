import { useSelector } from "react-redux"
import { AppStore } from "../redux/store/store"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoute } from "../models"

export const  AuthGuard=()=>{
    const userState=useSelector((store:AppStore)=>store.user);
    console.log(userState)
    return userState.name?<Outlet/>:<Navigate replace to={PublicRoute.LOGIN}/>; 
}

export default AuthGuard;