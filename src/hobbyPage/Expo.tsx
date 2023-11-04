import {FunctionComponent} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

interface ExpoProps {

}

const Expo: FunctionComponent<ExpoProps> = () => {
    const items = [
        {id:101, city:'shanghai', country:'China'},
        {id:102, city:'milaan', country:'Italy'},
        {id:103, city:'dubai', country:'Emirates'},
        {id:104, city:'osaka', country:'Japan'},
    ]

    return (
        <>
            <h2>World Expo</h2>
            <p>Op een wereldtentoonstelling stelt elke land zichzelf voor op toeristisch gebied, wat het economisch de rest
                van de wereld te bieden heeft, en de ralatie tot het thema van deze wereldtentoonstelling.
                Ik probeer geen enkele editie te missen. Wist je dat de laatste expo in Belgie in Brussel was in 1958 ? </p>


            <Container>
                <Row>
                    {items.map(item  => <Col key={item.id}> <Card style={{width: '12rem'}}>
                        <Card.Img variant="top" src={item.city + ".jpg"}/>
                        <Card.Body>
                            <Card.Title>{item.city}</Card.Title>
                            <Card.Text>
                                {item.country}
                            </Card.Text>
                        </Card.Body>
                    </Card> </Col>)}
                </Row>
            </Container>
        </>
    )
}

export default Expo
