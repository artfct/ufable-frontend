import SearchBar from './searchBar/SearchBar'
import googleLogo from '../../../assets/google-marketing-logo.svg'
import userProfileIconImg from '../../../assets/user-profile-icon.png'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={googleLogo} alt='UFable Logo'/>
                <p>UFable</p>
            </div>
            <SearchBar className='searchBar'/>
            <div className='userProfile'>
                <img src={userProfileIconImg} alt='Current logged in username'/>    
                <p>Aesop Fable</p>
            </div>
        </div>
    )
}

export default Navbar
