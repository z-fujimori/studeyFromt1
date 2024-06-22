'use client'

import React from 'react'

const Footer = () => {

    const onClickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        })
    }

    return (
        <footer className="bg-white rounded-lg m-4">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className='flex justify-center'>
                <span className="flex-2 block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023.6.18 z-fujimori</span>
                <p className='ml-auto' onClick={onClickTop}>TOP</p>
            </div>
        </footer>
    )
}

export default Footer