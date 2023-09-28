"use client"
import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <div className='hero'>
            <div className="flex-1 flex-col">
                <div className="hero_text m-[3rem] md:w-2/4  ">
                    <h1 className=' font-bold text-4xl leading-[1.5]'>
                        Navigate Our Vast <br />Selection, Book Swiftly, <br />and Hit the Road!
                    </h1>
                    <p>
                        <span className='text-slate-600'>
                            Streamline your car rental experience with our effortless booking process.
                        </span>
                    </p>

                <CustomButton
                    buttonText='Explore Cars' buttonMethod={clickHandler}
                    containerStyles='mt-2 p-2 px-4  border border-blue-400 bg-blue-500 rounded-full ' />
                </div>

            </div>
        </div>
    )
}

export default Hero