import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavigationBar = props => {
    
    return (
        <div id="navbar">

            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Recipes" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/by-spirit">by Spirit</NavDropdown.Item>
                    <NavDropdown.Item href="/alcoholic" onClick={() => props.clickOnFilter()}>Alcoholic</NavDropdown.Item >
                    <NavDropdown.Item href="/non-alcoholic" onClick={() => props.clickOnFilter()}>Non-Alcoholic</NavDropdown.Item>
                </NavDropdown>

                    <Nav.Link href="/spirits">Spirits</Nav.Link>
                    <Nav.Link href="/about-us">About us</Nav.Link>
                
                </Nav>

                {/* Search field */}
                <Form inline>
                    <FormControl type="text" placeholder="by Name or Ingredient" className="mr-sm-2" />
                    <Button variant="outline-light"><FontAwesomeIcon icon={faSearch} /></Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}


export default NavigationBar;