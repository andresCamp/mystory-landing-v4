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
        <div className="flex flex-col-reverse sm:flex-row h-screen overflow-hidden">
            
            {/* Text Section */}
            <div className=" flex flex-1 flex-col items-center sm:items-start justify-center bg-secondary p-8 h-2/3 sm:h-auto sm:w-1/2">
                
                {/* Logo */}
                <Link href={"/"} className='transition-all duration-500 hover:opacity-70 hidden sm:block'>
                    <Image
                        src={logo}
                        alt="logo" 
                        height={65}
                    />
                </Link>
                {/* /Logo */}

                {/* Title & Subtitle */}
                <div className="w-full h-full max-w-md mx-auto sm:gap-10 gap-3 sm:pt-0 text-left flex flex-col sm:justify-center items-center sm:items-start">
                    <div className="text-gray-800 w-full">
                        <h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl mb-4 leading-tight">
                            <span>My Legacy</span><br/>
                            <span>My Treasure</span><br/>
                            <span>MyStory</span>
                        </h2>
                    </div>

                    <p className="text-xl text-black mb-2">Capture your life story in a video for your loved ones and generations to come.</p>
                    
                    <PrimaryButton url="https://app.mystory.bio/create-account">
                        <p className='text-2xl tracking-wide'>Start Now</p>
                    </PrimaryButton>
                </div>
                {/* /Title & Subtitle */}

            </div>
            {/* /Text Section */}


            {/* Image Section */}
            <div className="flex h-1/3 sm:h-full sm:w-1/2">
                {/* Mobile nav */}
                <div className='flex justify-between p-3 items-center absolute top-0 z-50 left-0 w-full sm:hidden'>
                    <h2 className='text-2xl w-1/3'>MyStory</h2>
                    <Link href={"/"} className='flex justify-center transition-all duration-500 hover:opacity-70  sm:hidden w-1/3'>
                        <Image
                            src={mobileLogo}
                            alt="logo" 
                            height={55}
                        />
                    </Link>
                    <Link href="https://app.mystory.bio/sign-in" className='flex justify-end sm:hidden w-1/3'>
                        <button className=' ring-2 ring-white text-white text-xl rounded-3xl px-5 py-1 transition-all duration-500 hover:bg-primary-100 hover:scale-105'>
                            Sign In
                        </button>
                    </Link>
                </div>

                {/* Image */}
                <div className="w-full h-full relative ">
                    <div className="md:h-full md:w-full flex items-end"> 
                            <Image
                                src={img}
                                fill
                                placeholder="blur"
                                alt="MyStory image holding hands"
                                className="w-full h-full object-cover object-bottom" 
                            />
                    </div>
                </div>

                <Link href="https://app.mystory.bio/sign-in" className='hidden sm:block'>
                    <button className='bg-white text-black text-xl rounded-3xl px-10 m-10 py-3 absolute right-0 transition-all duration-500 hover:bg-primary-100 hover:scale-105'>
                        Sign In
                    </button>
                </Link>
            </div>

        </div>
    )
}
export default Page

interface PrimaryButtonProps {
    children: React.ReactNode
    url: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({children, url}) => {
    return (
          <Link href={url} >
              <button className='flex justify-center items-center gap-2.5 px-12 py-4 bg-black text-white  rounded-full shadow-xl transition-all duration-500  hover:bg-primary-300 hover:scale-105'>
                  {children}
              </button>
          </Link>
      //     <Link href="/sign-up" className='bg-primary-300'>
      // <div className="flex justify-center items-center text-2xl text-primary-300 bg-primary-300" >
      //         <p className='bg-primary-300'>
      //         {text}
      //         </p>
      // </div>
      //     </Link>
    )
  }
  
