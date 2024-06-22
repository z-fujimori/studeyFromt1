import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-2 px-8'>
        <div className="bg-neutral-900 py-1 px-3">
            <h1 className="text-3xl text-slate-200 font-bold"><a href="/">Profile</a></h1>
        </div>


        <nav>
            <ul className='flex justify-between items-center'>
                <li className='px-5'><a href="/#about">About</a></li>
                <li className='px-5'><a href="#bike">Bike</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header