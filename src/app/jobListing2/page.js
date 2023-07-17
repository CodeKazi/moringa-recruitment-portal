import React from 'react'
import "./job_listing2.css"
import Image from 'next/image'
import { moreJobs } from '../../../cardData/morejobs'

const JobInfo = () => {
    return (
        <div>

            <nav className='flex justify-around'>
                <div className='logo mt-1'>
                    <Image src='/assets/moringa0.png' alt='Moringa School' width='100' height='100' />
                </div>

                <div className='home flex  justify-evenly text-2xl font-normal'>
                    <span className='mt-8'>Home</span>
                    <span className='ml-10 mt-8'>Jobs</span>

                </div>

                <div className='profile-btn'>
                    <button className='btn text-xl bg-moringa_blue py-3.5 px-7 rounded-lg mt-4 cursor-pointer text-white'>Profile</button>
                </div>
            </nav>


            <section className='bg-moringa_blue text-white flex justify-around p-14'>
                <div className='apply'>

                    <h3 className='text-white text-3xl font-bold mb-3'>Front-end Developer</h3>
                    <p className='text-lg font-semibold mb-3'> Full-time<span className='ml-4'>Kisumu, Kenya</span></p>
                    <button className='bg-moringa_orange text-lg font-semibold flex py-3 px-10 rounded-lg mb-3'>Apply</button>

                </div>

                <div className=' border-l text-lg font-semibold '>

                    <p className='flex comapny ml-3 mb-3 mt-2'>
                        <span className='mr-3 ml-1'><Image src='./icons/mdi_company.png' alt='logo' width='20' height='20' /></span>
                        Little</p>
                    <p className='flex ml-3 mb-3'>
                        <span className='mr-3 ml-1 '><Image src='./icons/bi_people.png' alt='logo' width='20' height='20' /></span>
                        13 applicants</p>
                    <button className='flex ml-3 mb-3'>
                        <span className='mr-3 ml-1'><Image src='./icons/Vector.png' alt='logo' width='20' height='20' /></span>
                        Download PDF</button>

                </div>
            </section>

            <section className='grid-one'>

                <div>
                    <h2 className='text-3xl font-semibold my-3 mx-2'>Job Description</h2>
                    <p className=' shrink-0 text-lg font-normal ml-5'>Lorem ipsum dolor sit amet consectetur. Ut nulla viverra dignissim sed id platea. Eu aliquam euismod nunc nam rutrum enim pulvinar facilisi. Sagittis dictum ut arcu cras orci auctor tincidunt. Adipiscing ultrices quam est convallis mauris. Enim tellus sagittis amet rhoncus nec ornare nec. Justo semper tellus eu quam morbi sem. Nulla lorem netus imperdiet habitasse turpis quam sit hendrerit blandit. Ornare tortor elementum in mi enim arcu ultrices.</p>
                </div>

                <div>
                    <h2 className='text-3xl font-semibold mb-2'>Required Skills</h2>
                    <ul className='list-none text-lg font-medium'>

                        <li className='mb-1 ml-1'>
                            <p className='flex'> <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span> JavaScript</p>
                        </li>
                        <li className='mb-1 ml-1'>
                            <p className='flex'> <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span> React Js</p>
                        </li>
                        <li className='mb-1 ml-1'>
                            <p className='flex'> <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span> Redux</p>
                        </li>
                        <li className='mb-1 ml-1'>
                            <p className='flex'> <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span> Version Control</p>
                        </li>
                        <li className='mb-1 ml-1'>
                            <p className='flex'> <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span> CSS/ SASS</p>
                        </li>

                    </ul>
                </div>

                <div>

                    <h2 className='text-3xl font-semibold my-3 mx-2'>Responsibilities</h2>

                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'><span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>

                </div>

                <div>

                    <h2 className='text-3xl font-semibold my-3 mx-2'>About This Role</h2>
                    <p className='text-lg font-normal ml-2 mb-1'>Job Level <span className='ml-12'>Senior Level</span></p>
                    <p className='text-lg font-normal ml-2 mb-1'>Posted On <span className='ml-10'>7th December</span></p>
                    <p className='text-lg font-normal ml-2 mb-1'>Apply Before <span className='ml-6'>16th December</span></p>

                </div>

                <div>
                    <h2 className='text-3xl font-semibold my-3 mx-2'>Qualifications</h2>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                </div>


                <div>
                    <h2 className='text-3xl font-semibold my-2'>About Company</h2>
                    <Image src='./assets/little.png' alt='little logo' width='80' height='80' className='border mb-1' />
                    <p className='text-xl font-medium text-gray-900 ml-2 mb-1'>Little</p>
                    <p className='text-lg font-normal ml-2'>Lorem ipsum dolor sit amet <br />consectetur. Elit diam <br />c dictum ac mattis est odio etiam.</p>

                </div>

                <div>

                    <h2 className='text-3xl font-semibold my-3 mx-2'>Nice To Have</h2>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p className='flex text-lg font-normal'>
                        <span><Image src='./icons/material-symbols_check-small-rounded.png' alt='check' width='24' height='24' className='ml-1.5' /></span>
                        Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>

                </div>

            </section>

            <section>

                <div className='flex items-center justify-between cursor-pointer p-6'>
                    <h2 className='text-3xl font-semibold ml-40 mt-4 '>More Jobs Like This</h2>
                    <p className='flex text-lg  font-normal mr-72 mt-4'>View All <span><Image height={15} width={15} alt='logo' src='./icons/mdi_arrow-right-thin.png' /></span></p>
                </div>

            </section>

            <section className='grids-container mt-3 mx-44'>


                {moreJobs.map((job, i) => (
                    <div key={i} className='grids flex max-w-xl min-w-fit border border-gray-400'>
                        <div className='flex items-center ml-5'>
                            <Image height={15} width={15} src={job.image} alt='logo' />
                        </div>
                        <div className='ml-12 mt-3'>
                            <p className='text-2xl font-medium'>{job.title}</p>
                            <p className='text-lg font-normal'>{job.location}</p>
                            <div>
                                {job.tags.map((tag, i) => (
                                    <span key={i}
                                        className={`text-base font-normal mr-3 mb-2 p-px cursor-pointer rounded-3xl ${i % 2 === 0 ? 'bg-gray-500' : 'bg-orange-500'}`}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            <section className='footer mt-10 bg-moringa_blue'>

                <div className='footer-content'>
                    <p className='footer-title'>Moringa School</p>
                    <p className='footer-location'>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</p>
                    <div className='contact'>
                        <p> +254 712 293 878 (Admin/General Enquiries)</p>
                        <p> +254 741 493 5656 (Data Science)</p>
                        <p>+254 712 293 878 (Whatsapp) </p>
                        <p>contact@moringaschool.com</p>
                        <p>admissions@moringaschool.com</p>
                        <p>  P.O Box 28860 - 00100, Nairobi </p>

                    </div>
                </div>

            </section>

            <div className='last'>
                <p className='text-white'>
                    2022 Moringa School, All Rights Reserved
                </p>

            </div>
        </div>
    )
}

export default JobInfo
