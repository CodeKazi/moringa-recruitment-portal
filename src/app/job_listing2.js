import React from 'react'
import "./job_listing2.css"

const JobInfo = () => {
    return (
        <div>
            <section className='first-section text-white flex justify-evenly p-10'>


                <div className='apply'>
                    <h3 className='text-white text-xl font-semibold'>Front-end Developer</h3>
                    <p className='text-sm font-medium mb-2'> Full-time<span className='ml-4'>Kisumu, Kenya</span></p>
                    <button className='apply-btn text-sm font-medium flex'>Apply</button>
                </div>

                <div className='details border-l text-sm font-semibold mt-4'>
                    <p className='comapny ml-3'>Little</p>
                    <p className='ml-3'>13 applicants</p>
                    <button className='ml-3'>Download PDF</button>
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
                    {/* To be replaced with the actual logo */}
                    <p>Little logo</p>
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
                    <p className='text-base mr-16 mt-4'>View All</p>
                </div>
            </section>

            <section className='grids-container'>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                             <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                            <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                            <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                            <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                            <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                <div className='grids flex'>
                    <div className='flex items-center'>
                        {/* To be replaced with the actual logo */}
                        <p className='font-semibold ml-3'>Equity</p>
                    </div>
                    <div className='ml-7 mt-3' >
                        <p className='text-base'>Frontend Developer</p>
                        <p className='text-base'>Mombasa, Kenya</p>
                        <div>
                            <span className='language'>JavaScript</span>
                            <span className='framework'>Angular</span>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default JobInfo
