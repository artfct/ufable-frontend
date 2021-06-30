import React from 'react'
import SearchBar from './searchBar/SearchBar'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='' alt="Ufable Logo" />
            </div>
            <SearchBar />
            <div className='userProfile'>
                <img src='' alt='User Profile Picture' />
                <p>Aesop Fable</p>
            </div>
        </div>
    )
}

export default Navbar
