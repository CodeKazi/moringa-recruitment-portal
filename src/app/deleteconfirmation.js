import React from 'react'

const DeleteConfirmation = ({isVisible, notVisible}) => {
    if(!isVisible) return null;

  return (
    <div>
      <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  z-10 origin-top w-full h-full '></div>
         <div className="bg-white  m-auto max-w-sm  max-h-48 border-2 rounded-md mt-3 absolute right-2/4  top-52 z-20 ">
                <div className="border-b-2">
                    <h1 className="text-xl font-semibold my-2 ml-4">Delete photo</h1>
                </div>
                <p className="text-base font-medium mx-14 my-5">Are you sure you want to delete your profile picture?</p>
                <div className="flex justify-end mr-10 mb-5">
                    <button className="text-base font-medium  mr-5" onClick={() => notVisible()}>Cancel</button>
                    <button className="text-base font-medium text-red-600" onClick={() => notVisible()}>Delete</button>
                </div>
            </div>
            
    </div>
  )
}

export default DeleteConfirmation
