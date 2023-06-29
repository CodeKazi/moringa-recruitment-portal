import React from 'react'

const AlumniEducationCard = ({
    organisation,
    fromto,
    duration,
    location
}) => {
  return (
    <div>
        <h2 className='text-xl font-semibold text-moringa_blue/80'>{organisation}</h2>
        <p className='text-base text-black/75'>{location}</p>
        <div className='flex flex-row justify-between w-auto'>
            <span className='text-base text-black/75'>{fromto}</span>
            <span className='text-base text-black/75'>{duration}</span>
        </div>
    </div>
  )
}

export default AlumniEducationCard