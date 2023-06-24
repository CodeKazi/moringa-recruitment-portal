import React from 'react'

const RecentJobsCard = ({title, image, location, tags}) => {
  return (
    <div className='flex h-[138px] flex-col justify-between items-center px-2.5 py-5 rounded border border-moringa_blue/25 border-solid'>
        <div className='flex justify-between items-start w-[498px]'>
            <div className='flex basis-2/5 justify-center items-start p-0 m-0'>
                <img src={image}
                    className='flex w-20 h-16 p-5 items-start flex-shrink-0 gap-2.5'
                />
            </div>
            <div className='flex basis-3/5 flex-col  justify-center ' >
                <div className="px-6 py-4 m-5">
                    <p className="mb-2 text-xl font-medium text-moringa_blue">
                        {title}
                    </p>
                    <p className="flex flex-col flex-shrink-0 w-[350px] text-base text-black/75">
                        {location}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags.map((tag, i) => (
                        <span key={i}
                            className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-moringa_blue/80 mr-2 mb-2 bg-black"
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