import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='container'>

      <h2>Sign Up</h2>
      <form>
        <div className='inputs'>
          <label>First Name</label>
          <input type='text'></input>
          <p>Please enter a minimum of 3 characters</p>
        </div>

        <div className='inputs'>
          <label>Last Name</label>
          <input type='text'></input>
          <p>Please enter a minimum of 3 characters</p>
        </div>

        <div className='inputs'>
          <label>Email</label>
          <input type='email'></input>
          <p>Please enter a valid email</p>
        </div>

        <div className='inputs'>
          <label>Password</label>
          <input type='password'></input>
        </div>

        <div className='inputs'>
          <label>Confirm Password</label>
          <input type='password'></input>
          <p>Passwords do not match</p>
        </div>

        <button type='submit' className='button'>Register</button>

      </form>
    </div>
  )
}

export default Register
