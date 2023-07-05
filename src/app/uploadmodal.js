import React from 'react'
import Image from 'next/image'
import "./uploadmodal.css"

const ImageModal = () => {

    return (
        <div >

            {/* The Modal */}
            <div className="modal rounded-md m-auto">

                {/* Modal content */}
                <div className="modal-content ">

                    <div className='top flex justify-between mt-3 ml-4'>
                        <p className='text-2xl font-semibold'>Edit Profile photo</p>
                        <div>
                            <p className='close mr-6 text-4xl cursor-pointer'>&times;</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-8'>
                        <Image src='./assets/Ismaili.png' alt='Ismaili' width='255' height='255' />
                    </div>

                    <div className='add inline-flex mt-16 cursor-pointer mb-5'>
                        <Image src='./icons/material-symbols_add-a-photo-outline.svg' alt='delete' width='32' height='32' />
                        <p className='text-2xl font-medium ml-4'>Add profile picture</p>
                    </div>

                    <div className='delete flex inline cursor-pointer mb-10'>
                        <Image src='./icons/material-symbols_delete-outline-rounded.png' alt='delete' width='32' height='32' />
                        <p className='text-2xl font-medium ml-4'>Delete picture</p>
                    </div>
                </div>

            </div>


            <div className="modal rounded-md mt-6 m-auto">

                {/* Modal content */}
                <div className="modal-content ">

                    <div className='top flex justify-between mt-3 ml-4'>
                        <p className='text-2xl font-semibold'>Edit Profile photo</p>
                        <div>
                            <p className='close mr-6 text-4xl cursor-pointer'>&times;</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-8'>
                        <Image src='./assets/Ismaili.png' alt='Ismaili' width='255' height='255' />
                    </div>

                    <div className='add inline-flex mt-16 mb-5'>
                        <Image src='./icons/ic_outline-cloud-upload.png' alt='delete' width='32' height='32' />
                        <p className='text-2xl font-medium ml-4'>Upload picture</p>
                    </div>

                    <div className='mb-10'>
                        <button className='bg-moringa_blue text-lg text-white w-28 py-2.5 px-9 rounded-md '>Save</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageModal
