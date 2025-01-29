import React, { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import FooterLogo from '../assets/Footer-Logo.png'
import styles from '../styles/Footer.module.css'


const Footer = () => {
    const container = useRef(null)
    const [openPopup, setOpenPopUp] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
        },
    }

    const handleNewsLetterData = (e) => {
        e.preventDefault()
        const target = e.target
        const formData = new FormData(target)
        const clientEmail = formData.get("newsletter_email")
        setOpenPopUp(true)
        target.reset()
        if (setOpenPopUp) {
        setTimeout(() => {
            setOpenPopUp(false)
        }, 2000)
        }
    }

    // Interactive Line 

    const path = useRef(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId = null;

    useEffect(() => {
        setPath(progress);
    }, [])
    
    const setPath = (progress) => {
        const width = window.innerWidth;
        path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
    }
    
    const lerp = (x, y, a) => x * (1 - a) + y * a
    
    const manageMouseEnter = () => {
        if(reqId){
            cancelAnimationFrame(reqId)
            resetAnimation()
        }
    }
    
    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;
        const pathBound =  path.current.getBoundingClientRect();
        x = (clientX - pathBound.left) / pathBound.width;

        progress+= movementY * 0.5;
        setPath(progress);
    }
    
    const manageMouseLeave = () => {
        animateOut();
    }
    
    const animateOut = () => {
        const newProgress = progress * Math.sin(time * 0.2);
        progress = lerp(progress, 0, 0.025);
        time+=0.2;

        setPath(newProgress);

        if(Math.abs(progress) > 0.75){
            reqId = requestAnimationFrame(animateOut);
        }
        else{
            resetAnimation();
        }
    }
    
    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    }

    return (
        <>
        <div className="relative h-full sm:pt-14 pt-8 bg-[#f47318] text-black min-h-screen px-6 py-16 md:px-12 lg:px-20 overflow-hidden" ref={container}>
            <div className="sm:container px-4 mx-auto">
                <div className="flex md:flex-cols-3 justify-around gap-8 mb-12">

                    {/* Let's do great work together part */}
                    <div className="flex flex-col">
                        <h1 className="md:text-xl text-2xl font-normal mb-4 text-[#e0e0d6]">Let&lsquo;s do great work together</h1>
                        <div className="pt-2 pb-6">
                            <p className="md:text-2xl text-xl py-4">Sign up for our newsletter*</p>
                            <div className="hover-button relative bg-black flex justify-between items-center border-2 overflow-hidden border-black rounded-full text-white hover:text-white md:text-2xl">
                                <form onSubmit={handleNewsLetterData} className="relative z-2 grid grid-cols-6 w-full h-full">
                                    <input
                                    type="email"
                                    name="newsletter_email"
                                    className="border-none bg-transparent py-3 px-6 col-span-5"
                                    placeholder="Your Email *"
                                    />
                                    <button
                                    type="submit"
                                    className="cursor-pointer w-full hover:bg-primaryColor bg-white text-white h-full cols-span-1"
                                    >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        className="w-full h-[80%]"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                        fill="#000"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        />
                                    </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Say hi with email address part */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-xl font-normal mb-4 text-[#e0e0d6]">Say hi</h2>
                        <a href="mailto:mainbackyard@gmail.com" className="text-2xl md:text-4xl font-semibold text-black hover:underline">
                            main.backyard@gmail.com
                        </a>
                    </div>

                    {/* SITEMAP with direction links */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-xl font-normal mb-4 text-[#e0e0d6]">Links</h2>
                        <ul className="space-y-2 flex flex-col items-start">
                            <li className="text-2xl md:text-4xl font-semibold font-medium hover:underline">
                            <Link to="/">Home</Link>
                            </li>
                            <li className="text-2xl md:text-4xl font-semibold font-medium hover:underline">
                            <Link to="/about">About us</Link>
                            </li>
                            <li className="text-2xl md:text-4xl font-semibold font-medium hover:underline">
                            <Link to="/services">Our Services</Link>
                            </li>
                            <li className="text-2xl md:text-4xl font-semibold font-medium hover:underline">
                            <Link to="/contact-us">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Interactive line */}
                <div className="relative -mx-6 md:-mx-12 lg:-mx-20 ">
                    <div className={styles.line}>
                        <div 
                            onMouseEnter={() => {manageMouseEnter()}} 
                            onMouseMove={(e) => {manageMouseMove(e)}} 
                            onMouseLeave={() => {manageMouseLeave()}} 
                            className={styles.box}>
                        </div>
                        <svg className="min-h-screen px-6 md:px-12 lg:px-20 ">
                            <path ref={path}></path>
                        </svg>
                    </div>
                </div>

                {/* Backyard */}
                <div className="md:py-8 py-8">
                    <div className="flex justify-center items-center overflow-hidden">
                    <motion.div
                        className="w-full max-w-4xl"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={imageVariants}
                        ref={ref}
                    >
                        <img
                        src={FooterLogo}
                        alt="Backyard"
                        className="w-full h-auto object-cover"
                        />
                    </motion.div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col gap-6 justify-between items-center py-6">
                    <span className="font-medium order-2 md:order-1">&copy; 2025 Backyard. All Rights Reserved.</span>
                    <a href="#" className="font-semibold order-3">
                    Privacy Policy
                    </a>
                </div>
            </div>
        </div>
        {openPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
                <p className="text-xl font-semibold">Thank you for subscribing!</p>
            </div>
            </div>
        )}
        </>
    )
}

export default Footer

