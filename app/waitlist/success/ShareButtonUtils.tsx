'use client'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import React, { useEffect, useState } from 'react'




















export const CopyButton = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    
      useEffect(() => {
        if (copySuccess) {
          const timer = setTimeout(() => setCopySuccess(false), 2000); // Reset icon after 2 seconds
          return () => clearTimeout(timer);
        }
      }, [copySuccess]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("https://mystory.bio/waitlist");
            setCopySuccess(true);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <TooltipProvider>
            
            <Tooltip>
                <TooltipTrigger asChild> 

                        {copySuccess ?  
                            <div className='flex flex-row gap-1'>
                                <CheckIcon className="h-5 w-5" /> 
                                <p>
                                    Copied!
                                </p>
                            </div>

                        :
                            <Button variant="ghost" onClick={handleCopy}>
                                <CopyIcon className="h-5 w-5" />
                            </Button>
                        }       

                    </TooltipTrigger>
                <TooltipContent>{copySuccess ? 'Copied!' : 'Copy Link'}</TooltipContent> 
            </Tooltip>

        </TooltipProvider>
    )
}





export const MailButton = () => {
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        if (copySuccess) {
            const timer = setTimeout(() => setCopySuccess(false), 2000); // Reset icon after 2 seconds
            return () => clearTimeout(timer);
        }
    }, [copySuccess]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("https://mystory.bio/waitlist");
            setCopySuccess(true);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild> 
                        {copySuccess ? 
                        
                            <div className='flex flex-row gap-1'>
                                <CheckIcon className="h-5 w-5" /> 
                                <p>
                                    Sent!
                                </p>
                            </div>
                            
                        :
                            <Button variant="ghost" onClick={handleCopy}>
                                <MailIcon className="h-5 w-5" />
                            </Button>
                        }       
                    </TooltipTrigger>
                <TooltipContent>Send via Email</TooltipContent> 
            </Tooltip>
        </TooltipProvider>
     )
}




function CheckIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>

    )
}

  function CopyIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
    )
  }


function MailIcon(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      
    )
}

  