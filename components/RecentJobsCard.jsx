import React from 'react'
import Image from 'next/image'

const RecentJobsCard = ({title, image, location, tags}) => {
  return (
    <div className='flex h-52 p-20 m-15 justify-between items-center rounded border border-moringa_blue/25 border-solid'>
        <div className='flex  w-[498px] p-2.5 m-2.5'>
            <div className='flex basis-2/5 justify-center items-start m-2.5'>
                <Image src={image}
                    width={100}
                    height={81}
                    alt='logo'
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