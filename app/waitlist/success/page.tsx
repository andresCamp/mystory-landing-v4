import React from 'react'
import img from '@/public/mystoryimage1.png'
import logo from '@/public/MyStoryLogo-HorizontalBlack.svg'
import Image from 'next/image'
import Link from 'next/link'
import mobileLogo from '@/public/mystoryIcon.svg'
import { outfit } from '@/lib/fonts'



// root marketing page

const Page = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen md:h-screen overflow-hidden bg-secondary">

            {/* Image Section */}
            <div className="hidden md:flex md:h-full md:w-1/2 relative">
                <Image
                    src={img}
                    alt="MyStory image holding hands"
                    fill  // Ensures the image covers the available space
                    style={{
                        objectFit: 'cover',
                      }}
                />
            </div>


            {/* Text Section */}
            <div className="flex flex-1 flex-col items-center md:items-center justify-start px-3 md:p-8 h-2/3 md:h-auto md:w-1/2 overflow-y-auto">
                {/* Logo */}
                <Link href={"/"} className='transition-all duration-500 hover:opacity-70 hidden md:flex w-full items-start'>
                    <Image
                        src={logo}
                        alt="logo" 
                        height={65}
                    />
                </Link>
                {/* Title & Subtitle */}
                <div className="text-gray-800 max-w-lg px-4 py-5 md:p-6 space-y-6">
                    <div className="text-left ">
                        <h2 className="font-bold text-4xl lg:text-5xl mb-4 whitespace-nowrap">
                            <span className="block mb-2 lg:mb-2">Thank you for joining</span>
                            <span className="block">the MyStory waitlist!</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl mb-5">
                            We&apos;ve received your sign-up details and are thrilled to have you on board. We will be reaching out to you via email in the near future!
                        </p>

                        <p className="text-lg text-gray-600 mt-4">
                            Best,<br/>
                            MyStory Team
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex md:hidden px-3 pt-3'>
                <Link href={"/"} className='transition-all duration-500 hover:opacity-70 flex w-full items-start'>
                        <Image
                            src={logo}
                            alt="logo" 
                            height={55}
                        />
                </Link>
            </div>

        </div>
    )
}
export default Page;
