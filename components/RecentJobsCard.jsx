import Image from 'next/image'
import React from 'react'

const RecentJobsCard = ({title, image, location, tags}) => {
  return (
    <div className='flex h-[138px] flex-col justify-between items-center px-2.5 py-5 rounded border border-moringa_blue/25 border-solid'>
        <div className='flex flex-row p-5 m-5 justify-between items-start w-[498px]'>
            <div className='flex basis-2/7 items-'>
                <Image src={image}
                    alt='logo'
                    width={81}
                    height={61}
                    className='flex justify-items-start '
                />
            </div>
            <div className='flex flex-col p-2.5 m-2.5 items-start justify-center shadow-lg' >
                <div className="flex flex-col px-10 py-4 m-8 w-full">
                    <p className=" mb-2 mt-5 text-xl font-medium text-moringa_blue">
                        {title}
                    </p>
                    <p className="flex flex-col flex-shrink-0 text-base text-black/75">
                        {location}
                    </p>
                </div>
                <div className=" flex flex-row px-6 pt-4 pb-2">
                    {tags.map((tag, i) => (
                        <span key={i}
                            className={`inline-block rounded-full px-3 py-1 text-sm font-normal text-moringa_blue/80 mr-2 mb-2 ${i%2 === 0 ? "bg-gray-500" : "bg-orange-400"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentJobsCard
