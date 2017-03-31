import React, { Component } from 'react';
import base from '../base';

class ResourceShow extends Component {

  constructor() {
    super();

    // getintial state
    this.state = {
      resources: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`resources/${this.props.params.resourceId}`
      , {
        context: this,
        state: 'resources'
    })
    this.setState();
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() { 

    const resource = this.state.resources;

    return (
      <main>
        <h3 className="resource-title">
          {resource.title}
        </h3>
        <span className="url">{resource.url}</span>
        <p>{resource.desc}</p>
        <p>{resource.imple}</p>
        <p>Author: {resource.name}</p>
        <p><img alt={resource.name} src={resource.avatar} width="24" /></p>
      </main> 
    )
  }
}

ResourceShow.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default ResourceShow
