import React, { Component } from "react";
import { render } from "react-dom";

class WelcomePage extends React.Component {
	render() {
		const mystyle = {
			backgroundImage: 'url("https://i.gifer.com/1fTO.gif")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			height: "89.5vh",
		};
		return (
			<div style={mystyle}>
				<h2 className="p-2"> 
					Welcome on shurik-music 
				</h2>
			</div>
		)
	}
}

export default WelcomePage;