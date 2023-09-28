"use client"
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const clickHandler = () => {
       console.log('clicked')
    }
  return (
    <div className='hero'>
       <h1>Hero
        </h1> 
        <CustomButton 
        buttonText='Explore Cars' buttonMethod={clickHandler}
        containerStyles='m-2 p-2 px-4  border border-blue-400 bg-blue-500 rounded-full '/>
    </div>
  )
}

export default Hero