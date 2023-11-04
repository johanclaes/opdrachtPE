import {FunctionComponent} from 'react'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'
import {Nav, Navbar} from 'react-bootstrap'

interface NavigationProps {

}

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
            <Container fluid>
                <LinkContainer to={'/'}>
                    <Navbar.Brand>Portfolio JC</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to={'/'}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/ervaring'}>
                            <Nav.Link>Ervaring</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/hobby'}>
                            <Nav.Link>Hobby</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>

    )
}

export default Navigation
