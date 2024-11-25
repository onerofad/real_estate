import { Segment, } from "semantic-ui-react"
import '../../fonts/BebasNeue-Regular.ttf'
import HeadingPage from "./HeadingPage"
import Footer from "./Footer"
import NavBar from "./NavBar"
import Overview from "./Overview"
import RecentProjects from "./RecentProjects"
import TeamMembers from "./TeamManagers"
import GetInTouch from "./GetInTouch"

const Home = () => {

    return(
      
            <Segment vertical style={{margin: 0, padding: 0}}>
                <NavBar />
                <HeadingPage />
                <Overview />
                <RecentProjects />
                <TeamMembers />
                <GetInTouch />
                <Footer />
            </Segment>
    )
}
export default Home