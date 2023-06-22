import React from 'react'
import {RiPhoneFill} from 'react-icons/ri'
import {PiEnvelopeSimpleThin} from 'react-icons/pi'
import {MdLocationOn} from 'react-icons/md'

const Dashboard = () => {
  return (
    <div className='w-[1440px] h-[3827px] bg-white flex flex-col items-center'>
        {/* Header */}
        <div className='bg-[#585858] inline-flex flex-row items-start justify-between px-[100px] pt-3 pb-[100px] gap-10 w-[1440px] h-[80px]'>
            <div className="bg-[#8d8d8d] w-[100px] h-[80px] bg-[url('/public/next.svg')] flex-none order-none self-stretch grow-0"/>
            <div className='bg=[#0d0d0d] w-[200px] h-[80px] flex flex-row items-center justify-between'>
                <a className='text-2xl text-black opacity-75'>Home</a>
                <a className='text-2xl font-medium text-black opacity-75'>Jobs</a>
            </div>
            <div className='mt-5'>
                <button
                    type="submit"
                    className="flex items-start rounded-md bg-moringa_blue opacity-50 px-3 py-1.5 text-md font-bold leading-6 text-white"
                >
                    Profile
                </button>
            </div>
        </div>
        {/* Footer */}
        <div className='bg-[#484848] w-[1440px] h-[498px] flex flex-col flex-shrink-0'>
            <div className='bg-moringa_blue opacity-50 w-[1440px] h-[497.712px] inline-flex flex-row flex-shrink-0'>
                <div className='bg-[#484848] basis-2/5'>
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
  )
}

export default Dashboard