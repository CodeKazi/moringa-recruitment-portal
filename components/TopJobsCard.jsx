import React from 'react'

const TopJobsCard = ({title, description, tags}) => {
  return (
    <div className='flex h-48 p-5 flex-row justify-between items-center border border-moringa_blue/25 border-solid'>
        <div className="max-w-sm rounded overflow-hidden bg-gray-200 shadow-lg">
            <div className="px-6 py-4">
                <p className="mb-2 text-xl font-medium text-moringa_blue">
                    {title}
                </p>
                <p className="flex flex-col flex-shrink-0 w-[350px] text-base text-black/75">
                    {description}
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
        <div className='flex basis-2/5 justify-center'>
            <button type="submit"
                name=""
                id=""
                className='flex items-start px-10 py-40 gap-3 bg-moringa_orange/80 text-base font-medium text-moringa_blue'
            >
                Apply
            </button>
        </div>
    </div>
  )
}

export default TopJobsCard