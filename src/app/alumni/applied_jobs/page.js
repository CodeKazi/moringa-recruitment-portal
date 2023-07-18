import React from 'react'
import Image from 'next/image'
import './appliedjobs.css'
import { Applied } from '../../../../cardData/applied'

const AppliedJobs = () => {
  return (
    <div>
      <section className='top-section bg-moringa_blue h-56 pt-12'>
        <div className='top text-white flex  ml-48'>
          <Image src='/assets/Ismaili.png' alt='Ismaili' width='140' height='140' className='rounded-full profile' />

          <div className='ml-12 pt-3'>
            <h3 className='text-3xl font-semibold mb-2'>Ismaili Sarr</h3>
            <p className='skills text-xl font-medium sm:break-words mb-2'>Front-end Software <br className='mobile-br hidden' /> Developer | React | <br className='mobile-br hidden' /> JavaScript | </p>
            <p className='text-base font-medium'>Nairobi</p>
          </div>
        </div>

      </section>

      <section className='container flex ml-28'>
        <div className='side-section mt-6 ml-40'>
          <h4 className='text-2xl font-semibold text-gray-500 mb-2'>Profile</h4>
          <h1 className='text-2xl font-semibold mb-2'>My Jobs</h1>
          <h2 className='text-2xl font-semibold mb-2 text-gray-500'>Job Interview Prep</h2>
        </div>

        <div className='center mt-6 ml-28'>
          <span className='text-2xl font-semibold mb-2'>Applied</span>
          <span className='text-2xl font-semibold text-gray-500 mb-2 ml-36'>Drafts</span>

          {Applied.map((card, i) => (
            <div key={i} className='flex  my-7'>
              <div className='cards  flex items-start   border-b-2 mt-2 '>   
              
                <Image src={card.image} alt='company-logo' width='81' height='61' className='border border-gray-300' />

                <div className='title ml-36'>
                  <h3 className='flex text-xl font-medium mb-1'>{card.title}</h3>
                  <p className='text-lg font-normal mb-1'>{card.location}</p>
                  <p className='text-sm text-gray-500 font-normal mb-1'>{card.time}</p>

                </div>

                <div className='ml-auto'>
                  <Image src='/icons/x.svg' alt='close' width='24' height='24' className='cursor-pointer' />
                </div>

              </div>
            </div>
          ))}

          <div className='pagination flex justify-center items-center my-6 mr-32'>
            <a href='#' className='border border-black w-11 h-9 py-2 px-3'><Image src='/icons/gg_push-chevron-left.png' alt='back-btn' width='24' height='24' /></a>
            <a href='#' className='border border-black ml-4 w-11 h-9 py-2 px-3'><Image src='/icons/gg_chevron-left.png' alt='back-btn' width='24' height='24' /></a>
            <a href='#' className='pl-4 font-normal border border-black ml-4 w-11 h-9 py-1.5 px-3'>1</a>
            <a href='#' className='pl-4 font-normal border border-black ml-4 w-11 h-9 py-1.5 px-3'>2</a>
            <a href='#' className='pl-4 font-normal border border-black ml-4 w-11 h-9 py-1.5 px-3'>3</a>
            <a href='#' className='border border-black ml-4 w-11 h-9 py-2 px-3'><Image src='/icons/gg_chevron-right.png' alt='next-page-btn'  width='24' height='24'/></a>
            <a href='#' className='border border-black font-medium ml-3 w-11 h-9 py-2 px-3'><Image src='/icons/gg_push-chevron-right.png' alt='next-page-btn' width='24' height='24' /></a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default AppliedJobs
