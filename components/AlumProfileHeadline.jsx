import React from 'react'
import Image from 'next/image'

const AlumProfileHeadline = ({
    image,
    name,
    title,
    location
}) => {
  return (
        <div className='flex flex-row items-center ml-[165px] gap-10'>
          <div className='flex basis-2/10 justify-center items-center'>
            <img src={image} className='flex-shrink-0 rounded-full'/>
          </div>
          <div className='flex flex-col basis-7/10 left-20'>
            <h1 className='text-3xl font-semibold text-white'>{name}</h1>
            <p className='text-xl font-medium text-white/90'>{title}</p>
            <p className='text-base font-medium text-white/80'>{location}</p>
          </div>
          <div className='flex basis-1/10'>
            <Image src={'assets/material-symbols_edit-square-outline.svg'} width={24} height={24} className='flex-shrink-0 mr-[165px] '/>
          </div>
        </div>
  )
}

export default AlumProfileHeadline