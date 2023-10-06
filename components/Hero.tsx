"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
const Hero = () => {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <div className='hero mx-auto mt-16'>
            <div className="flex flex-1 flex-col gap-5  sm:px-16 px-6 md:flex-row relative z-0 mx-auto  items-center ">
                <div className="hero_text pb-0 pr-0  sm:mr-0 xl:pr-0 mb-0 xl:w-[40%] md:pl-[10%] max-sm:w-[90%] max-sm::mx-auto ">
                    <h1 className=' font-extrabold 2xl:text-[52px] sm:text-[34px] text-[28px] '>
                        Navigate Our Vast Selection, Book Swiftly, and Hit the Road!
                    </h1>
                    <p>
                        <span className='text-slate-600'>
                            Streamline your car rental experience with our effortless booking process.
                        </span>
                    </p>
                    <CustomButton
                        buttonText='Explore Cars' buttonMethod={clickHandler}
                        containerStyles='mt-4 p-2 px-4  border border-blue-400 bg-blue-500 rounded-full ' />
                </div>
                <div className="xl:flex-[1.5] max-sm:w-[90%] w-full  mx-auto md:mx-0 md:flex justify-center  items-center  overflow-hidden">
                    <div className="relative w-full h-[16rem] max-sm:h-[12rem] z-0 ">
                        <Image src='/hero-image.png' alt='Car Image' fill className='object-contain clipped-image' />
                    </div>                 
                </div>
            </div>
        </div>
    )
}

export default Hero