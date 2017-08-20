// Global
import React, { Component } from 'react';

// App
import AddResourceForm from './AddResourceForm';
import Resource from './Resource';
import Inventory from './Inventory';
import List from 'material-ui/List';

class Resources extends Component {
	render() {
		return (
			<main className="main">
				<AddResourceForm {...this.props} />
				<List className="list-of-resources">
					{Object.keys(this.props.resources).map(key =>
						<Resource
							key={key}
							index={key}
							details={this.props.resources[key]}
						/>
					)}
				</List>
				<Inventory {...this.props} />
			</main>
		);
	}
}

export default Resources;
