import React, { Component } from "react";

import Divider from '@material-ui/core/Divider';
import { ListGroup } from 'react-bootstrap';

import { Song } from './Song';

export const ListSong = (tracks) => {
	console.log(tracks.tracks);
	return (
		<div style={{ marginBottom: '50px' }}>
      <ListGroup className="d-flex" style={{ width: '60%' }}> 
      	{ tracks.tracks.map(track => {
      		return (
      			<>
              <Song
                key={`tack-${track.id}`}
                track={ track }
              />
            </>
          );
      	})}
      </ListGroup>
    </div>
	)
}
