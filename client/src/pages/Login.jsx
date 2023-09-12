import React, {useState, useEffect, useRef} from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result =>{console.log(result)
            if(result.data === "Success"){
                navigate('/')
            }
           
        })

    }
  return (
    <div className='login-section'>
        <div className="login">
 <form onSubmit={handleSubmit}>
<h1 style={{color: "#000"}}>Login</h1>
<div className="mb-3">
    <label htmlFor="email">Email</label>
    <input 
    className='form-control'
    placeholder='Enter Email'
    onChange={(e) =>setEmail(e.target.value)}
    type="email" />
</div>
<div className="mb-3">
    <label htmlFor="password">Password</label>
    <input 
    className='form-control'
    onChange={(e) =>setPassword(e.target.value)}
    type="password" />
</div>
<button className='btn btn-primary' style={{display: "block", margin: "0 auto",
width: "300px"
}}>Login</button>
 </form>
        </div>

    </div>
  )
}

export default Login