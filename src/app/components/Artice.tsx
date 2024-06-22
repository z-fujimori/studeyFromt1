import Image from 'next/image'
import React from 'react'

const Artice = () => {
  return (
    <div className="flex justify-between flex-col items-center">
        <h2 id="bike" className='inline-block text-4xl text-center m-5 border-b border-gray-700'>Bike</h2>
        
        <div className="flex flex-col md:flex-row justify-between auto-cols-max  items-center w-full">

            <div className="flex flex-col items-center p-2  h-full w-11/12 md:w-1/3">
                <Image
                    src="/img/bike2.jpg" 
                    alt="テストイメージ" 
                    height={100}
                    width={100}
                    className='object-cover md:h-48 w-full'
                />
                <h3 className='font-semibold'>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
            </div>
            
            <div className="flex flex-col items-center p-2 h-full w-11/12 md:w-1/3">
                <Image
                    src="/img/bike3.jpg" 
                    alt="テストイメージ" 
                    height={250}
                    width={250}
                    className='object-cover md:h-48 w-full'
                />
                <h3 className='font-semibold'>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
            </div>

            <div className="flex flex-col items-center p-2 h-full w-11/12 md:w-1/3">
                <Image
                    src="/img/bike4.jpg" 
                    alt="テストイメージ" 
                    height={250}
                    width={250}
                    className='object-cover md:h-48 w-full'
                />
                <h3 className='font-semibold'>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
            </div>

        </div>
    </div>
  )
}

export default Artice