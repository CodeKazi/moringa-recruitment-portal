import React from 'react'
import AlumniNavbar from '../../components/AlumniNavbar'
import AlumniFooter from '../../components/AlumniFooter'
import AlumProfileHeadline from '../../components/AlumProfileHeadline'
import { alumProfile } from '../../cardData/alumProfile'

const AlumniJobInterviewPrep = () => {
  return (
    //container
    <div className='flex flex-col w-full lg:w-[1440px] h-full lg:h-[1727px] bg-white'>
        {/* nav */}
        <div className='flex basis-23/500'>
            <AlumniNavbar/>
        </div>
        {/* headline */}
        <div className='bg-moringa_blue/80 flex basis-81/500'>
            <AlumProfileHeadline
                name={alumProfile.headline.name}
                title={alumProfile.headline.title}
                location={alumProfile.headline.location}
                image={alumProfile.headline.imageSrc}
            />
        </div >
        {/* body */}
        <div className='bg-[#585858] flex flex-row basis-4767/10000'>
            {/* add body here */}
        </div>
        {/* footer */}
        <div className='bg-[#585858] flex basis-787/2500'>
            <AlumniFooter/>
        </div>
    </div>
  )
}

export default AlumniJobInterviewPrep