import React from 'react';
import List from 'material-ui/List';
import PropTypes from 'prop-types';

import Resource from './Resource';
import Inventory from './Inventory';

const Resources = props => {

  const resources = props.resources;

  return (
    <main className="main">
      <List className="list-of-resources">
        {Object.keys(resources).map(key =>
          <Resource key={key} index={key} details={resources[key]} />
        )}
      </List>
      <Inventory {...props} />
    </main>
  );
};

Resources.defaultProps = {
  resources: {}
};

Resources.propTypes = {
  resources: PropTypes.shape().isRequired,
};

export default Resources;
