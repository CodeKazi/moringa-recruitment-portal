import React from 'react'
import {BsDot} from 'react-icons/bs'

const AlumniEducationCard = ({
    organisation,
    fromto,
    duration,
    location
}) => {
  return (
    <div className='my-10 mt-5'>
        <h2 className='lg:text-xl text-md text-md font-semibold text-moringa_blue/80 w-[370px]'>{organisation}</h2>
        <p className='lg:text-base text-sm text-black/75'>{location}</p>
        <div className='flex flex-row justify-start lg:w-[250px] w-[375px]'>
            <span className='lg:text-base text-xs text-black/75 lg:ml-4'>{fromto}</span>
            <BsDot className='invisible'/>
            <span className='lg:text-base text-xs text-black/75 lg:mr-4'>{duration}</span>
        </div>
    </div>
  )
}

export default AlumniEducationCard