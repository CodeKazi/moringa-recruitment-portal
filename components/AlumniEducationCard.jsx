import React from 'react'

const AlumniEducationCard = ({
    organisation,
    fromto,
    duration,
    location
}) => {
  return (
    <div className='my-10'>
        <h2 className='text-xl font-semibold text-moringa_blue/80'>{organisation}</h2>
        <p className='text-base text-black/75'>{location}</p>
        <div className='flex flex-row justify-start w-[250px]'>
            <span className='text-base text-black/75 ml-4'>{fromto}</span>
            <span className='text-base text-black/75 mr-4'>{duration}</span>
        </div>
    </div>
  )
}

export default AlumniEducationCard