import React, { Component } from "react";

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Song } from './Song';

export const ListSong = (tracks) => {
	console.log(tracks.tracks);
	return (
		<div style={{ marginBottom: '50px' }}>
      <List> 
      	{ tracks.tracks.map(track => {
      		return (
      			<>
              <Song
                key={`tack-${track.id}`}
                track={ track }
              />
              <Divider key={`divider-${track.id}`} />
            </>
          );
      	})}
      </List>
    </div>
	)
}
