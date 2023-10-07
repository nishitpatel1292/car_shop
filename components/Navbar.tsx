"use client"
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {

  return (
    <header className='w-full top-0 sticky z-10 bg-white'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/'>
        <div className='logo text-blue-700 font-bold text-2xl tracking-[0.30em] select-none  '>
          CAR<span className='text-black transition'>SHOP</span>
        </div>
        </Link>
        <div className='signIn select-none  '>
          <CustomButton 
          buttonText='Sign In'
          buttonType='button'
          containerStyles='text-white font-semibold bg-blue-500 px-5 py-2 rounded min-w-[6em]
          transition delay-10ms 
          hover:scale-105 hover:shadow-lg' 
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar