import React from 'react'
import './appliedjobs.css'
import { Applied } from '../../cardData/applied'

const AppliedJobs = () => {
  return (
    <div>
      <section className='top-section bg-moringa_blue p-12'>
        <div className='text-white flex  ml-28'>
          <img src='./assets/Ismaili.png' alt='Ismaili' className='rounded-full' />

          <div className='ml-16'>
            <h3 className='text-2xl font-semibold'>Ismaili Sarr</h3>
            <p className='skills text-lg font-medium sm:break-words'>Front-end Software <br className='mobile-br hidden' /> Developer | React | <br className='mobile-br hidden' /> JavaScript | </p>
            <p className='text-base font-medium'>Nairobi</p>
          </div>
        </div>

      </section>

      <section className='container flex ml-20'>
        <div className='side-section mt-6 ml-20'>
          <h4 className='text-2xl font-semibold text-gray-500 mb-2'>Profile</h4>
          <h1 className='text-2xl font-semibold mb-2'>My Jobs</h1>
          <h2 className='text-2xl font-semibold mb-2 text-gray-500'>Job Interview Prep</h2>
        </div>

        <div className='mt-6 ml-16'>
          <span className='text-2xl font-semibold mb-2'>Applied</span>
          <span className='text-2xl font-semibold text-gray-500 mb-2 ml-10'>Drafts</span>

          {Applied.map((card, i) => (
            <div key={i} className='cards flex '>
              <div className='flex items-start border-b-2 mt-4 w-full'>
                <img src={card.image} alt='logo' className='border border-gray-300' />

                <div className='ml-10'>
                  <h3 className='flex text-xl font-medium mb-2'>{card.title}</h3>
                  <p className='text-lg font-normal mb-2'>{card.location}</p>
                  <p className='text-sm text-gray-500 font-normal mb-4'>{card.time}</p>

                </div>

                <div className='ml-auto'>
                  <img src='./icons/x.svg' alt='close' className='cursor-pointer' />
                </div>

              </div>
            </div>
          ))}

          <div className='pagination flex justify-center items-center my-6'>
            <a href='#' className='border border-black w-11 h-9 py-2 px-3'><img src='./icons/gg_push-chevron-left.png' /></a>
            <a href='#' className='border border-black ml-3 w-11 h-9 py-2 px-3'><img src='./icons/gg_chevron-left.png' /></a>
            <a href='#' className='pl-4 font-normal border border-black ml-3 w-11 h-9 py-1.5 px-3'>1</a>
            <a href='#' className='pl-4 font-normal border border-black ml-3 w-11 h-9 py-1.5 px-3'>2</a>
            <a href='#' className='pl-4 font-normal border border-black ml-3 w-11 h-9 py-1.5 px-3'>3</a>
            <a href='#' className='border border-black ml-3 w-11 h-9 py-2 px-3'><img src='./icons/gg_chevron-right.png' /></a>
            <a href='#' className='border border-black font-medium ml-3 w-11 h-9 py-2 px-3'><img src='./icons/gg_push-chevron-right.png' /></a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default AppliedJobs
