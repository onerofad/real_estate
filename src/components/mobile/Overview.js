import { Container, Grid, Header, Segment, Embed } from "semantic-ui-react"


const Overview = () => {
    return(
        <Segment vertical style={{backgroundColor: '#f6f6f6', padding: 20}}>
                <Grid stackable>
                    <Grid.Row style={{padding: 20}}>
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
                            <Embed
                                source="https://www.youtube.com/embed/0BcuKO9gPmk?si=u--cd7znUJK5njyN"
                            />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <p style={{
                                fontFamily: 'Arvo',
                                fontWeight: 'normal',
                                fontSize: 14,
                                display: 'block'
                            }}>
                                We are a team of young, passionate and experienced 
                                professionals who are looking to offer wide range of 
                                Engineering Services to our Clients and to ensure that they get
                                value for their money 
                            </p>
                            <p style={{
                                    fontFamily: 'Arvo',
                                    fontWeight: 'normal',
                                    fontSize: 14,
                                    display: 'block'
                                }}
                            
                            >
                                This company was registered under Corporate Affairs
                                Commission in 20 and its founders have gathered vast
                                experience from working with different companies in Nigeria in 
                                the past 10 years. Because we love what we do, we do it seamlessly without 
                                struggle. Our previous jobs executed speak volumes and our clients are 
                                rest assured with their projects in our care
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
    )
}
export default Overview