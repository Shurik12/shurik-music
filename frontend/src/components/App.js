import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import { Navbar, InputGroup, Form, FormControl, Nav, NavDropdown, Button } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

import AllMusic from './AllMusic'
import WelcomePage from './WelcomePage'

class App extends Component {
	render() {
		return (
    	<Router>

    		<Navbar bg="dark" variant="dark">
				  <Navbar.Brand href="#">
				  	<Link className="navbar-brand mr-0 mr-md-2" to="/">
	            <img
					      alt=""
					      src="../static/frontend/images/logo1.jpeg"
					      width="120"
					      height="40"
					      className="d-inline-block align-top"
					    />
	          </Link>
				  </Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Form inline>
				      <InputGroup>
				        <FormControl
				          placeholder="Search"
				          aria-label="Search"
				          aria-describedby="basic-addon1"
				        />
				        <InputGroup.Append>
				        	<Button variant="outline-secondary"><BsSearch/></Button>
				        </InputGroup.Append>
				      </InputGroup>
				    </Form>
				    <Nav className="mr-auto">
				      <Nav.Link href="#">
				      	<Link className="navbar-nav" to="/music">
				      		Music
				      	</Link>
				      </Nav.Link>
				      <Nav.Link to="/categories">Categories</Nav.Link>
				      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown>
				    </Nav>

				    <Nav>
				      <Nav.Link href="#">Sing up</Nav.Link>
				      <Nav.Link > Sing in </Nav.Link>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>

			  <Route exact path="/"><WelcomePage /></Route>
		    <Route path="/music"><AllMusic /></Route>
		    
			</Router>
		);
	}
}

export default App;

const container = document.getElementById("app");
render(<App />, container);