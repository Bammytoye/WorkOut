import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className=""> 
            <div className='flex items-center justify-between bg-white max-w-[1400px] mx-auto py-3 px-16'>
                <div className='flex items-center'>
                    <Link to='/' className='text-[#333] no-underline'>
                        <h1>Workout Buddy</h1>
                    </Link>
                </div>

                <div className='flex space-x-12 items-center'>
                    <Link to='/Home' className='text-[#333] no-underline hover:underline'>Home</Link>
                    <Link to='/AboutUs' className='text-[#333] no-underline hover:underline'>About Us</Link>
                    <Link to='/Login' className='text-[#333] no-underline hover:underline'>Login</Link>
                    <Link to='/CreateAccount' className='no-underline border rounded-md border-[#1aac83] p-2 bg-[#1aac83] text-white'>Create Account</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar