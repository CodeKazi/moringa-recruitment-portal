import React from 'react'
import AlumniNavbar from '../../components/AlumniNavbar'
import AlumProfileHeadline from '../../components/AlumProfileHeadline'
import AlumProfileBody from '../../components/AlumProfileBody'
import AlumniFooter from '../../components/AlumniFooter'

const AlumniProfileMain = () => {
  return (
    // container
    <div className='flex flex-col w-full lg:w-[1440px] h-full lg:h-[1727px] bg-white'>
        {/* nav (same as dashboard; will refactor later) */}
        <div className='flex basis-23/500'>
            <AlumniNavbar/>
        </div>
        {/* Pro pic headline section */}
        <div className='bg-[#585858] flex basis-81/500'>
            <AlumProfileHeadline/>
        </div>
        {/* profile info and edit button*/}
        <div className='bg-[#484848] flex flex-row basis-4767/10000'>
            <div>
                <ul>
                    <li><a></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
            </div>
            <div>
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