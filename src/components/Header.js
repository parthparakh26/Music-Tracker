import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='bg-gray-900 h-20 flex flex-row drop-shadow-md'>

            <div className='py-6 pl-7 font-serif text-white'>
                <span className='font-bold mr-1'>YOURMUSIC</span> tracker
            </div>

            <label className="relative block py-5 ml-96">
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="What do you want to listen to?" type="text" name="search" />
            </label>

            <div className='ml-auto py-4'>
                <Link to="/Signup"><button className='text-white mr-5 font-sans'>Sign up</button></Link>
                <Link to="/Signin"><button className='text-yellow-500 mr-20 px-3 py-2 rounded-md border border-yellow-400 hover:border-yellow-700 font-sans bg-gray-700 hover:bg-yellow-500 hover:text-yellow-700'>Sign in</button></Link>
            </div>

        </div>
    )
}

export default Header