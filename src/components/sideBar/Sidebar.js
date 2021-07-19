import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SideBarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="about">
                        About
                    </SidebarLink>

                    <SidebarLink to="data">
                        Data
                    </SidebarLink>
                    
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>

                    <SidebarLink to="contact">
                        Contact
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/signin">
                        Sign In
                    </SidebarRoute>

                </SideBtnWrap>

            </SidebarWrapper>


        </SidebarContainer>
    )
}

export default Sidebar
