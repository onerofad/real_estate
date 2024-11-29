import { Container, Grid, Header, Segment, Image, Button } from "semantic-ui-react"

const RecentProjects = () => {
    return(
        <Segment vertical style={{padding: 50}}>
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
                                Recent Projects
                            </Header>

                        </Grid.Column>
                    </Grid.Row>
                    {/* Row 1 Begins */}
                    <Grid.Row>
                        <Grid.Column>
                            <Grid stackable columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project1.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="ABAT Project." 
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
                                        content="Bourdillon, Ikoyi-Lagos."
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
                                        content="Supervision of ABAT Project, Bourdillon, Ikoyi-Lagos."
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
                                        src="../images/project/project15.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                     <Header 
                                        content="Underground sewage tank" 
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
                                        content="Lekki Lagos"
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
                                        content="Cast pile cap and underground sewage tank ready to be sunk. 1 bedroom studio 
apartment at Lekki"
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
                                        src="../images/project/project2.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                     <Header 
                                        content="12-storey Vita Tower" 
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
                                        content="Kofo-Abayomi Street, V.I-Lagos"
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
                                        content=" Supervision of 12-storey Vita Towers at Kofo-Abayomi Street, V.I-Lagos. Contractor – DTV"
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
                            <Grid stackable columns={3}>
                                <Grid.Column>
                                    <Image 
                                        fluid
                                        src="../images/project/project18.jpg" 
                                        centered
                                        size="large"
                                        bordered
                                    />
                                    <Header 
                                        content="Medina Estate" 
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
                                        content="Gbagada Lagos"
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
                                        content="Development standing of 82 nos pile foundation at Medina Estate, Gbagada-Lagos"
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
                                        src="../images/project/project9.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Project 5" 
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
                                        src="../images/project/project11.jpg" 
                                        centered
                                        size="large"
                                    />
                                     <Header 
                                        content="Project 6" 
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

                    <Grid.Row style={{padding: 50}}>
                        <Grid.Column textAlign="center">
                            <Button 
                                color="green"
                                size="large"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                VIEW ALL PROJECTS
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
        </Segment>

    )
}
export default RecentProjects