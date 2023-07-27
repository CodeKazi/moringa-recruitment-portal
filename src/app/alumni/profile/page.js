import React from 'react'
import AlumniNavbar from '../../../../components/AlumniNavbar'
import AlumProfileHeadline from '../../../../components/AlumProfileHeadline'
import AlumProfileBody from '../../../../components/AlumProfileBody'
import AlumniFooter from '../../../../components/AlumniFooter'
import { alumProfile } from '../../../../cardData/alumProfile'
import editIcon from '/public/assets/material-symbols_edit-square-outline.svg'

const AlumniProfileMain = () => {
  return (
    // container
    <div className='flex flex-col w-[375px] lg:w-full h-full lg:h-[1727px] bg-white'>
        {/* nav (same as dashboard; will refactor later) */}
        <div className='flex basis-23/500 w-[375px] lg:w-full'>
            <AlumniNavbar/>
        </div>
        {/* Pro pic headline section */}
        <div className='bg-moringa_blue/80 flex basis-81/500 w-[375px] lg:w-full'>
            <AlumProfileHeadline
                name={alumProfile.headline.name}
                title={alumProfile.headline.title}
                location={alumProfile.headline.location}
                image={alumProfile.headline.imageSrc}
                editIcon={editIcon}
            />
        </div>
        {/* profile info and edit button*/}
        <div className=' flex flex-col lg:flex-row basis-4767/10000 w-[375px] lg:w-full'>
            <div className='basis-2/7 lg:ml-[165px] mt-10'>
                <ul className='flex flex-row lg:flex-col justify-center text-lg lg:text-2xl font-normal text-moringa_blue gap-5'>
                    <li><a className='text-semibold'>Profile</a></li>
                    <li><a className='text-normal'>Experience</a></li>
                    <li><a className='text-normal'>Job Interview Prep</a></li>
                </ul>
            </div>
            <div className='basis-5/7 m-10 mr-40'>
                <AlumProfileBody/>
            </div>
        </div>
        {/* footer (same as dashboard; will refactor later) */}
        <div className='bg-[#585858] flex basis-787/2500 w-[375px] lg:w-full'>
            <AlumniFooter/>
        </div>
    </div>
  )
}

export default AlumniProfileMain