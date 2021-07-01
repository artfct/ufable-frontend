import React from "react"
import SearchBar from './searchBar/SearchBar'
import googleLogo from '../../../assets/google-marketing-logo.svg'
import userProfileIconImg from '../../../assets/user-profile-icon.png'
import './Navbar.css'

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state={
            show: true,
            scrollPos: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        // console.log(document.body.getBoundingClientRect())
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            // show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }

    render () {
        return (
            <nav className='navbar'>
                <div className='logo'>
                    <img src={googleLogo} alt='UFable Logo'/>
                    <p>UFable</p>
                </div>
                <SearchBar className='searchBar'/>
                <div className='userProfile'>
                    <img src={userProfileIconImg} alt='Current logged in username'/>    
                    <p>Aesop Fable</p>
                </div>
            </nav>
        )
    }
}
