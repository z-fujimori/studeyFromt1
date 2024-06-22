import Image from 'next/image'
import React from 'react'

const ImgFull = () => {
  return (
    <div >
        <Image 
            src = "/img/bike.jpg" 
            alt="テストイメージ"  
            width={2000} 
            height={600} 
            className="h-96 w-full object-cover"
        />
    </div>
  )
}

export default ImgFull