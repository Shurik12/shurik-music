import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import AllMusic from './AllMusic'
import WelcomePage from './WelcomePage'

class App extends Component {
	render() {
		return (
    	<Router>
	    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
			    <Link className="nav-link" to="/"> Welcome page </Link>
			    { true
			      ?
			      	<div>
		              <ul className="navbar-nav mr-auto">
			              <li className="nav-item"><Link className="nav-link" to="/music">Music</Link></li>
			              <li className="nav-item"><Link className="nav-link" to="/music">All Posts</Link></li>
			              <li className="nav-item"><a className="nav-link" href="/logout">Log Out</a></li>
			      	  </ul>
	            </div>
			      :
			      	<div>
		              <ul className="navbar-nav mr-auto">
			              <li className="nav-item"><a className="nav-link" href="#">All Posts</a></li>
			              <li className="nav-item"><a className="nav-link" href="/login">Log In</a></li>
			              <li className="nav-item"><a className="nav-link" href="/register">Reister</a></li>
			      	  </ul>
	            </div>
	        }
				</nav>

			  <Route exact path="/"><WelcomePage /></Route>
		    <Route path="/music"><AllMusic /></Route>
	      
			</Router>
		);
	}
}

export default App;

const container = document.getElementById("app");
render(<App />, container);