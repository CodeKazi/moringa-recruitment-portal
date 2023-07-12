import React from 'react'
import Image from 'next/image'
import "./register.css"

const Register = () => {
  return (
    <div>

      <div className='border-b-4 pl-20' mt-3 >
        <Image src='/assets/moringa0.png' alt='logo'  width='100' height='100' / >
      </div>

      <div className='container w-2/5 border-2 rounded-md  m-auto mt-16'>

        <div className='flex justify-center items-center'>
          <Image src='/assets/moringa1.png' alt='moringa logo' width='333' height='133' />
        </div>


        <div className='my-2 '>
          <h2 className='text-4xl font-semibold text-gray-600 mb-3 ml-36'>Sign Up</h2>
        </div>

        <div className='flex justify-center items-center mr-12'>

          <form className='flex flex-col'>

            <label className='text-xl font-normal'>First Name</label>
            <input type='text' className='border border-gray-400 rounded-md py-2 px-16 cursor-pointer'></input>
            <p className='text-sm font-normal text-red-600 mb-5'>Please enter a minimum of 3 characters</p>

            <label className='text-xl font-normal'>Last Name</label>
            <input type='text' className='border border-gray-400 rounded-md p-2.5 cursor-pointer'></input>
            <p className='text-sm font-normal text-red-600 mb-5'>Please enter a minimum of 3 characters</p>

            <label className='text-xl font-normal'>Email</label>
            <input type='email' className='border border-gray-400 rounded-md p-2.5 cursor-pointer'></input>
            <p className='text-sm font-normal text-red-600 mb-5'>Please enter a valid email</p>

            <label className='text-xl font-normal'>Password</label>
            <input type='password' className='border border-gray-400 rounded-md p-2.5 mb-5 cursor-pointer'></input>

            <label className='text-xl font-normal'>Confirm Password</label>
            <input type='password' className='border border-gray-400 rounded-md p-2.5 cursor-pointer'></input>
            <p className='text-sm font-normal text-red-600 mb-5'>Passwords do not match</p>

            <div>
              <button className='register-btn text-white rounded-md py-2.5 px-14 text-xl font-medium mb-12'>Register</button>

            </div>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Register
