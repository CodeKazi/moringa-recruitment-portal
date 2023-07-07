import React from 'react'
import AlumniNavbar from '../../components/AlumniNavbar'
import AlumniFooter from '../../components/AlumniFooter'
import AlumProfileHeadline from '../../components/AlumProfileHeadline'
import AppliedJobsCard from '../../components/AppliedJobsCard'
import { alumProfile } from '../../cardData/alumProfile'
import closeBtn from 'public/assets/iconoir_cancel.svg'
import { appliedJobs } from '../../cardData/appliedJobs'

const AlumniJobInterviewPrep = () => {
  return (
    //container
    <div className='flex flex-col w-full h-full lg:h-[2221px] bg-white'>
        {/* nav */}
        <div className='flex basis-23/500'>
            <AlumniNavbar/>
        </div>
        {/* headline */}
        <div className='bg-moringa_blue/80 flex basis-81/500 '>
            <AlumProfileHeadline
                name={alumProfile.headline.name}
                title={alumProfile.headline.title}
                location={alumProfile.headline.location}
                image={alumProfile.headline.imageSrc}
                editIcon={''}
            />
        </div >
        {/* body */}
        <div className=' flex flex-row basis-4767/10000'>
        <div className='basis-2/7 ml-[165px] mt-10'>
                <ul className='flex flex-col justify-center text-2xl font-normal text-moringa_blue'>
                    <li className='m-2'>
                        <a>Profile</a>
                    </li>
                    <li className='m-2 font-bold'>
                        <a>My Jobs</a>
                    </li>
                    <li className='m-2'>
                        <a>Job Interview Prep</a>
                    </li>
                </ul>
            </div>
            <div className='basis-5/7 flex-col mt-10'>
                <div className='flex flex-row basis-2 text-2xl not-italic  text-moringa_blue'>
                    <span className='mx-2.5 font-semibold'>Applied</span>
                    <span className='mx-2.5'>Drafts</span>
                </div>
                <div className='mt-4 flex flex-col w-full lg:w-[515px] '>
                    {appliedJobs.map((job, i) => (
                        <div key={i}>
                        <AppliedJobsCard
                            image={job.image}
                            title={job.title}
                            location={job.location}
                            applied={job.applied}
                            closeBtn={closeBtn}
                            className='mb-20 text-moringa_blue'
                        />
                        </div>
                    ))}
                </div>
                <div>
                    <h1>pagination section</h1>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className='bg-[#585858] flex basis-787/2500'>
            <AlumniFooter/>
        </div>
    </div>
  )
}

export default AlumniJobInterviewPrep