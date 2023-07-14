import Image from 'next/image'
import React from 'react'

const SocialProof = ({image}) => {
  return (
    <div className='flex'>
        <Image src={image} alt='logo' width={81} height={61}/>
    </div>
  )
}

export default SocialProof