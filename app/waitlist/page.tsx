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
        <div className="flex flex-col-reverse sm:flex-row h-screen overflow-hidden">

            {/* Image Section */}
            <div className="hidden sm:flex sm:h-full sm:w-1/2 relative">
    <Image
        src={img}
        alt="MyStory image holding hands"
        layout="fill"  // Ensures the image covers the available space
        objectFit="cover"  // Adjust the fit of the image within the container
    />
</div>


            {/* Text Section */}
            <div className="flex flex-1 flex-col items-center sm:items-start justify-center bg-secondary p-8 h-2/3 sm:h-auto sm:w-1/2">
                {/* Logo */}
                <Link href={"/"} className='transition-all duration-500 hover:opacity-70 hidden sm:block'>
                    <Image
                        src={logo}
                        alt="logo" 
                        height={65}
                    />
                </Link>
                {/* Title & Subtitle */}
                <div className="w-full h-full max-w-md mx-auto sm:gap-10 gap-3 sm:pt-0 text-left flex flex-col sm:justify-center items-center sm:items-start">
                    <div className="text-gray-800 w-full px-4 py-5 sm:p-6">
                        <div className="text-left">
                            <h2 className="font-bold text-4xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
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
            </div>

        </div>
    )
}
export default Page;





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