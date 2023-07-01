import Image from 'next/image'
import React from 'react'

const AppliedJobsCard = ({
    image,
    title,
    location,
    applied,
    closeBtn
}) => {
  return (
    <div className='inline-flex flex-row items-start gap-7  mb-5 w-full lg:w-[515px] border-b-2 border-b-moringa_blue/25'>
        <div className='flex w-20 h-16 p-5 items-start px-2.5'>
            <Image src={image} width={81} height={61}/>
        </div>
        <div className='flex h-16 flex-col justify-between items-start w-full lg:w-[350px] px-2.5'>
            <h1 className='text-xl not-italic font-medium text-moringa_blue/80'>
                {title}
            </h1>
            <p className='text-base not-italic font-normal text-moringa_blue/75'>
                {location}
            </p>
            <p className='text-xs not-italic font-normal text-black/50'>
                {applied}
            </p>
        </div>
        <div className='flex items-end mb-5'>
            {closeBtn ? (
                <Image src={closeBtn} w={24} height={24} className='text-moringa_blue/80'/>
            ) : (
                <></>
            )}
        </div>
    </div>
  )
}

export default AppliedJobsCard