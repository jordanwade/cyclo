// Global
import React, { Component } from 'react';

// App
import AddResourceForm from  './AddResourceForm';
import Resource from  './Resource';

class Resources extends Component {

  // updateResource(key, updatedResource) {
  //   const resources = {...this.state.resources};
  //   resources[key] = updatedResource;
  //   this.setState({ resources });
  // }

  // removeResource(key) {
  //   const resources = {...this.state.resources};
  //   resources[key] = null;
  //   this.setState({ resources });
  // }

  render() {

    return (
      <main className="main">
        <AddResourceForm {...this.props} />
        <ul className="list-of-resources">
          {Object
            .keys(this.props.resources)
            .map(key => <Resource 
                          key={key}
                          index={key}
                          details={this.props.resources[key]}
                        />)
          }
        </ul>
      </main>
    );
  }
}

export default Resources;
