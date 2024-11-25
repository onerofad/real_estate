import { Segment } from "semantic-ui-react"
import NavBar from "./NavBar"
import HeadingPageRealEstateDetails from "./HeadingPageRealEstateDetails"
import Footer from "./Footer"
import RealEstateDetailPage from "./RealEstateDetailPage"


const RealEstateDetail = () => {
    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <NavBar />
            <HeadingPageRealEstateDetails />
            <RealEstateDetailPage />
            <Footer />
            

        </Segment>

    )
}
export default RealEstateDetail