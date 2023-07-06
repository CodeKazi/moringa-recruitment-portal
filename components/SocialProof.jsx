import Image from 'next/image'
import React from 'react'

const SocialProof = ({image}) => {
  return (
    <div className='flex'>
        <Image src={image} alt='logo' height={61} width={81} />
    </div>
  )
}

export default SocialProof