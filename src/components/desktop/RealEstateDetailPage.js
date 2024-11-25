import { Grid, Segment, Container, Header, Image, Icon, Button, Table } from "semantic-ui-react"

const RealEstateDetailPage = () => {

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
                            Property 1
                        </Header>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Image
                                src="../images/carousel/carousel1.jpg"
                            />

                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Header as="h4" 
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 'normal'
                                }}
                            >
                                <Icon name="calendar outline" />
                                <Header.Content>
                                    April 12, 2022
                                </Header.Content>
                            </Header>

                            <Header as="h5" 
                                disabled
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 'normal'
                                }}
                            >
                                <Header.Content>
                                    2200 sq ft&nbsp;&nbsp;&nbsp;  .  4 bedrooms&nbsp;&nbsp;&nbsp;  .  3 bathrooms
                                </Header.Content>
                            </Header>
                            <Header 
                                as="h2"
                                style={{
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold'
                                }}
                            >
                                200,000 Naira
                            </Header>
                            <p>
                                <Button 
                                    size="large" 
                                    color="green"
                                    style={{
                                        fontFamily: 'Arvo',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </p>
                            <p>
                                <Button 
                                    size="large" 
                                    color="teal"
                                    style={{
                                        fontFamily: 'Arvo',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Request a Visit
                                </Button>
                            </p>
                           
                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{paddingTop: 20}}>
                        <Grid.Column width={10}>
                            <Header 
                                as="h4"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'bold',
                                    fontSize: 18
                                }}
                            >
                                Description
                            </Header>
                            <p
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    display: 'block'
                                }}
                            >
                                The Presidio Residences offer a unique opportunity to live in a national park setting and enjoy quiet neighborhoods, convenient location, beautiful open spaces, and outstanding recreational amenities that you won’t find anywhere else in the area.
                            </p>
                            <p
                                style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    display: 'block'
                                }}
                            >
                                This property includes a wide variety of facilities that can make your dwelling in the picturesque area of Southern Los Angeles very comfortable. There is everything modern citizen may need, even the most up-to-date technologies that are organically integrated with all the communications of the house. If you are looking for a calm place to live, the Presidential Residences have something to offer you. With effective planning and additional amenities available as a part of the property, these apartments can give you an unprecedented level of comfort with a quick access to the airport, train station, and the city center.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1793595060794!2d5.634239607838357!3d6.240076593722137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3ebae0804c1%3A0x5af0bf6e8252bc4!2sBenin%20Sapele%20Rd%2C%20Benin%20City%2C%20Edo!5e0!3m2!1sen!2sng!4v1732523931098!5m2!1sen!2sng" 
                                style={{
                                    width: '100%', 
                                    height: '100%', 
                                    border:0
                                }} 
                                allowfullscreen="" loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Table 
                                basic="very" 
                                striped
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 12,
                                    fontWeight: 'normal'
                                }}
                            
                            >
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            Property details	
                                        </Table.Cell>
                                        <Table.Cell>
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Features	
                                        </Table.Cell>
                                        <Table.Cell>
                                            Lawn, Sprinkler System, Marble Floors
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            MLS Listing ID
	                                    </Table.Cell>
                                        <Table.Cell>
                                            12345678
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Year Built		
                                        </Table.Cell>
                                        <Table.Cell>
                                            1868
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Lot Size		
                                        </Table.Cell>
                                        <Table.Cell>
                                            5.45
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>
                                            Parking Type		
                                        </Table.Cell>
                                        <Table.Cell>
                                            Garage - Attached
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            
                            </Table>
                        </Grid.Column>
                        <Grid.Column width={6} verticalAlign="bottom">
                            <Image src="../images/team/team1.jpg" 
                                size='tiny' 
                                floated='left' 
                            />
                            <Header 
                                as="h4" 
                                color="green"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 20,
                                    forntWeight: 'bold'
                                }}
                            >
                                John Doe                            
                            </Header>
                            <Header 
                                as="h6" 
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 14,
                                    fontWeight: 'normal'
                                }}
                            >
                                <Icon name="phone" size="tiny" />
                                08080000000                            
                            </Header>
                                <Header 
                                as="h6" 
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 14,
                                    fontWeight: 'normal'
                                }}
                            >
                                <Icon name="mail" size="tiny" />
                                info@sycomore.com                            
                            </Header>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </Segment>
    )
}
export default RealEstateDetailPage