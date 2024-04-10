import React from 'react'
import { Link } from 'react-router-dom'
import { useLogOut } from '../hooks/UseLogOut'

const Navbar = () => {
    const { logOut } = useLogOut()

    const handleClick = () => {
        logOut()
    }

    return (
        <header> 
            <div className='flex items-center justify-between bg-white max-w-[1400px] mx-auto py-3 px-16 shadow-lg'>
                <div className='flex items-center'>
                    <Link to='/' className='text-[#333] no-underline'>
                        <h1>Workout Buddy</h1>
                    </Link>
                </div>

                <div className='flex space-x-12 items-center'>
                    <Link to='/home' className='text-gray-800 hover:text-gray-400 '>Home</Link>
                    <Link to='/aboutUs' className='text-gray-800 hover:text-gray-400 '>About Us</Link>
                    <Link to='/login' className='text-gray-800 hover:text-gray-400 '>Login</Link>
                    <Link to='/signup' className='border-r-2 border-l-2 rounded-md border-[#1aac83] px-2'>Sign Up</Link>
                    
                    <button 
                        onClick={handleClick}
                        className='bg-green-800 text-white p-2 rounded-lg font-bold border'
                    >
                        Log out
                    </button>
                </div>                
            </div>
        </header>
    )
}

export default Navbar