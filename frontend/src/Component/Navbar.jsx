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
                    <Link to='/Home' className='text-gray-800 hover:text-gray-400 '>Home</Link>
                    <Link to='/AboutUs' className='text-gray-800 hover:text-gray-400 '>About Us</Link>
                    <Link to='/Login' className='text-gray-800 hover:text-gray-400 '>Login</Link>
                    <Link to='/CreateAccount' className='border-r-2 border-l-2 rounded-md border-[#1aac83] px-2'>Sign In</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar