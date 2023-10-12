import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-container flex flex-col text-black-100 mt-5 border-t border-gray-200'>
      <div className="footer-wrapper flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="footer-col flex flex-col max-sm:justify-center justify-start items-start gap-6">
          <Link href='/'>
            <div className='logo text-blue-700 font-bold text-lg tracking-[0.20em] select-none'>
              CAR<span className='text-black'>SHOP</span>
            </div>
          </Link>
          <p className='text-sm'>Carshop 2023 <br />
            All rights reserved &copy;</p>
        </div>
        <div className="footer-links flex-1 w-full flex shrink md:justify-end flex-wrap max-md:mt-10 md:gap-12 gap-8">
          {
            footerLinks.map((link) => (
              <div key={link.title}
                className='footer-link-title flex flex-col gap-6 text-base min-w-[130px]'>
                <h3 className='font-bold'>{link.title}</h3>
                <div className="flex flex-col gap-5">
                  {
                    link.links.map((link) => (
                      <Link
                        key={link.title}
                        href={link.url}
                        className='text-gray-500 text-sm'
                      >
                        {link.title}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='flex justify-between items center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 gap-2'>
        <p>@2023 CarShop. All rights reserved.</p>

        <div className="footer_copyrights-link flex gap-4">
          <Link href='/' className='text-gray-500'>
            Privacy & Policy
          </Link>
          <Link href='/' className='text-gray-500'>
            Terms & Conditions
          </Link>
        </div>

      </div>

    </footer>
  )
}

export default Footer