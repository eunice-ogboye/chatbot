import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function SignUp() {
    const [values, setValues] = useState({
        name: '',
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
       if(errors.name === "" && errors.email === "" && errors.password === ""){
          axios.post("http://localhost:8081/signup", values)
          .then(res => {
            navigate("/");
          }) 
          .catch(err => console.log(err));
       }
      }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className="bg-white p-3 rounded w-25 md:w-50">
            <h1>Register</h1>
            <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" 
                  onChange={handleInput} className='form-control rounded-0'/>
                  {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" 
                  onChange={handleInput} className='form-control rounded-0'/>
                  {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" 
                  onChange={handleInput} className='form-control rounded-0'/>
                  {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className="btn btn-success w-100">Register</button>
                <p>Do you have an account?</p>
                <Link to='/' className="btn btn-default border w-100 bg-light">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default SignUp;