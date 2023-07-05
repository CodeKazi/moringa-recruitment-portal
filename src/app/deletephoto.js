import React from 'react'
import Image from 'next/image'
import './uploadmodal.css'

const PictureDelete = () => {
    return (
        <div>
            <div className="bg-white mt-2 m-auto max-w-sm  max-h-48 border-2 rounded-md mt-3">
                <div className="border-b-2">
                    <h1 className="text-xl font-semibold my-2 ml-4">Delete photo</h1>
                </div>
                <p className="text-base font-medium mx-14 my-5">Are you sure you want to delete your profile picture?</p>
                <div className="flex justify-end mr-10 mb-5">
                    <button className="text-base font-medium  mr-5">Cancel</button>
                    <button className="text-base font-medium text-red-600">Delete</button>
                </div>
            </div>

            <div className="modal rounded-md  mt-5 m-auto border-2">

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

        </div>
    );
}

export default PictureDelete;