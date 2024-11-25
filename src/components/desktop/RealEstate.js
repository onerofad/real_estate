import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import HeadingPageRealEstate from "./HeadingPageRealEstate"
import Footer from "./Footer"
import RealEstatePage from "./RealEstatePage"

const RealEstate = () => {
    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <NavBar />
            <HeadingPageRealEstate />
            <RealEstatePage />
            <Footer />

        </Segment>
    )
}
export default RealEstate