import React from 'react'
import btnArrow from '../assets/know-more-arrow.svg'
import mockupImage from '../assets/mockup.png'

const IntroductionPage = () => {
    return (
        <div className='bg-[#f47318] min-h-screen px-6 py-16 md:px-12 lg:px-20  '>
            
            <h1 className='font-[600] text-[80px] text-[#e0e0d6] leading-22'>
                Hire artists!, not just developers.
                <br/>
                <span className='font-[400]'>where your vision meets our <br/> creativity</span>
            </h1>
            
            <div className='h-[40px]'></div>

            <p className='text-[30px] text-[#e0e0d6] w-[75%]'>
                Leveraging the power dynamics of artists' perspectives - we have empowered ourselves with no-code web solutions :)
            </p>

            <div className='h-[40px]'></div>

            {/* Call To Action / Button */}
            <div className=''>
                <button className="primary-button space-x-2">
                    <img loading='lazy' src={btnArrow} alt="know-more-arrow"/>
                    <span className='text-xl'>Know More</span>
                </button>
            </div>

            {/* Mockup Image */}
            <div className='flex justify-center items-center w-full'>
                <div className='h-100vh w-full max-w-[1010px] mx-auto'>
                    <img src={mockupImage} className='w-full h-auto object-contain'/>
                </div>
            </div>
        </div>
    )
}

export default IntroductionPage
