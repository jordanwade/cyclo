import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';

class Resource extends Component {

  render() { 
    const { details } = this.props;

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={details.name} src={details.avatar}/>
        </ListItemAvatar>
        <ListItemText
          primary={details.title}
          secondary={`Technology: ${details.technology}`}/>
        <Link to={`/view/${details.resourceId}`} ><Button raised color="accent" >Visit Resource →</Button></Link>
      </ListItem> 
    )
  }
}

export default Resource;
