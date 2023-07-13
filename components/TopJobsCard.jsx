import React from 'react'

const TopJobsCard = ({title, description, tags}) => {
  return (
    <div className='flex h-52 p-20 m-15 justify-between items-center rounded border border-moringa_blue/25 border-solid'>
        <div className='flex  w-[498px] p-2.5 m-2.5'>
            <div className="flex flex-col p-2.5 m-2.5 items-start justify-center shadow-lg">
                <div className="flex flex-col px-10 py-4 m-8">
                    <p className="mb-2 mt-5 text-xl font-medium text-moringa_blue">
                        {title}
                    </p>
                    <p className="flex flex-col flex-shrink-0 w-[350px] text-base text-black/75">
                        {description}
                    </p>
                </div>
                <div className="pt-4 pb-2 px-10 mt-8 flex flex-row bg-gray-300">
                    {tags.map((tag, i) => (
                        <span key={i}
                        className={`inline-block rounded-full px-3 py-1 text-sm font-normal text-moringa_blue/80 mr-2 mb-2 ${i%2 === 0 ? "bg-gray-500" : "bg-orange-500}"}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex basis-2/5 justify-center items-center '>
                <button type="submit"
                    name=""
                    id=""
                    className='flex  h-10 items-center rounded-lg  px-10 py-40 gap-3 bg-[#FA510F]  border-[#FA510F] text-base font-medium text-white'
                >
                    Apply
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopJobsCard