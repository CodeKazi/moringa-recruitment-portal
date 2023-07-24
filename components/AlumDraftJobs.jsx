import React from 'react'
import Image from 'next/image'
import closeBtn from '/public/assets/material-symbols_edit-square-outline.svg'

const AlumDraftJobs = ({
    title,
    image,
    location,
    isApplied
}) => {
  return (
    <div className='inline-flex flex-row items-start gap-7  mb-5 w-full lg:w-[750px] border-b-2 border-b-moringa_blue/25'>
        <div className='flex w-20 h-16 p-5 items-start px-5 mx-5'>
            <Image src={image} alt='logo' width={100} height={81}/>
        </div>
        <div className='flex h-16 flex-col justify-between items-start w-full lg:w-[350px] px-2.5 ml-10'>
            <h1 className='lg:text-xl text:lg not-italic font-medium text-moringa_blue/80'>
                {title}
            </h1>
            <p className='lg:text-base text-sm not-italic font-normal text-moringa_blue/75'>
                {location}
            </p>
            <p className='text-xs not-italic font-normal text-black/50'>
                {isApplied}
            </p>
        </div>
        <div className='flex items-end mb-5'>
            {closeBtn ? (
                <Image src={closeBtn} w={24} height={24} alt='logo' style={{color: 'navy'}}/>
            ) : (
                <></>
            )}
        </div>
    </div>
  )
}

export default AlumDraftJobs