import { useDispatch } from "react-redux";
import { getMorty } from "../../services/auth.service"
import { createUser } from "../../redux/state/user";

const Login = () => {
    const dispath=useDispatch();
    const login=async()=>{
        try{
        const result =await  getMorty();
        dispath(createUser(result))

        }catch(error){
            console.log("Error",error)
        }
    }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
