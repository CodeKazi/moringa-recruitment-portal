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
        <p className='lg:text-base text-sm text-black/75'>{organisation}</p>
        <div className='flex flex-row justify-start lg:w-[250px] w-[375px]'>
            <span className='lg:text-base text-sm text-black/75 lg:mr-4'>{fromto}</span>
            <BsDot className='invisible'/>
            <span className='lg:text-base text-sm text-black/75 lg:ml-4'>{duration}</span>
        </div>
        <p className='lg:text-base text-sm text-black/75'>{location}</p>
    </div>
    </>
  )
}

export default AlumniExperienceCard
