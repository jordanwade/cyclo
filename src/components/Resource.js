import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';

const Resource = ({ details }) => {
	const { avatar, name, resourceId, technology, title } = details;
	return (
		<ListItem>
			<ListItemAvatar>
				<Avatar alt={name} src={avatar} />
			</ListItemAvatar>
			<ListItemText primary={title} secondary={`Technology: ${technology}`} />
			<Link to={`/view/${resourceId}`}>
				<Button raised color="accent">
					View Resource →
				</Button>
			</Link>
		</ListItem>
	);
};

Resource.propTypes = {
	details: PropTypes.shape({
		avatar: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		resourceId: PropTypes.string.isRequired,
		technology: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired
	}).isRequired
};

export default Resource;
