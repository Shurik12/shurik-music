import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { RiPlayCircleFill, RiMore2Line, RiHeartFill, RiHeartLine, RiDeleteBin3Line } from "react-icons/ri";

export const Song = ({ track }) => (
  <ListGroup className="d-flex" horizontal>
    <ListGroup.Item className="p-2 border-0">
      <RiPlayCircleFill/>
    </ListGroup.Item>
    <ListGroup.Item className="col p-2 border-0" >{ track["name"] }</ListGroup.Item>
    <ListGroup.Item className="mr-auto p-2 col border-0">{ track["author"] }</ListGroup.Item>
    <ListGroup.Item className="p-2 border-0"><RiHeartFill/></ListGroup.Item>
    <ListGroup.Item className="p-2 border-0"><RiDeleteBin3Line/></ListGroup.Item>
    <ListGroup.Item className="p-2 border-0"><RiMore2Line/></ListGroup.Item>

  </ListGroup>
);