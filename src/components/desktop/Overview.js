import { Container, Grid, Header, Segment } from "semantic-ui-react"


const Overview = () => {
    return(
        <Segment vertical style={{backgroundColor: '#f6f6f6', padding: 50}}>
            <Container>
                <Grid>
                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column>
                            <Header 
                                as="h4"
                                textAlign="center"
                                attached="bottom"
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}
                            >
                                Overview
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <iframe style={{width: '100%', height: 200}} 
                                    src="https://www.youtube.com/embed/0BcuKO9gPmk?si=u--cd7znUJK5njyN" title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; 
                                    clipboard-write; encrypted-media; gyroscope; 
                                    picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                            </iframe>
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <p style={{
                                fontFamily: 'Arvo',
                                fontWeight: 'normal',
                                fontSize: 14,
                                display: 'block'
                            }}>
                                mmovables is a national Real 
                                Estate Agency established in 
                                2006 in Los Angeles. Our company 
                                was initially designed to help 
                                people who are looking for a 
                                rental or an apartment for sale. 
                                Today we provide video 
                                demonstrations of millions of 
                                apartments and houses across the 
                                country as well as free access to 
                            </p>
                            <p style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    display: 'block'
                                }}
                            
                            >
                                our database for our clients. 
                                Awarded with “the Most Innovative 
                                Real Estate Agency” prize in 2012, 
                                Immovables strives to make your housing 
                                experience as comfortable as it can be. 
                                We care about our clients and help 
                                them get the most money and comfort out 
                                of their purchases. Moreover, the area of 
                                our operation covers many states of the 
                                country, so you can be sure you will find 
                                the proper house.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}
export default Overview