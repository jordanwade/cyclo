import React, { Component } from 'react';

class Resource extends Component {

  goToResource() {
    const resourceId = this.props.index;
    this.context.router.transitionTo(`/resource/${resourceId}`);
  }

  render() { 
    const { details, index } = this.props;

    return (
      <li>
        <h3 className="resource-title">
          {details.title}
        </h3>
        <span className="url">{details.url}</span>
        <span className="technology">{details.technology}</span>
        <p>{details.desc}</p>
        <p>{details.imple}</p>
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
