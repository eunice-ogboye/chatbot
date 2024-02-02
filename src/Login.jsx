import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation'; 
import axios from 'axios';

function Login() {
 const [values, setValues] = useState({
   email: '',
   password: ''
 })

 const navigate = useNavigate();
 const [errors, setErrors] = useState({})
 const handleInput = (e) => {
   setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
 }
 const handleSubmit = (e) => {
   e.preventDefault();
  setErrors(Validation(values));
  if(errors.email === "" && errors.password === ""){
    axios.post("http://localhost:8081/login", values)
    .then(res => {
      if(res.data === "success") {
        navigate("/home");
      } else {
        alert("No record existed  ")
      }
      
    }) 
    .catch(err => console.log(err));
 }
 }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className="bg-white p-3 rounded w-25">
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" onChange={handleInput} name="email" id="email" className='form-control rounded-0'/>
                  {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={handleInput} name="password" id="password" className='form-control rounded-0'/>
                  {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className="btn btn-success w-100">Login</button>
                <p>Don't have an account?</p>
                <Link to='/signup' className="btn btn-default border w-100 bg-light">Register</Link>
            </form>
        </div> 
    </div>
  )
}

export default Login;