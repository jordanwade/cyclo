import React, { Component } from 'react';

class Single extends Component {

  render() { 

    const { resourceId } = this.props.params;
    const resource = this.props.resources[resourceId];

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


export default Single;
