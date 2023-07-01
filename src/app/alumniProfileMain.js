import React from 'react'
import AlumniNavbar from '../../components/AlumniNavbar'
import AlumProfileHeadline from '../../components/AlumProfileHeadline'
import AlumProfileBody from '../../components/AlumProfileBody'
import AlumniFooter from '../../components/AlumniFooter'
import { alumProfile } from '../../cardData/alumProfile'
import editIcon from 'public/assets/material-symbols_edit-square-outline.svg'

const AlumniProfileMain = () => {
  return (
    // container
    <div className='flex flex-col w-full lg:w-[1440px] h-full lg:h-[1727px] bg-white'>
        {/* nav (same as dashboard; will refactor later) */}
        <div className='flex basis-23/500'>
            <AlumniNavbar/>
        </div>
        {/* Pro pic headline section */}
        <div className='bg-moringa_blue/80 flex basis-81/500'>
            <AlumProfileHeadline
                name={alumProfile.headline.name}
                title={alumProfile.headline.title}
                location={alumProfile.headline.location}
                image={alumProfile.headline.imageSrc}
                editIcon={editIcon}
            />
        </div>
        {/* profile info and edit button*/}
        <div className='bg-[#585858] flex flex-row basis-4767/10000'>
            <div className='basis-2/7 ml-[165px]'>
                <ul className='flex flex-col justify-center text-2xl font-normal text-moringa_blue'>
                    <li><a>Profile</a></li>
                    <li><a>Experience</a></li>
                    <li><a>Job Interview Prep</a></li>
                </ul>
            </div>
            <div className='basis-5/7'>
                <AlumProfileBody/>
            </div>
        </div>
        {/* footer (same as dashboard; will refactor later) */}
        <div className='bg-[#585858] flex basis-787/2500'>
            <AlumniFooter/>
        </div>
    </div>
  )
}

export default AlumniProfileMain