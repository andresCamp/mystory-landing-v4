import React from 'react'
// import MissionCard from '../components/MissionCard'
import CuevaManos from '@/public/MissionImages/CuevaManos.png'
import Napoleon from '@/public/MissionImages/Napoleon.png'
import Earthrise from '@/public/MissionImages/Earthrise.png'
import TornPhoto from '@/public/MissionImages/TornPhoto.png'


const page = () => {
    return (
        <div className="relative h-screen bg-black flex-col snap-y snap-mandatory scroll-smooth overflow-y-auto ">
            <section className="snap-start shrink-0">
                <MissionCard
                title="The next paradigm in human connection | is storytelling"
                description=""
                delay={0}
                />
            </section>


            <section className="snap-start shrink-0">
                <MissionCard
                    title="Storytelling is in our blood"
                    description="Cueva de las Manos, Argentina (~7,300 BCE)"
                    image={CuevaManos}  
                />
            </section>

            <section className="snap-start shrink-0">
                <MissionCard
                title="Politicians and celebrities are immortalized | in History"
                description="Napoleon crossing the Alps (1805)"
                image={Napoleon}
                />
            </section>

            <section className="snap-start shrink-0">
                <MissionCard
                title="For most of us, our stories are lost to time | within two generations"
                description="Unidentified Family (circa 1900)"
                image={TornPhoto}
                />
            </section>
            <section className="snap-start shrink-0">
                <MissionCard
                title="MyStory is for everyone"
                description="Earthrise, Apollo 8 (1968)"
                image={Earthrise}
                />
            </section>
        </div>
    )   
}

export default page






import Image, { StaticImageData } from 'next/image';
import MissionCardTitle from '@/components/MissionCardTitle'

interface MissionCardProps {
    title: string;
    description: string;
    image?: StaticImageData;
    delay?: number;
    }

const MissionCard: React.FC<MissionCardProps> = ({title, description, image, delay}) => {

    const titleParts = title.split('|').map((part, index) => (
        <div className="leading-relaxed sm:leading-tight" key={index}>
            <span>
                {part}
                {index < title.split('|').length - 1 && <br />}
            </span>
        </div>
    ));


    return (

        <div className="relative flex items-center justify-center h-screen w-screen bg-black p-2">
            {image && (
                        <Image
                        src={image}
                        fill
                        sizes="100vw"
                        placeholder='blur'
                        style={{
                          objectFit: 'cover',
                        }}            
                        alt="Description of image"
                    />
            )}
            <MissionCardTitle title={titleParts} delay={delay} />
            <h3 className='absolute bottom-0 sm:right-0 text-stone-400 m-24 w-2/3 sm:w-auto  text-center sm:m-12 text-lg z-10'>{description}</h3>
        </div>
  )
}




