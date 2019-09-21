import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Card } from 'react-bootstrap';
import "circular-std";
import './dashboard.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand href="#home"><img src={require('./logo.png')} height="24" width="24"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Community">Community</Nav.Link>
                            <Nav.Link href="#MentalHealth">Mental Health</Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown" className="ProfileDrop">
                                <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Cards />
            </div>
        )
    }
};

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Ankit Bando', title: 'Hello VIT', body: 'sample message herer jadsjfjasd fjadsf.' },
                { name: 'Ankit Bando', title: 'Hello VIT', body: 'sample message herer jadsjfjasd fjadsf.' },
                { name: 'Ankit Bando', title: 'Hello VIT', body: 'sample message herer jadsjfjasd fjadsf.' },
            ]
        }
    }
    renderCards() {
        return this.state.students.map((student, index) => {
            const { name, title, body } = student;
            return (
                <Card style={{ width: '25rem', margin: '1rem' }}>
                    <Card.Body>
                        <Card.Title>{ name }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ title }</Card.Subtitle>
                        <Card.Text>
                            { body }
                        </Card.Text>
                        <Card.Link href="#">Like</Card.Link>
                    </Card.Body>
                </Card>
            )
        })
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="span4 pull-right">
                        {this.renderCards()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;