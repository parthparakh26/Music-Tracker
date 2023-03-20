import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import backgroundimage from '../assets/img/bg-track.jpeg'

const Tracks = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='relative'>
                <div style={{ backgroundImage: `url(${backgroundimage})` }} className='absolute top-0 left-0 w-full h-full bg-center bg-cover z-0' />
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-10' />
                <div className='flex flex-row relative z-20'>
                    <Sidebar />
                    <form className='mx-auto mt-20 flex flex-col'>
                        <div className='font-mono mx-auto text-white text-3xl mb-10'>Upload your track</div>
                        <div className='flex flex-row space-x-24'>
                            <div>
                                <label className='font-mono text-white'>Track Title </label>
                                <input className='h-6' required></input>
                            </div>
                            <div>
                                <label className='font-mono text-white'>Track Artist </label>
                                <input className='h-6' required></input>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className='font-mono text-white'>Album Art </label>
                            <input type='file' accept="image/*" className='h-6 text-white p-8' required></input>
                        </div>
                        <div className='mt-5'>
                            <label className='font-mono text-white mr-2'>Mp3 file </label>
                            <input type='file' accept="audio/*" className='h-6 text-white p-8' required></input>
                        </div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-gray-700 hover:bg-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10">
                            Upload
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Tracks
