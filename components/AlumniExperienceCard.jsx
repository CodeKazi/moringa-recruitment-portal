import React from 'react'
import {BsDot} from 'react-icons/bs'

const AlumniExperienceCard = ({
    title,
    organisation,
    fromto,
    duration,
    location
}) => {
  return (
    <>
    <div className='my-5'>
        <h2 className='text-xl font-semibold text-moringa_blue/80'>{title}</h2>
        <p className='text-base text-black/75'>{organisation}</p>
        <div className='flex flex-row justify-start w-[250px]'>
            <span className='text-base text-black/75 mr-4'>{fromto}</span>
            <BsDot/>
            <span className='text-base text-black/75 ml-4'>{duration}</span>
        </div>
        <p className='text-base text-black/75'>{location}</p>
    </div>
    </>
  )
}

export default AlumniExperienceCard
