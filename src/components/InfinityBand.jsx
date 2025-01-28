import React from 'react';
import infinityImage from '../assets/infinity-image.jpg';
import infinitySvg  from '../assets/infinity-icon.svg'

const InfinityBand = () => {
    const textArray = Array(6).fill("Start your journey today");

    return (
        <div className="w-full">
            {/* Infinity Band */}
            <div className="relative w-full h-30 flex items-center overflow-hidden bg-[#f47318] text-white">
                <style>
                    {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 10s linear infinite;
                        display: flex;
                        white-space: nowrap;
                        min-width: 200%;
                    }
                    /* Prevent scrollbars globally */
                    body {
                        overflow-x: hidden;
                    }
                    `}
                </style>

                <div className="animate-scroll">
                    {/* First set of text */}
                    {textArray.map((text, index) => (
                        <span key={index} className="mx-8 text-6xl font-bold flex gap-5">
                            {text}<img src={infinitySvg} />
                        </span>
                    ))}

                    {/* Cloned set of text for seamless looping */}
                    {textArray.map((text, index) => (
                        <span key={`clone-${index}`} className="mx-8 text-6xl font-bold">
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Image Below Infinity Band */}
            <div>
                <img src={infinityImage} className="h-auto w-full" alt="Infinity Band Background" />
            </div>
        </div>
    );
};

export default InfinityBand;
