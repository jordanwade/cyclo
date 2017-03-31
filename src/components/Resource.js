import React, { Component } from 'react';

class Resource extends Component {

  goToResource() {
    const resourceId = this.props.index;
    this.context.router.transitionTo(`/resource/${resourceId}`);
  }

  render() { 
    const { details } = this.props;

    return (
      <li>
        <h3 className="resource-title">
          {details.title}
        </h3>
        <p className="url">{details.url}</p>
        <p className="technology"> Technology: {details.technology}</p>
        <p>Description: {details.desc}</p>
        <p>Implementation: {details.imple}</p>
        <p>Author: {details.name}</p>
        <p><img alt={details.name} src={details.avatar} width="24" /></p>
        <button onClick={(e) => this.goToResource(e)} >Visit Resource →</button>
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

export default Resource
