import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import Lenis from 'lenis';
import Lenis from "@studio-freight/lenis"
import Picture1 from '../assets/1.jpg';
import Picture2 from '../assets/2.jpg';
import Picture3 from '../assets/3.jpg';

// Data array for the bands
const bandsData = [
    {
        text: "Brand Design",
        bgColor: "bg-[#FF4F5A]",
        image: Picture1,
        direction: "left",
        position: "-10%",
        isRight: false
    },
    {
        text: "Website Development",
        bgColor: "bg-[#FF9F1C]",
        image: Picture2,
        direction: "right",
        position: "75%",
        isRight: true
    },
    {
        text: "UI/UX Design",
        bgColor: "bg-[#5F0F40]",
        image: Picture3,
        direction: "left",
        position: "-10%",
        isRight: false
    }
];

const Slide = ({ direction, progress, left, right, src, text, bgColor }) => {
    const directionValue = direction === 'left' ? -1 : 1;
    const translateX = useTransform(progress, [0, 1], [150 * directionValue, -150 * directionValue]);
    
    const style = {
        x: translateX,
        ...(left ? { left } : {}),
        ...(right ? { right } : {})
    };

    return (
        <motion.div 
            style={style}
            className="relative flex whitespace-nowrap"
        >
            <Phrase src={src} text={text} bgColor={bgColor} />
            <Phrase src={src} text={text} bgColor={bgColor} />
            <Phrase src={src} text={text} bgColor={bgColor} />
        </motion.div>
    );
};

const Phrase = ({ src, text, bgColor }) => {
    return (
        <div className={`w-full px-5 flex gap-5 items-center ${bgColor} py-3 -mx-[1px]`}>
            <p className="text-[5vw] text-white font-semibold">{text}</p>
            <div className="relative h-[5vw] aspect-[4/2] rounded-full overflow-hidden">
                <img 
                    src={src} 
                    className="w-full h-full object-cover"
                    alt="Developer" 
                />
            </div>
        </div>
    );
};

const OurWorkScrollBand = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="overflow-hidden">
            <div ref={container} className="relative">
                {bandsData.map((band, index) => (
                    <Slide 
                        key={index}
                        src={band.image}
                        direction={band.direction}
                        left={!band.isRight ? band.position : undefined}
                        right={band.isRight ? band.position : undefined}
                        progress={scrollYProgress}
                        text={band.text}
                        bgColor={band.bgColor}
                    />
                ))}
            </div>
        </main>
    );
};

export default OurWorkScrollBand;