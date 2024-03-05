import { Caudex, Inter } from 'next/font/google'


// default at root layout
export const caudex = Caudex({
    subsets: ['latin'],
    weight: ["400", "700"],
    display: 'swap',
})


//define the font wieghts to reduce package size
// add inline className={inter.classname}
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})