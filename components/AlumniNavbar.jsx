import React from 'react'

const AlumniNavbar = () => {
  return (
    <div className='inline-flex flex-row items-start justify-between lg:px-[100px] pt-3 pb-[80px] gap-10 lg:w-full w-[375px] h-[80px] border-b'>
        <div className="w-[95px] h-[65px] bg-[url('/assets/moringa0.png')] flex-none order-none self-stretch grow-0 mt-5" />
        <div className='w-[200px] h-[80px] flex flex-row items-center justify-between'>
            <a className='lg:text-2xl text-lg text-black/75'>Home</a>
            <a className='lg:text-2xl text-lg font-medium text-black/75'>Jobs</a>
        </div>
        <div className='mt-5 px-2'>
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