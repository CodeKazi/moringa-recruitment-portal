import React from 'react'

const AppliedJobsCard = ({
    image,
    title,
    location,
    applied,
    closeBtn
}) => {
  return (
    <div className='inline-flex flex-row'>
        <div className='basis-2/12'>
            <img src={image}/>
        </div>
        <div className='basis-9/12 flex-col'>
            <h1>{title}</h1>
            <p>{location}</p>
            <p>{applied}</p>
        </div>
        <div className='basis-1/12'>
            {closeBtn ? (
                <img src={closeBtn}/>
            ) : (
                <></>
            )}
        </div>
    </div>
  )
}

export default AppliedJobsCard