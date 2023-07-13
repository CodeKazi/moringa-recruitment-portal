import React from 'react'
import Image from 'next/image'

const SocialProof = ({image}) => {
  return (
    <div className='flex'>
        <Image src={image} width={81} height={61}/>
    </div>
  )
}

export default SocialProof