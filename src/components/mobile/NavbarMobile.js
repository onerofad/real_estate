import { useState } from "react"
import { Sidebar, Menu, Container, Image, Header, Segment, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import HeadingPage from "../desktop/HeadingPage"
import Overview from "../desktop/Overview"
import RecentProjects from "../desktop/RecentProjects"
import TeamMembers from "../desktop/TeamManagers"
import GetInTouch from "../desktop/GetInTouch"
import Footer from "../desktop/Footer"

const NavbarMobile = () => {

    const [ sidebarOpened, setSidebarOpened ] = useState()

    return(
        <>
        <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            inverted
            onHide={() => setSidebarOpened(false)}
            visible={sidebarOpened}          
            >
              
                <Menu.Item as='a' active>
                    Home
                </Menu.Item>
                <Menu.Item as='a' pointing>
                    About
                </Menu.Item>
                <Menu.Item as='a'>
                    Projects
                </Menu.Item>
                <Menu.Item as='a'>
                    Services
                </Menu.Item>
                <Menu.Item as='a'>
                    Real Estate
                </Menu.Item>
                <Menu.Item as='a'>
                    Contact
                </Menu.Item>
           

            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment
                 textAlign='center'
                 vertical
                >
                    <Menu
                     fixed='top'
                     size="huge"
                     secondary
                     style={{backgroundColor: '#FFFFFF'}}           
                    >
                        <Container>
                            <Image
                                src="../images/logo.png" 
                                size="tiny"
                                inline
                                fluid
                                style={{
                                    margin: 0
                                }}
                            />
                            <Header
                                style={{
                                    fontFamily: "Bebas Neue",
                                    fontSize: 20,
                                    fontWeight: 'normal'
                                }}
                                color="green"
                            >
                                SYCAMORE CONSTRUCT
                            </Header> 
                            <Menu.Item  position="right" onClick={() => setSidebarOpened(true)}>
                                <Icon size="large" name="sidebar" />
                            </Menu.Item>            
                        </Container>
                    </Menu>
                    <HeadingPage />
                </Segment>
                    <Overview />
                    <RecentProjects />
                    <TeamMembers />
                    <GetInTouch />
                    <Footer />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </>
              
    )

}

export default NavbarMobile