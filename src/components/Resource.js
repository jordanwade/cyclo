import React, { Component } from 'react';
import { Link } from 'react-router';

class Resource extends Component {

  render() { 
    const { details } = this.props;

    return (
      <li>
        <h3 className="resource-title">
          {details.title}
        </h3>
        <p className="technology"> Technology: {details.technology}</p>
        <p><img alt={details.name} src={details.avatar} width="24" /></p>
        <Link className="button" to={`/view/${details.uid}`} >Visit Resource →</Link>
      </li> 
    )
  }
}

Resource.contextTypes = {
   router: React.PropTypes.object
}

Resource.propTypes = {
  index: React.PropTypes.string.isRequired
}

export default Resource;
