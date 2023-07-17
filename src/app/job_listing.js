import React from 'react'
import "./job_listing.css"
import Image from 'next/image'
import { recentJobs } from '../../cardData/recentjobs'

const JobListing = () => {
  return (
    <div>
      
      <nav>
        <div className='logo mt-1'>
          <Image src='/assets/moringa0.png' alt='Moringa School' width='100' height='100' />
        </div>

        <div className='home text-2xl font-normal'>
          <span className='mt-4'>Home</span>
          <span className='ml-10 mt-4'>Jobs</span>

        </div>

        <div className='profile-btn'>
          <button className='bg-moringa_blue text-xl font-bold py-3.5 px-7 mt-4 rounded-md text-white cursor-pointer'>Profile</button>
        </div>
      </nav>

      <section className='top-section p-16 bg-moringa_blue text-white'>
        <div className='find'>
          <p className='text-white text-4xl font-medium -mt-12 mb-4'>Find your job</p>
        </div>

        <div className='controls mt-8 text-xl font-medium'>
          <p className='job '>Job title or keyword <hr className='mt-2' /></p>
          <p className='location'>Location <hr className='mt-2' /></p>
          <button className='bg-moringa_orange mt-0 font-semibold text-lg py-2.5 px-10 rounded-md cursor-pointer'>Search</button>
        </div>

      </section>

      <section className='flex'>

      <section className='sidebar cursor-pointer flex flex-col ml-20'>
        <p className='categories text-xl font-medium mt-4'>Categories</p>

        <div className='text-lg font-medium mb-4 ml-4 mt-2'>

          <input type='radio'></input>
          <label className='ml-2 '>Frontend (150)</label>

        </div>

        <div className='specific text-lg font-normal ml-8'>

          <ul className='first'>
            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>React Js (39)</label></li>

            <li className='mb-2'> <input type='checkbox'></input>
              <label className='ml-3 '>Next Js (40)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>Svelte (20)</label></li>

            <li className='mb-2'> <input type='checkbox'></input>
              <label className='ml-3'>Angular (54)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>Swift (54)</label></li>

            <li className='mb-2'> <input type='checkbox'></input>
              <label className='ml-3'>JavaScript (105)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>TypeScript (5)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>Kotlin (3)</label></li>

            <li className='mb-2'> <input type='checkbox'></input>
              <label className='ml-3'>Java (8)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>Dart (3)</label></li>

            <li className='mb-2'><input type='checkbox'></input>
              <label className='ml-3'>React Native (19)</label></li>

            <li className='mb-2'> <input type='checkbox'></input>
              <label className='ml-3'>Flutter (7)</label></li>
          </ul>
        </div>
        <div className='types mt-4 text-lg font-medium'>
          <ul className='mb-3'>
            <li className='mb-2'><input type='radio'></input>
              <label className='ml-2 '>Backend (200)</label></li>
            <li className='mb-2'><input type='radio'></input>
              <label className='ml-2 '>Fullstack (80)</label></li>
            <li className='mb-2'><input type='radio'></input>
              <label className='ml-2'>UI/UX (33)</label></li>
            <li className='mb-2'><input type='radio'></input>
              <label className='ml-2'>Cloud (15)</label></li>
            <li className='mb-2'> <input type='radio'></input>
              <label className='ml-2'>Blockchain(17)</label></li>
            <li className='mb-2'><input type='radio'></input>
              <label className='ml-2'>Mobile (41)</label></li>
          </ul>

        </div>

        <div>
          <p className='text-xl font-medium mt-4'>Job Level</p>
          <ul>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2'>Entry Level</label></li>
            <li className='text-lg font-normal mb-2'> <input type='checkbox'></input>
              <label className='ml-2'>Mid Level</label></li>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2'>Senior Level</label></li>
          </ul>

        </div>

        <div>
          <p className='text-xl font-medium mt-3'>Job Type</p>
          <ul>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2'>Full-time</label></li>
            <li className='text-lg font-normal mb-2'> <input type='checkbox'></input>
              <label className='ml-2'>Contract</label></li>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2'>Internship</label></li>
          </ul>

        </div>

        <div>
          <p className=' text-xl font-medium mt-4'>On-Site/Remote</p>
          <ul>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2 '>Remote</label></li>
            <li className='text-lg font-normal mb-2'><input type='checkbox'></input>
              <label className='ml-2'>Hybrid</label></li>
            <li className='text-lg font-normal mb-2'> <input type='checkbox'></input>
              <label className='ml-2'>On-Site</label></li>
          </ul>

        </div>
      </section>

      <section className='center ml-8'>
        <div>
          <div className='center-titles flex justify-around mt-4'>
            <h5 className='text-2xl font-medium mr-20'>All Jobs</h5>
            <p className='flex text-lg font-medium ml-40'>Sort By  <span className='ml-1 mt-0.5'><Image height={15} width={15} src='./icons/majesticons_chevron-down-line.png' alt='logo' /></span></p>
          </div>

          <div className='grid-container p-3'>

            {recentJobs.map((card, i) => (
              <div key={i} className='grids flex border border-gray-400' >

                <div className='flex items-center'>
                  <Image src={card.image} alt='Logo' width='81' height='61'  className='ml-5 cursor-pointer'/>
                 
                </div>
                <div className='ml-10 mt-3'>
                  <p className='text-xl font-semibold mb-2'>{card.title}</p>
                  <p className='text-lg font-medium mb-3'>{card.location}</p>
                  
                   <div className='mb-3'>
                    {card.tags.map((tag, index) =>(
                      <span key={index} className={`text-lg font-normal cursor-pointer mr-3  py-1 px-2.5 rounded-3xl ${index % 2 === 0 ?  'bg-gray-500' : 'bg-orange-500' }`}>{tag}</span>

                    ))}
                   </div>
                    
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      </section>

      <div className='pagination my-3'>
        <a href='#' className='py-1.5 px-3'><Image alt='logo' src='./icons/gg_push-chevron-left.png ' width='24' height='24' /></a>
        <a href='#' className='py-1.5 px-3 ml-4'><Image alt='logo' src='./icons/gg_chevron-left.png' width='25' height='25' /></a>
        <a href='#' className='py-1 px-5 ml-4 text-xl font-medium'>1</a>
        <a href='#' className='py-1 px-5 ml-4 text-xl font-medium'>2</a>
        <a href='#' className='py-1 px-5 ml-4 text-xl font-medium'>3</a>
        <a href='#' className='py-1.5 px-3 ml-4'><Image alt='logo' src='./icons/gg_chevron-right.png' width='25' height='25'/></a>
        <a href='#' className='py-1.5 px-3 ml-4'><Image alt='logo' src='./icons/gg_push-chevron-right.png' width='24' height='24'/></a>
      </div>

      <section className='footer bg-moringa_blue text-white p-14'>
        <div className='footer-content -mt-12'>
          <p className='footer-title mb-1'>Moringa School</p>
          <p className='footer-location mb-1'>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</p>
          <div className='contact'>
            <p className='mb-1'>+254 712 293 878 (Admin/General Enquiries)</p>
            <p className='mb-1'>+254 741 493 5656 (Data Science)</p>
            <p className='mb-1'>+254 712 293 878 (Whatsapp)</p>
            <p className='mb-1'>contact@moringaschool.com</p>
            <p className='mb-1'>admissions@moringaschool.com</p>
            <p className='mb-1'> P.O Box 28860 - 00100, Nairobi </p>
          </div>
        </div>
      </section>

      <div className='last'>
        <p>2022 Moringa School, All Rights Reserved</p>
      </div>

    </div>

  )
}

export default JobListing