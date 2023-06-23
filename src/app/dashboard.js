import React from 'react'
import TopJobsCard from '../../components/TopJobsCard'
import {RiPhoneFill} from 'react-icons/ri'
import {PiEnvelopeSimpleThin} from 'react-icons/pi'
import {MdLocationOn} from 'react-icons/md'

const Dashboard = () => {
  return (
    <div className='w-[1440px] h-[3827px] bg-white flex flex-col items-center'>
        {/* Header */}
        <div className='inline-flex flex-row items-start justify-between px-[100px] pt-3 pb-[80px] gap-10 w-[1440px] h-[80px] border-b'>
            <div className="w-[95px] h-[65px] bg-[url('/assets/moringa0.png')] flex-none order-none self-stretch grow-0 mt-5"/>
            <div className='bg=[#0d0d0d] w-[200px] h-[80px] flex flex-row items-center justify-between'>
                <a className='text-2xl text-black opacity-75'>Home</a>
                <a className='text-2xl font-medium text-black opacity-75'>Jobs</a>
            </div>
            <div className='mt-5'>
                <button
                    type="submit"
                    className="flex items-start rounded-md bg-moringa_blue/80 px-3 py-1.5 text-md font-bold leading-6 text-white"
                >
                    Profile
                </button>
            </div>
        </div>

        {/* Body, part 1 */}
        <div className='w-[1440px] h-[1544px] flex flex-col'>
            <div className='basis-2/7 border-b'>
                <div>
                    <h1 className='text-6xl font-semibold text-moringa_blue opacity-80 ml-[165px] mt-[110px]'>
                        Alumni Portal
                    </h1>
                </div>
                <div>
                    <p className='flex flex-col flex-shrink-0 w-[608px] text-xl text-black/75 ml-[165px] mt-[10px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                </div>
                <div className='flex h-20 flex-col justify-between items-center flex-shrink-0 w-[624px] px-[20px] py-[10px] rounded-xl ml-[45px] mt-[10px]'>
                    <form className="w-full max-w-sm">
                    <div className="flex items-center border-[1px] border-black/25 w-[427.5px] h-[70px] flex-shrink-0 px-3 py-0 rounded-md">
                        <input className="bg-transparent border-[1px] border-black/25 w-full h-12 text-gray-700 mr-3 py-1 px-2 leading-tight rounded-md type='text'"/>
                        <button className="basis-1/5 h-12 flex-shrink-0 bg-[#FA510F]  border-[#FA510F]  text-md border-4 text-white py-0 px-2 rounded" type="button">
                        Search
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <div className='basis-1/7 flex items-center justify-center border-b flex-col'>
                <div className='w-[473px] flex flex-col flex-shrink-0 text-center text-lg text-black/75 mt-10'>
                    Our Career Day events and recruitment drives have helped over 85% of our core graduates find meaningful employment within 6-months post-graduation
                </div>
                <div className='grid grid-cols-5 gap-[52px] w-[1110px] items-start mb-10'>
                    <div className='flex'>
                        <img src='/assets/msft1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/scom1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/andela1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/cellulant1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/eqty1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/little1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/im1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/zindi1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/sanlam1.png'/>
                    </div>
                    <div className='flex'>
                        <img src='/assets/toptal1.png'/>
                    </div>
                </div>
            </div>
            <div className='bg-[#484848] basis-4/7 flex flex-col items-center justify-center'>
                <div className='flex justify-between items-center w-[1108px] mt-10 mb-5'>
                    <div>
                        <p className='text-2xl font-semibold text-moringa_blue'>
                            Top Jobs
                        </p>
                    </div>
                    <div>
                        <p className='text-lg text-moringa_blue'>
                            View All
                        </p>
                        {/* mdi:ArrowRightThin */}
                    </div>
                </div>
                <div>
                <div className='grid grid-cols-2 gap-[52px] w-[1110px] items-start mb-10'>
                    <TopJobsCard title='Senior Mobile Developer'
                        description='Revolut is looking for mobile software developer to assist...'
                        tags={['Android', 'Flutter']}
                    />
                    <TopJobsCard title='Fullstack Software Developer'
                    description='Revolut is looking for fullstack software developer to handle...'
                    tags={['Javascript', 'Python', 'React']}
                    />       
                    <TopJobsCard title='Senior Mobile Developer'
                        description='Revolut is looking for mobile software developer to assist...'
                        tags={['Android', 'Flutter']}
                    />    
                    <TopJobsCard title='Senior Mobile Developer'
                        description='Revolut is looking for mobile software developer to assist...'
                        tags={['Android', 'Flutter']}
                    />
                    <TopJobsCard title='Senior Mobile Developer'
                        description='Revolut is looking for mobile software developer to assist...'
                        tags={['Android', 'Flutter']}
                    />
                    <TopJobsCard title='Senior Mobile Developer'
                        description='Revolut is looking for mobile software developer to assist...'
                        tags={['Android', 'Flutter']}
                    />
                    </div>
            </div>
        </div>

        {/* Body, part 2 */}
        <div className='bg-moringa_blue opacity-80 w-[1440px] h-[334px] flex flex-row flex-shrink-0 items-center justify-center px-10'>
            <div className='basis-1/2 px-20'>
                <h2 className='text-2xl font-semibold text-white'>Morninga News</h2>
                <p className='w-[478px] flex flex-col flex-shrink-0 text-lg text-white mt-5 mb-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='basis-1/2 px-20'>
                <h2 className='text-2xl font-semibold text-white'>Morninga News</h2>
                <p className='w-[478px] flex flex-col flex-shrink-0 text-lg text-white mt-5 mb-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

        {/* Body, part 3 */}
        <div className='bg-[#848484] w-[1440px] h-[1371px] flex items-center justify-center'>
            <h1 className='text-4xl text-white'>Recent jobs Area</h1>
        </div>

        {/* Footer */}
        <div className='bg-[#484848] w-[1440px] h-[498px] flex flex-col flex-shrink-0'>
            <div className='bg-moringa_blue opacity-50 w-[1440px] h-[497.712px] inline-flex flex-row flex-shrink-0'>
                <div className=' basis-2/5'>
                    <div className='mt-[69px] ml-[66px]'>
                        <ul className='flex flex-col items-center'>
                            <li>
                                <p className='text-center text-2xl text-white mr-[195px] mb-3'>
                                    Moringa School
                                </p>
                            </li>
                            <li>
                                <p className='text-center text-sm text-white'>
                                    Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya
                                </p>
                            </li>
                            <li className='flex flex-row items-center mr-[60px]'>
                                <RiPhoneFill style={{paddingTop: "5px", color: "white", margin: "10px", font: "50px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    +254 712 293 878 (Admin/General Enquiries)
                                </p>
                            </li>
                            <li className='flex flex-row items-center justify-center mr-[120px]'>
                                <RiPhoneFill style={{paddingTop: "5px", color: "white", margin: "10px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    +254 741 493 5656 (Data Science)
                                </p>
                            </li>
                            <li className='flex flex-row items-center justify-center mr-[145px]'>
                                <RiPhoneFill style={{paddingTop: "5px", color: "white", margin: "10px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    +254 712 293 878 (WhatsApp)
                                </p>
                            </li>
                            <li className='flex flex-row items-center justify-center mr-[153px]'>
                                <PiEnvelopeSimpleThin style={{paddingTop: "5px", color: "white", margin: "10px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    contact@moringaschool.com
                                </p>
                            </li>
                            <li className='flex flex-row items-center justify-center mr-[140px]'>
                                <PiEnvelopeSimpleThin style={{paddingTop: "5px", color: "white", margin: "10px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    admissions@moringaschool.com
                                </p>
                            </li>
                            <li className='flex flex-row items-center justify-center mr-[140px]'>
                                <MdLocationOn style={{paddingTop: "5px", color: "white", margin: "10px"}}/>
                                <p className='mr-15 text-center text-xs text-white'>
                                    P.O. Box 28860 - 00100, Nairobi
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='bg-[#3f3f3f] basis-3/5 flex items-center justify-center'>
                    <h1 className='text-4xl text-white'>Map Area</h1>
                </div>
            </div>
            <div className='bg-moringa_blue w-[1440px] h-[46px] flex justify-center'>
                <p className='text-white text-sm p-3'>&copy; 2022 Moringa School, All Rights Reserved</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard