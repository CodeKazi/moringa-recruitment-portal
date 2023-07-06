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
            <div className='flex basis-5/7 flex-col' >
                <div className="w-full px-6 py-4 m-5">
                    <p className="w-full mb-2 text-xl font-medium text-moringa_blue">
                        {title}
                    </p>
                    <p className="flex flex-col flex-shrink-0 w-[350px] text-base text-black/75">
                        {location}
                    </p>
                </div>
                <div className=" flex flex-row px-6 pt-4 pb-2">
                    {tags.map((tag, i) => (
                        <p key={i}
                            className={`inline-block rounded-full px-3 py-1 text-sm font-normal text-moringa_blue/80 mr-2 mb-2 ${i%2 === 0 ? "bg-gray-500" : "bg-orange-500}"}`}
                        >
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentJobsCard