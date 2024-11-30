import { Container, Grid, Segment, Header, Form, Button } from "semantic-ui-react"

const GetInTouch = () => {

    return(
        <Segment vertical style={{paddingTop: 50}} id="form_template">
            <Container>
                <Grid stackable textAlign="center">
                    <Grid.Row style={{paddingTop: 50}}>
                        <Grid.Column>
                            <Header
                                as="h4"
                                textAlign="center"
                                inverted
                                style={{
                                    fontFamily: 'AGRESSIVE',
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}
                            >
                                Get In Touch
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column style={{ maxWidth: 600 }}>
                            <Form size="large">
                                <Form.Group>
                                    <Form.Input
                                        transparent
                                        placeholder="First Name"
                                        width={8}
                                        style={{
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            width: '100%',
                                            height: '40px',
                                            borderRadius: 5

                                        }}
                                    />
                                    <Form.Input
                                        transparent
                                        placeholder="Last Name"
                                        width={8}
                                            style={{
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            width: '100%',
                                            height: '40px',
                                            borderRadius: 5

                                        }}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        transparent
                                        placeholder="Phone"
                                        width={8}
                                            style={{
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            width: '100%',
                                            height: '40px',
                                            borderRadius: 5

                                        }}
                                    />
                                    <Form.Input
                                        transparent
                                        placeholder="Email"
                                        width={8}
                                            style={{
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            width: '100%',
                                            height: '40px',
                                            borderRadius: 5

                                        }}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Input
                                        transparent
                                        placeholder="message"
                                        width={16}
                                            style={{
                                            borderColor: '#fff',
                                            borderWidth: 1,
                                            borderStyle: 'solid',
                                            width: '100%',
                                            height: '100px',
                                            borderRadius: 5

                                        }}
                                    />        
                                </Form.Group>     
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ padding: 50 }}>
                        <Grid.Column>
                            <Button 
                                size="large" 
                                color="green"
                                style={{
                                    fontFamily: 'Arvo',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                                >
                                    SEND MESSAGE
                                </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>

    )
}
export default GetInTouch