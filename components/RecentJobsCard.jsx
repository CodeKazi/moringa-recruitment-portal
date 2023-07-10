import React from 'react'
import Image from 'next/image'

const RecentJobsCard = ({title, image, location, tags}) => {
  return (
    <div className='flex h-[138px] w-[498px] flex-col justify-between items-center py-5 rounded border border-moringa_blue/25 border-solid'>
        <div className='flex flex-row items-start gap-3'>
            <div className='flex basis-2/7 justify-start items-start'>
                <Image src={image}
                    width={81}
                    height={61}
                    alt='logo'
                />
            </div>
            <div className='flex basis-5/7 flex-col' >
                <div className="flex flex-col px-1 py-1 m-1">
                    <p className=" mb-2 text-xl font-medium text-moringa_blue">
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