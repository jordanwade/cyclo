import React from 'react';
import List from 'material-ui/List';

import Resource from './Resource';
import Inventory from './Inventory';

const Resources = (props) => {
	return (
		<main className="main">
			<List className="list-of-resources">
				{Object.keys(props.resources).map(key =>
					<Resource
						key={key}
						index={key}
						details={props.resources[key]}
					/>
				)}
			</List>
			<Inventory {...props} />
		</main>
	);
};

export default Resources;
