import React from 'react'
import "./applymodal.css"

const ApplyModal = () => {

  return (
    <div >
      {/* <button >Apply</button> */}

       {/* The Modal */}
      <div className="modal">

         {/* Modal content */}
        <div className="modal-content border-b-2">
        
          <div className='top flex justify-between'>
            <p className='apply mb-2 text-xl'>Apply to Little</p>
            <p className='close mr-6'>&times;</p>
          </div>

          <div className='contact-info'>
            <h4 className='text-lg font-medium mb-2'>Contact Information</h4>
            <img src='./assets/Ismaili.png' alt='User Profile' className='mb-3' />
            <p className='text-base font-medium mb-2'>Ismaili Sarr</p>
          </div>
          <div>
            <form className='flex flex-col'>
              <label>Email Address</label>
              <input type='email' placeholder='ismailisarr@gmail.com' className='w-1/2  md:w-5/6 lg:w-1/2 pl-2 rounded p-2 cursor-pointer'></input>
              <br />
              <label>Phone Number</label>
              <input type='text' placeholder='0723456789' className='w-1/2 md:w-5/6 lg:w-1/2 pl-2 rounded p-2 cursor-pointer'></input>
              <br />
              <div>
                <p className='text-sm mb-2'>CV/Resume</p>
                <button className='text-base border-2 rounded-3xl p-2 mb-6'>Upload Resume</button>
              </div>
              
              <div className='flex justify-end'>
                <button type='submit' className='submit text-base font-semibold rounded-3xl w-44 p-3 mr-16 mb-4'>Submit Application</button>
             </div>
              
            </form>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ApplyModal
