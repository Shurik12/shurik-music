import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { RiPlayCircleFill, RiMore2Line, RiHeartFill, RiHeartLine, RiDeleteBin3Line } from "react-icons/ri";

{/*
  export const Song = ( {track, user} ) => (
    <ListGroup className="d-flex" horizontal>
      <ListGroup.Item className="p-2 border-0">
        <RiPlayCircleFill/>
      </ListGroup.Item>
      <ListGroup.Item className="col p-2 border-0" >{ track["name"] }</ListGroup.Item>
      <ListGroup.Item className="mr-auto p-2 col border-0">{ track["author"] }</ListGroup.Item>
      {
        track["like"].includes(user)
        ? <ListGroup.Item className="p-2 border-0"><RiHeartFill/></ListGroup.Item>
        : <ListGroup.Item className="p-2 border-0"><RiHeartLine/></ListGroup.Item>
      }
      <ListGroup.Item className="p-2 border-0"><RiDeleteBin3Line/></ListGroup.Item>
      <ListGroup.Item className="p-2 border-0"><RiMore2Line/></ListGroup.Item>

    </ListGroup>
  );
*/}
class Song extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      user: this.props.user,
      isFetching: true, 
      error: null 
    };
    this.handleClickLike = this.handleClickLike.bind(this);
  }

  handleClickLike(event) {
    const user = this.state.user;
    var track = this.state.track;
    if (track.like.includes(user)) {
      track.like.splice(track.like.indexOf(user), 1)
    } else {
      track.like.push(user);
    }  
    this.setState({
      track: track,
    })
    event.preventDefault();
  }

  render() {

    const track = this.state.track;
    const user = this.state.user;
    return (
      <ListGroup className="d-flex" horizontal>
        <ListGroup.Item className="p-2 border-0">
          <RiPlayCircleFill/>
        </ListGroup.Item>
        <ListGroup.Item className="col p-2 border-0" >{ track["name"] }</ListGroup.Item>
        <ListGroup.Item className="mr-auto p-2 col border-0">{ track["author"] }</ListGroup.Item>
        {
          track["like"].includes(user)
          ? <ListGroup.Item className="p-2 border-0"><RiHeartFill onClick={this.handleClickLike}/></ListGroup.Item>
          : <ListGroup.Item className="p-2 border-0"><RiHeartLine onClick={this.handleClickLike}/></ListGroup.Item>
        }
        <ListGroup.Item className="p-2 border-0"><RiDeleteBin3Line/></ListGroup.Item>
        <ListGroup.Item className="p-2 border-0"><RiMore2Line/></ListGroup.Item>

      </ListGroup>
    )
  }
}

export default Song;