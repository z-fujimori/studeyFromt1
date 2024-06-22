import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center m-5">
        <h2  className='inline-block text-4xl text-center border-b border-gray-700 m-8'>About</h2>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <Image 
                src="/img/about.jpg" 
                alt="自分のイメージ" 
                height={100} 
                width={100}
                className="object-contain rounded-full h-full"
            />
            <div className="m-3">
                <h3 className="text-l font-semibold">KAKERU MIYAICHI</h3>
                <p className='md:w-96'>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
        </div>
    </div>
  )
}

export default About