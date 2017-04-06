import React, { Component } from 'react';

class Single extends Component {

  render() { 

    return (
      <main>
        <h3 className="resource-title">
          {/* {resource.title}*/} Test
        </h3>
        {/* <span className="url">{resource.url}</span>
        <p>{resource.desc}</p>
        <p>{resource.imple}</p>
        <p>Author: {resource.name}</p>
        <p><img alt={resource.name} src={resource.avatar} width="24" /></p> */}
      </main> 
    )
  }
}

Single.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default Single;
