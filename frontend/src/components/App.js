import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, InputGroup, FormControl, Button, ListGroup, Form } from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";

import AllMusic from './AllMusic';
import WelcomePage from './WelcomePage';
import Categories from './Categories';
import Category from './Category';
import Author from './Author';
import Song from './Song';
import Profile from './Profile';


class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	username: "",
	    	auth: false,
	    	message: "",
	    	isFetching: false, 
				error: null
	    };
	    this.handleFetch = this.handleFetch.bind(this);
	    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
	    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
	    this.handleSubmitLogout = this.handleSubmitLogout.bind(this);
	}

	handleFetch(url, data) {
		fetch(url, {method: "post", body: JSON.stringify(data)})
    .then(response => response.json())
    .then(result => this.setState({
    	username: result["username"],
    	auth: result["auth"],
    	message: result["message"],
    	isFetching: false 
    }))
    .catch(e => {
      console.log(e);
      this.setState({
      	username: result["username"],
      	auth: result["auth"],
	    	message: result["message"],
	    	isFetching: false,
      	error: e
      });
    });
	}

	handleSubmitLogin(event) {

		const data = {
			"username": event.target.username.value,
			"password": event.target.password.value
		};
		event.target.username.value = "";
		event.target.password.value = "";
		this.handleFetch('/music/login', data);
  	event.preventDefault();
	}

	handleSubmitSignUp(event) {
		const data = {
			"username": event.target.username.value,
			"password": event.target.password.value,
			"confirmation": event.target.confirm_password.value,
			"email": event.target.email.value
		};
		this.handleFetch('/music/register', data);
  	event.preventDefault();
	}

	handleSubmitLogout(event) {
		this.setState({
			username: "",
    	auth: false,
    	message: "",
    	isFetching: false
    });
    event.preventDefault();
	}

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
				      <Nav.Link>
				      	<Link to="/music" className="navbar-nav nav-item nav-link">Music </Link>
				      </Nav.Link>
				      <Nav.Link>
				      	<Link to="/categories" className="navbar-nav nav-item nav-link">Categories </Link>
				      </Nav.Link>
				      <Nav.Link>
				      	<Link className="navbar-nav nav-item nav-link" to={`/profiles/${ this.state.username }`}>Profile </Link>
				      </Nav.Link>
				      <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navbar-nav nav-item nav-link">
				        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown>
				    </Nav>

				    { this.state.auth
					  ? <Nav>
					  		<Nav.Link className="navbar-nav" onClick={this.handleSubmitLogout}>Log out</Nav.Link>
					  	</Nav>
					  : <Nav>
					      <NavDropdown title="Sign in" alignRight>
					        <Form onSubmit={this.handleSubmitLogin}>
						        <NavDropdown.Header>Sign in with your social media account</NavDropdown.Header>
					          <ListGroup horizontal>
					            <Button className="ml-2 btn btn-primary col-sm">Facebook</Button>
					            <Button className="mx-2 btn btn-success col-sm">Twitter</Button>
					          </ListGroup>
					          <NavDropdown.Divider/>
					          <div className="form-group mx-2">
					            <input type="text" name="username" className="form-control" placeholder="Username" required="required"/>
					          </div>
					          <div className="form-group mx-2">
					            <input type="password" name="password" className="form-control" placeholder="Password" required="required"/>
					          </div>
					          {
					          	this.state.message && <div className="text-center text-danger">{ this.state.message }</div>
					          }
					          <div className="mx-2">
						          <input type="submit" className="btn btn-primary btn-sm btn-block" value="Login"/>
						        </div>
					          <div className="text-center mt-2">
					            <Link to="#">Forgot Your password?</Link>
					          </div>
					        </Form>
					      </NavDropdown>
					      <NavDropdown title="Sign up" alignRight>
								  <Form onSubmit={this.handleSubmitSignUp}>
									  <NavDropdown.Header>Please fill in this form to create an account!</NavDropdown.Header>
								    <div className="form-group mx-2">        
								      <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
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
								    {
					          	this.state.message && <div className="text-center text-danger">{ this.state.message }</div>
					          }
								    <div className="form-group mx-2">
								      <label className="form-check-label">
								        <input type="checkbox" required="required"/> I accept the 
								        <a href="#">Terms of Use &amp; Privacy Policy</a>
								      </label>
								    </div>
								    <div className="form-group mx-2">
								      <button type="submit" className="btn btn-success btn-sm btn-block">Sign Up</button>
								    </div>
								  </Form>
								  <div className="text-center">Already have an account? <a href="#">Login here</a></div>
								</NavDropdown>
					    </Nav>
					  }
				  </Navbar.Collapse>
				</Navbar>

			  <Route exact path="/"><WelcomePage /></Route>
		    <Route path="/music"><AllMusic /></Route>
		    <Route path="/authors/:author" component={ Author }/>
		    <Route path='/profiles/:username' component={ Profile }/>
		    <Route path="/categories"><Categories /></Route>
		    <Route path='/category/:category' component={ Category }/>
		    
			</Router>
		);
	}
}

export default App;

const container = document.getElementById("app");
render(<App />, container);