import React from 'react'
import Logo from '../assets/backyard-logo.png'
import ButtonArrow from '../assets/up-arrow.svg'

const Navbar = () => {
    return (
        <header className='bg-[#f47318] px-3 py-9  min-w-screen'>
            <div className='max-w-7xl mx-auto flex items-center justify-between'>

                {/* Call To Action / Button */}
                <div className='w-1/3'>
                    <button className="primary-button space-x-3">
                        <img loading='lazy' src={ButtonArrow} alt="up-right-arrow"/>
                        <span className='text-xl'>Lets Talk</span>
                    </button>
                </div>

                {/* Logo */}
                <div className="w-1/3 flex justify-center">
                    <img src={Logo} className="h-8 w-auto"/>
                </div>

                <div className="w-1/3" />
            </div>
        </header>
    )
}

export default Navbar
