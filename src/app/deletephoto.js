'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import './uploadmodal.css'
import DeleteConfirmation from './deleteconfirmation'

const PictureDelete = () => {

  const [showDeleteModal, setShowDeleteModal] = useState(false)

    return (
        <div>
           <DeleteConfirmation isVisible={showDeleteModal}  notVisible={() => setShowDeleteModal(false)}/>

            <div className="modal rounded-md  mt-5 m-auto border-2 relative">

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

                    <div className='flex flex-col items-start'>
                        <button>
                            <div className='add inline-flex  mt-16 cursor-pointer mb-5'>
                                <Image src='./icons/material-symbols_add-a-photo-outline.svg' alt='delete' width='32' height='32' />
                                <p className='text-2xl font-medium ml-4'>Add profile picture</p>
                            </div>
                        </button>

                        <button onClick={() => setShowDeleteModal(true)}>
                            <div className='delete inline-flex cursor-pointer mb-10'>
                                <Image src='./icons/material-symbols_delete-outline-rounded.png' alt='delete' width='32' height='32' />
                                <p className='text-2xl font-medium ml-4'>Delete picture</p>
                            </div>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PictureDelete;