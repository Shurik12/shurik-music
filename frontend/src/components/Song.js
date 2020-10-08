import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import MoreVert from '@material-ui/icons/MoreVert';
import MusicNote from '@material-ui/icons/MusicNote';

export const Song = ({ track }) => (
  <ListItem className="track">
    <ListItemAvatar>
      <Avatar>
        <MusicNote />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={ track["name"] }
      secondary={ track["author"] }
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete">
        <MoreVert />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);