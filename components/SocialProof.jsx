import React from 'react'
import Image from 'next/image'

const SocialProof = ({image}) => {
  return (
    <div className='flex'>
        <Image src={image} alt=''/>
    </div>
  )
}

export default SocialProof