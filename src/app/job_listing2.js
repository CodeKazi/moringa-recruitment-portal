import React from 'react'
import "./job_listing2.css"
// import { recentJobs } from '../../cardData/recentjobs'
import { moreJobs } from '../../cardData/morejobs'
console.log(moreJobs)

const JobInfo = () => {
    return (
        <div>

            <nav className='flex justify-around'>
                <div className='logo mt-1'>
                    <img src='/assets/moringa0.png' alt='Moringa School' />
                </div>

                <div className='home flex'>
                    <span className='mt-7'>Home</span>
                    <span className='ml-4 mt-7'>Jobs</span>

                </div>

                <div className='profile-btn'>
                    <button className='btn'>Profile</button>
                </div>
            </nav>


            <section className='first-section text-white flex justify-evenly p-10'>
                <div className='apply'>

                    <h3 className='text-white text-xl font-semibold'>Front-end Developer</h3>
                    <p className='text-sm font-medium mb-2'> Full-time<span className='ml-4'>Kisumu, Kenya</span></p>
                    <button className='apply-btn text-sm font-medium flex'>Apply</button>

                </div>

                <div className='details border-l text-sm font-semibold mt-4'>

                    <p className='flex comapny ml-3'>
                        <span className='mr-1'><img src='./icons/mdi_company.png'  alt='logo'/></span>
                        Little</p>
                    <p className='flex ml-3'>
                        <span className='mr-1'><img src='./icons/bi_people.png' alt='logo' /></span>
                        13 applicants</p>
                    <button className='flex ml-3'>
                        <span className='mr-1'><img src='./icons/Vector.png' alt='logo' /></span>
                        Download PDF</button>

                </div>
            </section>

            <section className='flex justify-evenly'>

                <div className='job-description'>

                    <h2 className='text-xl font-semibold mt-3'>Job Description</h2>
                    <p className='flex flex-col shrink-0 text-base '>Lorem ipsum dolor sit amet consectetur. Ut nulla viverra dignissim sed id platea. Eu aliquam euismod nunc nam rutrum enim pulvinar facilisi. Sagittis dictum ut arcu cras orci auctor tincidunt. Adipiscing ultrices quam est convallis mauris. Enim tellus sagittis amet rhoncus nec ornare nec. Justo semper tellus eu quam morbi sem. Nulla lorem netus imperdiet habitasse turpis quam sit hendrerit blandit. Ornare tortor elementum in mi enim arcu ultrices.</p>
                
                </div>

                <div className='required-skills mt-3 ml-5'>

                    <h2 className='text-xl font-semibold'>Required Skills</h2>
                    <ul className='list-none text-base'>
                        <li><p>JavaScript</p></li>
                        <li><p>React Js</p></li>
                        <li> <p>Redux</p></li>
                        <li><p>Version Control</p></li>
                        <li><p>CSS/ SASS</p></li>
                    </ul>
                    
                </div>
            </section>

            <section className='flex justify-evenly'>

                <div className='responsibilities  ml-8'>

                    <h2 className='text-xl font-semibold mt-2'>Responsibilities</h2>
                    <p className='flex flex-col shrink-0 text-base '>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>

                </div>

                <div className='about text-base ml-5'>

                    <h2 className='text-lg font-semibold mt-2'>About This Role</h2>
                    <p>Job Level <span className='ml-6'>Senior Level</span></p>
                    <p>Posted On <span className='ml-5'>7th December</span></p>
                    <p>Apply Before <span className='ml-2'>16th December</span></p>

                </div>
                    
            </section>

            <section className='flex justify-around'>

                <div className='qualifications ml-20'>

                    <h2 className='text-xl font-semibold mt-2'>Qualifications</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>

                </div>

                <div className='about-company ml-6'>

                    <h2 className='text-xl font-semibold mt-2'>About Company</h2>
                    <img src='./assets/little.png' alt='little logo' />
                    <p>Little</p>
                    <p>Lorem ipsum dolor sit amet <br />consectetur. Elit diam <br />c dictum ac mattis est odio etiam.</p>
                
                </div>

            </section>

            <section className='flex justify-evenly'>

                <div className='additional-info ml-0'>

                    <h2 className='text-xl font-semibold mt-2'>Nice To Have</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Fermentum tortor risus eges</p>
                
                </div>
                
                <div></div>

            </section>

            <section>

                <div className='flex items-center justify-between cursor-pointer'>
                    <h2 className='text-xl font-semibold ml-16 mt-4 '>More Jobs Like This</h2>
                    <p className='flex text-base mr-16 mt-4'>View All <span><img src='./icons/mdi_arrow-right-thin.png' /></span></p>
                </div>

            </section>

            <section className='grids-container mt-3 mx-16'>
                
                
                {moreJobs.map((job, i) => (
                    <div key={i} className='grids flex'>
                        <div className='flex items-center'>
                            <img src={job.image}  alt='logo'/>
                        </div>
                        <div className='ml-7 mt-3'>
                            <p className='text-base'>{job.title}</p>
                            <p className='text-base'>{job.location}</p>
                            <div>
                            {job.tags.map((tag, i) => (
                                <span key={i}
                                    className={`mr-3 mb-2 p-px rounded-3xl ${i % 2 === 0 ? 'bg-gray-500' : 'bg-orange-500'}`}>{tag}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
                
            </section>

            <section className='footer mt-3'>

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
