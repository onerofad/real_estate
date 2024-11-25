import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ProjectPage from "./ProjectPage"
import HeadingPageProjects from "./HeadingPageProjects"

const Projects = () => {

    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <NavBar />
            <HeadingPageProjects  />
            <ProjectPage />
            <Footer />
            

        </Segment>
    )
}
export default Projects