"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
const Hero = () => {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <div className='hero mx-auto bg-blue-500 py-12'>
            <div className="flex flex-1 flex-col gap-5  sm:px-16 px-6 md:flex-row relative z-0 mx-auto  items-center ">
                <div className="hero_text pb-0 pr-0  sm:mr-0 xl:pr-0 mb-0 xl:w-[48%] md:pl-[10%] max-sm:w-[90%] max-sm::mx-auto ">
                    <h1 className=' font-extrabold xl:text-[3.25rem] sm:text-[34px] text-[28px]  tracking-widest '>
                        Navigate Our Vast Selection, Book Swiftly, and Hit the Road!
                    </h1>
                    <p>
                        <span className='text-gray-700'>
                            Streamline your car rental experience with our effortless booking process.
                        </span>
                    </p>
                    <CustomButton
                        buttonText='Explore Cars' buttonMethod={clickHandler}
                        containerStyles='mt-4 p-2 px-4  border border-white-400 rounded-lg font-bold 
                        text-white hover:bg-black hover:border-500
                        hover:border-none
                        hover:text-blue-500
                        shadow-lg
                        hover:scale-105 transition hover:-translate-y-1' />
                </div>
                <div className="xl:flex-[1.5] max-sm:w-[90%] w-full  mx-auto md:mx-0 md:flex justify-center  items-center  overflow-hidden ">
                    <div className="relative w-full h-[16rem] max-sm:h-[12rem] z-0 ">
                        <Image src='/hero-image.png' alt='Car Image' fill className='object-contain clipped-image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero