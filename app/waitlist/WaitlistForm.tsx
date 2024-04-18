'use client'
import React, { FormEvent, useState } from 'react';
import { waitlistSignUp } from '@/lib/hubspot'
import { useFormState } from 'react-dom';
import BlackButton from '@/components/BlackButton';
import { useRouter } from 'next/navigation';

const WaitlistForm = () => {
    const [message, formAction] = useFormState(waitlistSignUp, null)


    const router = useRouter(); // Initialize the useRouter hook

    if(message === "true") {
    router.push('/waitlist/success');
    }

return (
    <div className="relative font-questrial text-lg w-full max-w-lg mx-auto sm:max-w-md">

        <form action={formAction} className="flex flex-col gap-4">
            <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First Name"
                required
                className="text-black font-normal px-3 py-4 rounded-2xl ring-1 ring-gray-300 focus:ring-primary-300 focus:ring-2 outline-none transition duration-200 ease-in-out"
            />
            <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
                required
                className="text-black font-normal px-3 py-4 rounded-2xl ring-1 ring-gray-300 focus:ring-primary-300 focus:ring-2 outline-none transition duration-200 ease-in-out"
            />
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="text-black font-normal px-3 py-4 rounded-2xl ring-1 ring-gray-300 focus:ring-primary-300 focus:ring-2 outline-none transition duration-200 ease-in-out"
            />
            <textarea
                id="why_join_our_waitlist_"
                name="why_join_our_waitlist_"
                placeholder="Tell us why capturing your story is important to you."
                required
                className="text-black font-normal h-40 px-3 py-4 rounded-2xl ring-1 ring-gray-300 focus:ring-primary-300 focus:ring-2 outline-none transition duration-200 ease-in-out"
            ></textarea>
            <BlackButton type="submit">Submit</BlackButton>
        </form>
        <p className="relative text-[#979693] font-syne font-normal mt-2 bottom-0 left-0">{message}</p>
    </div>
);
};

export default WaitlistForm;
