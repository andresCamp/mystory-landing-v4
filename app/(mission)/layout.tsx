import "../globals.css";
import type { Metadata } from 'next'
// import { Inter, Caudex } from 'next/font/google'
import { outfit, caudex } from '@/lib/fonts'
import Link from 'next/link'
import Image from 'next/image'
// import logo from '@/public/mystorylogotanhand.svg'
import logo from '@/public/mystoryIcon.svg'
import arrowIcon from '@/public/Arrow.svg'

export const metadata: Metadata = {
  title: 'MyStory',
  description: 'Your Legacy, Their Treasure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" className={`${caudex.className} ${inter.className}`}>
    <html lang="en" className={caudex.className}>
        <body>
            <NavBarMission/>
            {/* <NavBar/> */}
            {children}
            {/* <NavTab/> */}
            <JoinBetaCTA/>
        </body>
      </html>
  )
}



const NavBarMission = () => {
  return (
    // <div className='flex justify-center w-full sm:justify-start fixed top-0 p-2 sm:p-8 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
    <div className='flex justify-center text-white  gap-16 sm:gap-0 sm:justify-between items-center w-full fixed top-0  pt-8 pb-4 sm:py-8 sm:px-12 z-50 backdrop-blur-sm sm:backdrop-blur-none '>
        
        <div className='flex w-1/3 flex-row justify-end sm:justify-start items-center text-lg gap-8 '>
            {/* <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'> */}
                <h2 className='text-xl'>MyStory</h2>
            {/* </Link> */}
        </div>

        {/* <Link href={"/"} className=' transition-all duration-500 hover:opacity-70'> */}
            <Image
                src={logo}
                alt=''
                className='w-14 sm:w-16'
            />
        {/* </Link> */}

        <div className='flex w-1/3 flex-row justify-start sm:justify-end items-center text-lg gap-8 '>
            <Link href={"/welcome"} className=' transition-all duration-500 hover:opacity-70'>
                <h3 className='text-xl'>Begin</h3>
            </Link>
        </div>
    </div>
  )
}

const JoinBetaCTA = () => {
  return (
    <div className={`flex flex-wrap gap-4 ${outfit.className} fixed bottom-10 inset-x-0 justify-center sm:py-4 text-white`}>
      <Link href={"/welcome"} className=' transition-all duration-500 hover:opacity-70'>
        <div className='flex flex-row gap-2 justify-center items-center'>
          <h3 className="text-xl sm:text-2xl pb-1.5">Tell your Story</h3>
          {/* <h3>Join the Waitlist</h3> */}
          {/* <h3>Join our Public Beta</h3> */}
          <Image src={arrowIcon} alt='' className='w-5 h-5 text-white' />
        </div>
      
      </Link>
    </div>
  )
}