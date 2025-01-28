import React, { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import { Capabilities } from './Capabilities'

const CapabilitiesCards = ({ title, description, image, backgroundColor }) => {

    return (
        
        <section style={{ backgroundColor }} className='w-full'>
            <div className='flex justify-center py-16'>
                {/* Card Text */}
                <div className='w-1/2 pr-8'>
                    <h1 className='font-normal text-5xl text-[#e0e0d6] mb-4'>
                        {title}
                    </h1>
                    <p className='text-lg'>
                        {description}
                    </p>
                </div>

                {/* Card Image */}
                <figure className='h-80 w-1/3'>
                    <img loading='lazy' src={image} className='h-full w-full rounded-xl object-cover' />
                </figure>
            </div>
        </section>
        
    );
};

const CapabilitiesCarousel = () => {

    return (
        <ReactLenis root>
        <main className='relative'>
            {Capabilities.map((capability, index) => (
                <CapabilitiesCards key={capability.id} {...capability} />
            ))}
        </main>
        </ReactLenis>
    )
}

export default CapabilitiesCarousel
