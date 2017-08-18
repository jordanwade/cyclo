import React from 'react';

const Header = props => {
	return (
		<header className="row">
			<h1>
				{props.tagline}
			</h1>
			<p>This app lets you keep track of all the things you have learned.</p>
		</header>
	);
};

Header.propTypes = {
	tagline: React.PropTypes.string.isRequired
};

export default Header;
