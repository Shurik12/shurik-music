import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, NavLink, Route, useParams } from 'react-router-dom';
import { RiPlayCircleFill, RiMore2Line, RiHeartFill, RiHeartLine, RiDeleteBin3Line } from "react-icons/ri";
import { ListGroup } from 'react-bootstrap';

class Author extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			author: this.props.match.params.author,
			data: {},
			isFetching: true, 
			error: null 
		};
	}

	componentDidMount() {
		const author = this.state.author;
		fetch(`/music/authors/${author}`)
			.then(response => response.json())
			.then(result => this.setState({
			  data: result,
				isFetching: false 
			}))
			.catch(e => {
			  console.log(e);
			  this.setState({
			    data: result,
					isFetching: false,
			  	error: e
			  });
			});
	}

	render() {

		if (this.state.isFetching) return <div>...Loading</div>;
		if (this.state.error) return <div>{`Error: ${e.message}`}</div>;

		const author = this.state.data.author;
		console.log(author);

		return ( 
			<div className="Author">
				<h3> { author["name"] } ({ author["year"] })</h3>
				<ListGroup className="d-flex" style={{ width: '60%' }}> 
	      	{ author["tracks"].map(track => {
	      		return (
	      			<ListGroup className="d-flex" horizontal>
				        <ListGroup.Item className="p-2 border-0">
				          <RiPlayCircleFill/>
				        </ListGroup.Item>
				        <ListGroup.Item className="col p-2 border-0" >{ track }</ListGroup.Item>
				        <ListGroup.Item className="mr-auto p-2 col border-0">{ author["name"] }</ListGroup.Item>
				        <ListGroup.Item className="p-2 border-0"><RiDeleteBin3Line/></ListGroup.Item>
				        <ListGroup.Item className="p-2 border-0"><RiMore2Line/></ListGroup.Item>
				      </ListGroup>
	          );
	      	})}
	      </ListGroup>
			</div>
		)
	}
}

export default Author;