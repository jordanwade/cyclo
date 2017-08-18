// Global
import React, { Component } from 'react';

// App
import AddResourceForm from './AddResourceForm';
import Resource from './Resource';
import Inventory from './Inventory';

class Resources extends Component {
	render() {
		return (
			<main className="main">
				<AddResourceForm {...this.props} />
				<ul className="list-of-resources">
					{Object.keys(this.props.resources).map(key =>
						<Resource
							key={key}
							index={key}
							details={this.props.resources[key]}
						/>
					)}
				</ul>
				<Inventory {...this.props} />
			</main>
		);
	}
}

export default Resources;
