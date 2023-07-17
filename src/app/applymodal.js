import React from 'react'
import Image from 'next/image'
import "./applymodal.css"

const ApplyModal = () => {

  return (
    <div >
    
      <div className="modal">
        
        <div className="modal-content flex flex-col ">
        
          <div className=' top flex justify-between border-b-2 pl-24'>
            <p className='apply mb-2 text-2xl font-medium text-gray-700'>Apply to Little</p>
            <p className='text-4xl font-medium mr-6'>&times;</p>
          </div>

          <div className='contact-info pl-24'>
            <h4 className='text-lg font-medium my-2'>Contact Information</h4>
            <Image src='/assets/Ismaili.png' alt='User Profile' width='74' height='74' className='mb-3' />
            <p className='text-lg font-medium mb-2'>Ismaili Sarr</p>
          </div>

          <div className='form pl-24'>
            <form className='flex flex-col'>
              <label className='text-base font-normal'>Email Address</label>
              <input type='email' placeholder='ismailisarr@gmail.com' className='w-1/2  md:w-5/6 lg:w-1/2  min-w-fit pl-2 rounded p-2.5 cursor-pointer'></input>
              <br />

              <label className='text-base font-normal'>Phone Number</label>
              <input type='text' placeholder='0723456789' className='w-1/2 md:w-5/6 lg:w-1/2 min-w-fit pl-2 rounded p-2.5 cursor-pointer'></input>
              <br />

              <div>
                <p className='text-base font-normal mb-2'>CV/Resume</p>
                <button className='text-base  font-normal text-moringa_blue border-2 rounded-full p-3 mb-6'>Upload Resume</button>
              </div>
              
              <div className='flex justify-end'>
                <button type='submit' className='bg-moringa_orange text-base font-semibold rounded-full  p-4 mr-16 mb-6'>Submit Application</button>
             </div>
              
            </form>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ApplyModal
