import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import IsLoggedIn from "./IsLoggedIn";
import {useCookies} from "react-cookie";
import LoginButton from "./LoginButton";
import Favorites from "./Favorites";
import AddCocktailLink from "./AddCocktailLink";

export const NavigationBar = (props) => {
    const [cookies, setCookie] = useCookies(["email"]);

  return (
    <div id="navbar">
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/by-spirit"
                onClick={() => props.clickOnFilter()}
              >
                by Spirit
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/filter/alcoholic"
                onClick={() => props.clickOnFilter()}
              >
                Alcoholic
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/filter/non-alcoholic"
                onClick={() => props.clickOnFilter()}
              >
                Non-Alcoholic
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/spirits">Spirits</Nav.Link>
            <Nav.Link href="/about-us">About us</Nav.Link>
            <AddCocktailLink/>
            <Nav.Link href="/registration">Registration</Nav.Link>
            <Favorites/>
            <LoginButton/>
            {/*<p id="isLoggedIn">{You are logged in as: {props.isLoggedIn}}</p>*/}
          </Nav>

          {/* Search field */}
          <Form inline action="/search" onSubmit={props.getSearchResult}>
            <FormControl
              type="text"
              id="search-field"
              name="search-field"
              className="mr-sm-2"
              placeholder={props.searchField}
              ref={props.forwardedRef}
            />
            <Button type="submit" variant="outline-light">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
