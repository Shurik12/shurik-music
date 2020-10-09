import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import { Navbar, InputGroup, Form, FormControl, Nav, NavDropdown, Button, ListGroup } from 'react-bootstrap';
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
				      <NavDropdown title="Sign in" alignRight>
				        <Form>
					        <NavDropdown.Header>Sign in with your social media account</NavDropdown.Header>
				          <ListGroup horizontal>
				            <Button className="ml-2 btn btn-primary col-sm">Facebook</Button>
				            <Button className="mx-2 btn btn-success col-sm">Twitter</Button>
				          </ListGroup>
				          <NavDropdown.Divider/>
				          <div className="form-group mx-2">
				            <input type="text" className="form-control" placeholder="Username" required="required"/>
				          </div>
				          <div className="form-group mx-2">
				            <input type="password" className="form-control" placeholder="Password" required="required"/>
				          </div>
				          <div className="mx-2">
					          <input type="submit" className="btn btn-primary btn-sm btn-block" value="Login"/>
					        </div>
				          <div className="text-center mt-2">
				            <a href="#">Forgot Your password?</a>
				          </div>
				        </Form>
				      </NavDropdown>
				      <NavDropdown title="Sign up" alignRight>
							  <Form>
								  <NavDropdown.Header>Please fill in this form to create an account!</NavDropdown.Header>
							    <div className="form-group mx-2">        
							      <input type="text" class="form-control" name="username" placeholder="Username" required="required"/>
							    </div>
							    <div className="form-group mx-2">
							      <input type="email" className="form-control" name="email" placeholder="Email Address" required="required"/>
							    </div>
							    <div className="form-group mx-2">
							      <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
							    </div>
							    <div className="form-group mx-2">
							      <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
							    </div>
							    <div className="form-group mx-2">
							      <label className="form-check-label">
							        <input type="checkbox" required="required"/> I accept the 
							        <a href="#">Terms of Use</a> &amp; 
							        <a href="#">Privacy Policy</a>
							      </label>
							    </div>
							    <div className="form-group mx-2">
							      <button type="submit" className="btn btn-success btn-sm btn-block">Sign Up</button>
							    </div>
							  </Form>
							  <div className="text-center">Already have an account? <a href="#">Login here</a></div>
							</NavDropdown>
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