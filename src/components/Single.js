import React, { Component } from 'react';

import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const bucket = {
	display: 'flex',
	alignItems: 'center',
	paddingTop: 20
};

const bucketMedia = {
	flex: '0 0 auto',
	marginRight: 16
};

const bucketContent = {
	flex: '1 1 auto'
};

class Single extends Component {
	render() {
		const { resourceId } = this.props.params;
		const resource = this.props.resources[resourceId];

		return (
			<main>
				<Card>
					<CardHeader title={resource.title} subheader={resource.url} />
					<CardContent>
						<Typography component="p">
							{resource.desc}
						</Typography>
						<Typography component="p">
							{resource.imple}
						</Typography>
						<div style={bucket}>
							<div style={bucketMedia}>
								<Avatar alt={resource.name} src={resource.avatar} />
							</div>
							<Typography style={bucketContent} component="p">
								Author: {resource.name}
							</Typography>
						</div>
					</CardContent>
				</Card>
			</main>
		);
	}
}

export default Single;
