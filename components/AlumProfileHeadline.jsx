import React from 'react'
import Image from 'next/image'

const AlumProfileHeadline = ({
    image,
    name,
    title,
    location,
    editIcon
}) => {
  return (
        <div className='flex flex-row items-center ml-[165px] gap-10'>
          <div className='flex basis-2/10 justify-center items-center w-3/12'>
            <Image height={150} width={150} alt='logo' src={image} className='flex-shrink-0 rounded-full'/>
          </div>
          <div className='flex flex-col basis-7/10 w-8/12'>
            <h1 className='text-3xl font-semibold text-white'>{name}</h1>
            <p className='text-xl font-medium text-white/90'>{title}</p>
            <p className='text-base font-medium text-white/80'>{location}</p>
          </div>
          <div className='flex basis-1/10 w-1/12 h-full mt-10 justify-end items-start'>
            { editIcon ? (
                <Image src={editIcon} width={24} height={24} alt='logo' className='flex-shrink-0'/>
            ) : (
              <></>
            )
              
              }
          </div>
        </div>
  )
}

export default AlumProfileHeadline