import React from 'react'
import Image from 'next/image'

const AlumniExperienceCard = ({
    title,
    organisation,
    fromto,
    duration,
    location
}) => {
  return (
    <>
    <div className='my-10'>
        <h2 className='text-xl font-semibold text-moringa_blue/80'>{title}</h2>
        <p className='text-base text-black/75'>{organisation}</p>
        <div className='flex flex-row justify-between w-auto'>
            <span className='text-base text-black/75'>{fromto}</span>
            <span className='text-base text-black/75'>{duration}</span>
        </div>
        <p className='text-base text-black/75'>{location}</p>
    </div>
    </>
  )
}

export default AlumniExperienceCard