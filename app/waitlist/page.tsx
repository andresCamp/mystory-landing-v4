import React from 'react'
import img from '@/public/mystoryimage1.png'
import logo from '@/public/MyStoryLogo-HorizontalBlack.svg'
import Image from 'next/image'
import Link from 'next/link'
import mobileLogo from '@/public/mystoryIcon.svg'
import { outfit } from '@/lib/fonts'
import WaitlistForm from './WaitlistForm'


// root marketing page

const Page = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row min-h-screen overflow-hidden">
            
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
                    <div className="text-gray-800 w-full px-4 py-5 sm:p-6">
                        <div className="text-left">
                            <h2 className="font-bold text-5xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
                            Join the Waitlist
                            </h2>  
                        </div>
                        <div>
                            <p className="text-lg mb-5">
                            We&apos;re excited to invite you to be among the first to experience our new way of preserving personal histories. Sign up today and tell us why you&apos;re interested—we&apos;re eager to hear your story!
                            </p>
                            <WaitlistForm />
                            <p className="text-sm text-gray-600 mt-4">
                            We respect your privacy. Your information is secure and will never be shared.
                            </p>
                        </div>
                    </div>
                </div>
                {/* /Title & Subtitle */}
            </div>
            {/* /Text Section */}


            {/* Image Section */}
            <div className="flex h-1/3 sm:h-full sm:w-1/2">
                {/* Mobile nav */}
                <div className='flex justify-between p-3 items-center absolute top-0 z-50 left-0 w-full sm:hidden'>
                    {/* <h2 className='text-2xl w-1/3'>MyStory</h2> */}
                    {/* <Link href={"/"} className='flex justify-center transition-all duration-500 hover:opacity-70  sm:hidden w-1/3'> */}
                        <Image
                            src={logo}
                            alt="logo" 
                            height={55}
                        />
                    {/* </Link> */}
                    {/* <Link href="https://app.mystory.bio/sign-in" className='flex justify-end sm:hidden w-1/3'>
                        <button className=' ring-2 ring-white text-white text-xl rounded-3xl px-5 py-1 transition-all duration-500 hover:bg-primary-100 hover:scale-105'>
                            Sign In
                        </button>
                    </Link> */}
                </div>

                {/* Image */}
                <div className="w-full h-full relative ">
                    <div className="md:h-full md:w-full flex items-end"> 
                            {/* <Image
                                src={img}
                                fill
                                placeholder="blur"
                                alt="MyStory image holding hands"
                                className="w-full h-full object-cover object-bottom" 
                            /> */}
                    </div>
                </div>

             
            </div>

        </div>
    )
}
export default Page




{/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "45901333",
    formId: "54f72923-6e0a-477e-aa2b-56d6c3e42e91"
  });
</script> */}


{/* <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "45901333",
    formId: "54f72923-6e0a-477e-aa2b-56d6c3e42e91"
  });
</script> */}