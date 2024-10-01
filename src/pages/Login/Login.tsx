import { useDispatch } from "react-redux";
import { getPokemon } from "../../services/auth.service"
import { createUser } from "../../redux/state/user";

const Login = () => {
    const dispath=useDispatch();
    const login=async()=>{
        try{
        const result =await  getPokemon();
        console.log(result.results[0])
        dispath(createUser(result.results[0]))

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
