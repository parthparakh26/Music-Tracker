import { React, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import backgroundimage from '../assets/img/bg-playlist.jpg'
import Select from "react-select";


const Playlists = () => {

    // React state to manage selected options
    const [selectedOptions, setSelectedOptions] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    // Array of all options
    const optionList = [
        { value: "red", label: "Red" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
        { value: "blue", label: "Blue" },
        { value: "blue", label: "Blue" },
        { value: "blue", label: "Blue" },
        { value: "white", label: "White" }
    ];

    // Function triggered on selection
    function handleSelect(data) {
        setSelectedOptions(data);
        console.log(data);
    }

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
                    <form className='mx-auto mt-20 flex flex-col' onSubmit={handleSubmit}>
                        <div className='font-mono mx-auto text-white text-3xl mb-10'>Create your Playlist</div>
                        <label className='font-mono text-white'>Playlist Name </label>
                        <input className='h-6' required></input>
                        <h2 className='font-mono text-white mt-5'>Choose your track</h2>
                        <Select
                            options={optionList}
                            placeholder="Select track"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                        />
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-gray-700 hover:bg-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 mt-10"
                            disabled={!selectedOptions || !selectedOptions.length}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Playlists
