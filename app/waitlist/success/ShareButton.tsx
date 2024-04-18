
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerContent, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BlackButton from "@/components/BlackButton";
import { CopyButton, MailButton } from "./ShareButtonUtils";



export default function ShareButton() {
//   const [open, setOpen] = useState(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");


const sharedContent = (
    <>
        <div className="grid gap-4 py-4 text-xl">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="link">
                    Link
                </Label>
                <div className="col-span-3 flex items-center space-x-2">
                    <Input id="link" readOnly value="https://mystory.bio/waitlist" />
                    <CopyButton />
                </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="email">
                    Email
                </Label>
                <div className="col-span-3 flex items-center space-x-2">
                    <Input id="email" placeholder="Enter email address" type="email" />
                    <MailButton />
                </div>
            </div>
        </div>
    </>
);


    return (
        <div>
            <div className="hidden md:flex">
                <Dialog>
                    <DialogTrigger asChild>
                        <BlackButton>Share Link</BlackButton>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Share this link</DialogTitle>
                            <DialogDescription>Copy the link below or send it via email.</DialogDescription>
                        </DialogHeader>
                        {sharedContent}
                        <DialogFooter>
                            {/* <Button variant="ghost">Send via email</Button> */}
                            <DialogClose asChild>
                                <Button className="ml-auto" type="submit">
                                    Done
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="flex md:hidden">
                <Drawer>
                    <DrawerTrigger asChild>
                        <BlackButton>Share Link</BlackButton>
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="text-left">
                            <DrawerTitle>Share this link</DrawerTitle>
                            <DrawerDescription>Copy the link below or send it via email.</DrawerDescription>
                        </DrawerHeader>
                        {sharedContent}
                        <DrawerFooter>
                            {/* <Button variant="ghost">Send via email</Button> */}
                            <DrawerClose>
                                <Button className="ml-auto" type="submit">
                                    Done
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>

        </div>
);

//   if (isDesktop) {
//     return (
//       <Dialog open={open} onOpenChange={setOpen}>
//         <DialogTrigger asChild>
//           <BlackButton>Share Link</BlackButton>
//         </DialogTrigger>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Share this link</DialogTitle>
//             <DialogDescription>Copy the link below or send it via email.</DialogDescription>
//           </DialogHeader>
//           {sharedContent}
//         </DialogContent>
//       </Dialog>
//     );
//   }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <BlackButton>Share Link</BlackButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Share this link</DrawerTitle>
          <DrawerDescription>Copy the link below or send it via email.</DrawerDescription>
        </DrawerHeader>
        {sharedContent}
      </DrawerContent>
    </Drawer>
  );
}






function MailIcon(props: any) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}




function useMediaQuery(arg0: string) {
    throw new Error("Function not implemented.");
}
// === styles.css ===

// :root {
//   --radius: 0.5rem;
// }

// body {
//   font-family: var(--font-caudex), sans-serif;
// }

// h1, h2, h3, h4, h5, h6 {
//   font-family: var(--font-caudex), sans-serif;
// }

// === layout.jsx ===

// // This is the root layout component for your Next.js app.
// // Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Caudex } from 'next/font/google'
// import { Caudex } from 'next/font/google'
// import './styles.css'

// const caudex = Caudex({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-caudex',
// })
// const caudex = Caudex({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-caudex',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={caudex.variable + caudex.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }