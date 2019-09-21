import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Card, Container, Row, Col } from 'react-bootstrap';
import "circular-std";
import './dashboard.css';

const user = "Aman";
const author1 = "Ananya Mishra";
const author2 = "Karthik Narayan";
const classOfAuthor1 = "VII A";
const title2 = "In your heart";
const body2 = "He was so proud of his little girl. It was her very first day of school. He walked with her to school that day. And she held his hand all the way. They walked together quite and sad, A little girl and her loving dad. Into the school her father led. But he almost cried when she said, Daddy, Daddy, please don't go. Don't leave me here all alone."
const classOfAuthor2 = "IX, B";
class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Main">
                <NavigationBar />
                <div className="container-fluid">
                    <Row>
                        <Col md={8}>
                            <Welcome />
                        </Col>
                        <Col id="hotweek">
                            <h3>What's happening around you?</h3>
                            <Cards />
                            <p id="space"></p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="Welcome-content">
                <h2>Hi {user}. Make the best out of today!</h2>
                <p className="leftP">This week's highlights</p>
                <blockquote className="curly-quotes" id="leftPB">This isn't the main thing. It's the only thing.</blockquote>
                <figcaption class="quote-by">— {author1}, {classOfAuthor1}</figcaption>
                <h2 id="title">{title2}</h2>
                <p id="body2">{body2}</p>
                <figcaption class="quote-by">— {author2}, {classOfAuthor2}</figcaption>
            </div>
        )
    }
}

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="main">
                <Navbar collapseOnSelect expand="lg" bg="white" id="topbar">
                <Navbar.Brand href="#home" className="nav navbar-nav pull-sm-left"><img src={require('./logo.png')} height="56" width="56" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Nav.Link href="#Dashboard" id="dash">Dashboard</Nav.Link>
                            <Nav.Link href="#MyCommunities" id="Myc">My Communities</Nav.Link>
                            <Nav.Link href="#Talktoafriend" id="talk">Talk to a friend</Nav.Link>
                        </Nav>
                        <Nav id="profile">
                            <NavDropdown title={user} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1" className="dropdown">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                { name: 'Model United Nation', title: 'VIT MUN', body: 'Register Now' },
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
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
                        <Card.Text>
                            {body}
                        </Card.Text>
                        <Card.Link href="#">Like</Card.Link>
                    </Card.Body>
                </Card>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderCards()}
            </div>
        )
    }
}

export default Board;