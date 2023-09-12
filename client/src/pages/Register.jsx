import React, {useState, useEffect, useRef} from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result =>{console.log(result)
        navigate('/login')
    })
        .catch(err =>console.log(err))

    }
  return (
    <div className='register-section'>
        <div className="register">
            <form onSubmit={handleSubmit}>
            <h1 style={{color: '#000'}} >Register</h1><br/>
                <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input 
                 className='form-control'
                 onChange={(e) =>setName(e.target.value)}
                 placeholder='Enter Name'
                type="text" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input 
                    className='form-control'
                    onChange={(e) =>setEmail(e.target.value)}
                    placeholder='Enter Email Address'
                    type="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input 
                    className='form-control'
                    onChange={(e) =>setPassword(e.target.value)}
                    placeholder='Enter Password'
                    type="password" />
                </div>
                <button type='submit' className='btn btn-primary' style={{display: "block",
            margin: "0 auto", width: "300px"
            }} >Register</button>
                <p className='text-center'>Already have an Account</p>
                <button className='btn btn-success' style={{display: "block",
            margin: '0 auto',
            width: "300px"
            }} onClick={(e) =>navigate('/login')}>Login</button>
               
               
            </form>
        </div>
  
    </div>
  )
}

export default Register