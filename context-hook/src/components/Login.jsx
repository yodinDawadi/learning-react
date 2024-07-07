import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {setUser} = useContext(UserContext)
  return (
    <>  
    <h2>Login</h2>
    <input type="text"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    placeholder='enter your username'/><br />
    <input type="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
     placeholder='enter your password'/><br />
    <button onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login
