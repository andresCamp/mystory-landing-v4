import React from 'react'
import img from '@/public/mystoryimage1.png'
import logo from '@/public/MyStoryLogo-HorizontalBlack.svg'
import Image from 'next/image'
import Link from 'next/link'
import mobileLogo from '@/public/mystoryIcon.svg'
// import mobileLogo from '@/public/MyStoryLogo-HorizontalWhite.svg'
import { outfit } from '@/lib/fonts'


// root marketing page

const Page = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row h-[calc(100dvh)] overflow-hidden">
            
            {/* Text Section */}
            <div className=" flex flex-col items-start sm:items-start justify-center ring-2 ring-black h-4/5 bg-secondary p-8 sm:h-auto sm:w-1/2">
                
                {/* Logo */}
                <Image
                    src={logo}
                    alt="logo" 
                    height={65}
                    className='block mb-5'
                />
                {/* /Logo */}

                {/* Title & Subtitle */}
                <div className="w-full max-w-md sm:gap-10 gap-3 sm:pt-0 text-left flex flex-col sm:justify-center items-center sm:items-start">
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
            <div className="flex h-1/5 sm:h-full sm:w-1/2">

                {/* Mobile nav */}
                <div className='flex justify-between px-3 h-1/5 absolute bg-black/40 items-center  z-50 left-0 w-full sm:hidden'>
                    <Link href={"/mission"} className='text-white text-xl transition-all duration-500 hover:opacity-70'>
                        Our Mission
                    </Link>

                    
                        <Image
                            src={mobileLogo}
                            alt="logo" 
                            height={55}
                        />
                 

                    <div className='flex flex-col items-end justify-center sm:hidden'>
                        <Link href="https://app.mystory.bio/sign-in">
                            <button className=' ring-2 ring-white text-white text-xl rounded-3xl px-5 py-1 transition-all duration-500 hover:bg-primary-100 hover:bg-white hover:text-black'>
                                Sign In
                            </button>
                        </Link>

                    </div>
                </div>
                {/* Mobile Nav */}

                {/* Image */}
                <div className="w-full sm:h-full  relative ">
                    <Image
                        src={img}
                        fill
                        placeholder="blur"
                        alt="MyStory image holding hands"
                        className="object-cover object-bottom" 
                    />
                </div>
                {/* Image */}

                {/* Desktop Nav */}
                <div className='hidden sm:flex sm:flex-row items-center absolute right-0'>
                    <Link href={"/mission"} className='text-white text-2xl transition-all duration-500 hover:opacity-70'>
                        Our Mission
                    </Link>

                    <Link href="https://app.mystory.bio/sign-in" className='hidden sm:block'>
                        <button className='ring-2 ring-white text-white text-xl rounded-3xl px-10 m-10 py-3  transition-all duration-300 hover:bg-white hover:text-black '>
                            Sign In
                        </button>
                    </Link>
                </div>
                {/* Desktop Nav */}
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
              {/* <button className='flex justify-center items-center gap-2.5 px-12 py-4 bg-black text-white  rounded-full shadow-xl transition-all duration-500  hover:bg-primary-300 hover:scale-105'> */}
              <button className="bg-mprimary-300 px-12 py-4 text-xl text-white transition-all duration-300 rounded-full hover:bg-mprimary-200 hover:text-black hover:scale-105">
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
  
