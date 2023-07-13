import React from 'react'

const AlumniNavbar = () => {
  return (
    <div className='inline-flex flex-row items-start justify-between px-[100px] pt-3 pb-[80px] gap-10 w-[1440px] h-[80px] border-b'>
        <div className="w-[95px] h-[65px] bg-[url('/assets/moringa0.png')] flex-none order-none self-stretch grow-0 mt-5" />
        <div className='w-[200px] h-[80px] flex flex-row items-center justify-between'>
            <a className='text-2xl text-black/75'>Home</a>
            <a className='text-2xl font-medium text-black/75'>Jobs</a>
        </div>
        <div className='mt-5'>
            <button
                type="submit"
                className="flex items-start rounded-md bg-moringa_blue/80 px-3 py-1.5 text-md font-bold leading-6 text-white"
            >
                Profile
            </button>
        </div>
    </div>
  )
}

export default AlumniNavbar