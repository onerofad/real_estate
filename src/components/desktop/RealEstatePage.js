import { Link } from "react-router-dom"
import { Container, Grid, Header, Segment, Image, Pagination } from "semantic-ui-react"

const RealEstatePage = () => {
    return(
        <Segment vertical style={{padding: 50}}>
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
                                Our Properties For Sale
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 1 Begins */}
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel1.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="Property 1" 
                                        as="h4"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    >
                                        <Link style={{color:'green'}} 
                                                to="/realestate_details"
                                        >
                                            Property 1   
                                        </Link>
                                    </Header>
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    /> 
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel2.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 2" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel3.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 3" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 1 Ends */}
                    
                    {/* Row 2 Begins */}
                    <Grid.Row>
                        <Grid.Column>
                            <Grid columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel1.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="Property 4" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    /> 
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel2.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 5" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel3.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 6" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 2 Ends */}

                     {/* Row 3 Begins */}
                     <Grid.Row>
                        <Grid.Column>
                            <Grid columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel1.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="Property 7" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    /> 
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel2.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 8" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/carousel/carousel3.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Property 9" 
                                        as="h4"
                                        color="green"
                                        style={{
                                            fontFamily: 'Bebas Neue',
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header
                                        as="h5"
                                        content="Ibeju Lekki"
                                        style={{
                                            fontFamily: 'Arvo',
                                            fontSize: 18,
                                            fontWeight: 'bold',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />
                                    <Header 
                                        as="h6"
                                        content="AVA Nob Hill includes studios and 1 and 2 bedroom apartments that feature an urban-inspired design that extends beyond your walls and throughout the entire community."
                                        style={{
                                            fontFamily: 'Roboto',
                                            fontSize: 14,
                                            fontWeight: 'normal',
                                            margin: 10,
                                            marginLeft: 0

                                        }}
                                    />        
                                </Grid.Column>

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 3 Ends */}

                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column textAlign="center">
                            <Pagination
                                  boundaryRange={0}
                                  defaultActivePage={1}
                                  ellipsisItem={null}
                                  firstItem={null}
                                  lastItem={null}
                                  siblingRange={1}
                                  totalPages={10}
                            />
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </Container>
        </Segment>

    )
}
export default RealEstatePage