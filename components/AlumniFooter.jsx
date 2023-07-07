import React from 'react'
import { RiPhoneFill } from 'react-icons/ri'
import { PiEnvelopeSimpleThin } from 'react-icons/pi'
import { MdLocationOn } from 'react-icons/md'

const AlumniFooter = () => {
return (
<div className='bg-[#484848] w-full h-[498px] flex flex-col flex-shrink-0'>
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
                        <RiPhoneFill style={{ paddingTop: "5px", color: "white", margin: "10px", font: "50px" }} />
                        <p className='mr-15 text-center text-xs text-white'>
                            +254 712 293 878 (Admin/General Enquiries)
                        </p>
                    </li>
                    <li className='flex flex-row items-center justify-center mr-[120px]'>
                        <RiPhoneFill style={{ paddingTop: "5px", color: "white", margin: "10px" }} />
                        <p className='mr-15 text-center text-xs text-white'>
                            +254 741 493 5656 (Data Science)
                        </p>
                    </li>
                    <li className='flex flex-row items-center justify-center mr-[145px]'>
                        <RiPhoneFill style={{ paddingTop: "5px", color: "white", margin: "10px" }} />
                        <p className='mr-15 text-center text-xs text-white'>
                            +254 712 293 878 (WhatsApp)
                        </p>
                    </li>
                    <li className='flex flex-row items-center justify-center mr-[153px]'>
                        <PiEnvelopeSimpleThin style={{ paddingTop: "5px", color: "white", margin: "10px" }} />
                        <p className='mr-15 text-center text-xs text-white'>
                            contact@moringaschool.com
                        </p>
                    </li>
                    <li className='flex flex-row items-center justify-center mr-[140px]'>
                        <PiEnvelopeSimpleThin style={{ paddingTop: "5px", color: "white", margin: "10px" }} />
                        <p className='mr-15 text-center text-xs text-white'>
                            admissions@moringaschool.com
                        </p>
                    </li>
                    <li className='flex flex-row items-center justify-center mr-[140px]'>
                        <MdLocationOn style={{ paddingTop: "5px", color: "white", margin: "10px" }} />
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
)
}

export default AlumniFooter