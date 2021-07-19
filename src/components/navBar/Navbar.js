import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>   
                <NavbarContainer>
                    <NavLogo to="/">UFable</NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                About
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="data">
                                Data
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="signup">
                                Sign Up
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact">
                                Contact
                            </NavLinks>
                        </NavItem>

                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
