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
    <div className='flex flex-col w-full lg:w-[1440px] h-full lg:h-[1727px] bg-white'>
        {/* nav */}
        <div className='flex basis-23/500'>
            <AlumniNavbar/>
        </div>
        {/* headline */}
        <div className='bg-moringa_blue/80 flex basis-81/500'>
            <AlumProfileHeadline
                name={alumProfile.headline.name}
                title={alumProfile.headline.title}
                location={alumProfile.headline.location}
                image={alumProfile.headline.imageSrc}
                editIcon={''}
            />
        </div >
        {/* body */}
        <div className='bg-[#585858] flex flex-row basis-4767/10000'>
        <div className='basis-2/7 ml-[165px]'>
                <ul className='flex flex-col justify-center text-2xl font-normal text-moringa_blue'>
                    <li><a>Profile</a></li>
                    <li><a>My Jobs</a></li>
                    <li><a>Job Interview Prep</a></li>
                </ul>
            </div>
            <div className='basis-5/7 flex-col'>
                <div>
                    <span>Applied</span>
                    <span>Drafts</span>
                </div>
                <div>
                    {appliedJobs.map((job, i) => (
                        <AppliedJobsCard
                            key={i}
                            image={job.image}
                            title={job.title}
                            location={job.location}
                            applied={job.applied}
                            closeBtn={closeBtn}
                        />
                    ))}
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