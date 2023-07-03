import React from 'react'
import { alumProfile } from '../cardData/alumProfile'
import AlumniEducationCard from './AlumniEducationCard'
import AlumniExperienceCard from './AlumniExperienceCard'
import Image from 'next/image'

const AlumProfileBody = () => {
  // const a = alumProfile.experience
  // console.log('object a', a[0], "type: ", typeof(a[0]))
  // a.forEach(i => console.log(i.title))

  return (
    <div className='flex flex-col w-[350px]'>
        <div className='flex flex-col'>
          <div className='flex flex-row h-full justify-between items-start'>
            <h1 className='text-2xl font-semibold text-moringa_blue mb-3'>
              About
            </h1>
            <div className='flex flex-row basis-1/4 w-1/12 h-full justify-between items-start'>
              <Image src={'assets/material-symbols_edit-square-outline.svg'} alt='logo' width={24} height={24} className='flex-shrink-0 mx-4'/>
              <Image src={'assets/material-symbols_add.svg'} alt='logo' width={24} height={24} className='flex-shrink-0 mx-4'/>
          </div>
          </div>
          <div>
            <p className='flex flex-col flex-shrink-0 w-[635px] mb-4'>
            {alumProfile.about.about}
            </p>
          </div>
        </div>
        <div className='flex flex-col mt-5'>
            <h1 className='text-2xl font-semibold text-moringa_blue mb-3'>
              Experience
            </h1>
            <div className='flex flex-col my-3'>
              {alumProfile.experience.map((obj, i) => (
              <div >
              <AlumniExperienceCard
                key={i}
                title={obj.title}
                organisation={obj.organisation}
                fromto={obj.fromto}
                duration={obj.duration}
                location={obj.location}
              />
              </div>
              ))}
            </div>
            
        </div>
        <div className='flex flex-col mt-5'>
            <h1 className='text-2xl font-semibold text-moringa_blue mb-3'>
              Education
            </h1>
            {alumProfile.education.map((obj, i) => (
              <div className='my-3'>
              <AlumniEducationCard
                key={i}
                organisation={obj.organisation}
                fromto={obj.fromto}
                duration={obj.duration}
                location={obj.location}
              />
              </div>
            ))}
        </div>
    </div>
  )
}

export default AlumProfileBody