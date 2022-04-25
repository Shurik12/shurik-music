import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { RiPauseCircleFill, RiPlayCircleFill, RiMore2Line, RiHeartFill, RiHeartLine, RiDeleteBin3Line } from "react-icons/ri";
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import mp3 from "./Angels_With_Dirty_Faces-Sum_41.mp3";

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
      playing: false,
      isFetching: true, 
      error: null 
    };
    this.audio = new Audio(mp3);
    this.handleClickLike = this.handleClickLike.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.setState({ playing: true });
    this.audio.play();
  }

  pause() {
    this.setState({ playing: false });
    this.audio.pause();
  }

  handleClickLike(event) {
    const user = this.state.user;
    var track = this.state.track;
    fetch("/music/like_track", {method: "post", body: JSON.stringify(track)});
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
      <>
      <ListGroup className="d-flex" horizontal>
        <ListGroup.Item className="p-2 border-0">
          {
            !this.state.playing
            ? <RiPlayCircleFill onClick={this.play}/>
            : <RiPauseCircleFill onClick={this.pause}/>
          }
        </ListGroup.Item>
        <ListGroup.Item className="col p-2 border-0" >{ track["name"] }</ListGroup.Item>
        <ListGroup.Item className="mr-auto p-2 col border-0">
          <Link className="text-success" to={`/authors/${ track["author"] }`} >{ track["author"] }</Link>
        </ListGroup.Item>
        {
          track["like"].includes(user)
          ? <ListGroup.Item className="p-2 border-0"><RiHeartFill onClick={this.handleClickLike}/></ListGroup.Item>
          : <ListGroup.Item className="p-2 border-0"><RiHeartLine onClick={this.handleClickLike}/></ListGroup.Item>
        }
        <ListGroup.Item className="p-2 border-0"><RiDeleteBin3Line/></ListGroup.Item>
        <ListGroup.Item className="p-2 border-0"><RiMore2Line/></ListGroup.Item>

      </ListGroup>
      <audio id="audio">
        <source src={'./Angels_With_Dirty_Faces-Sum_41.mp3'} />
      </audio>
      </>
    )
  }
}

export default Song;