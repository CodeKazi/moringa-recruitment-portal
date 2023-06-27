import React from 'react'
import Image from 'next/image'

const AlumProfileHeadline = ({
    image,
    name,
    headline,
    location
}) => {
  return (
        <div className='flex flex-row w-full h-full'>
          <Image src={image} width={160} height={160} className='flex-shrink-0 rounded-full'/>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold text-white'>{name}</h1>
            <p className='text-xl font-medium text-white/90'>{headline}</p>
            <p className='text-base font-medium text-white/80'>{location}</p>
          </div>
          <div>
            <Image src={'assets/material-symbols_edit-square-outline.svg'} width={24} height={24} className='flex-shrink-0'/>
          </div>
        </div>
  )
}

export default AlumProfileHeadline