import React, { Component }from 'react';
import AddResourceForm from  './AddResourceForm';

class App extends Component {

  constructor() {
    super();

    this.addResource = this.addResource.bind(this);

    // getintial state
    this.state = {
      resources: {},
    };
  }

  addResource(resource) {
    // update state
    const resources = {...this.state.resources};
    // add in new fish
    const timestamp = Date.now();
    resources[`resource-${timestamp}`] = resource;
    // set state 
    this.setState({ resources });
  }

  render() {
    return (
      <div className="App">
        <Header tagline="Welcome to Cyclo"/>
        <AddResourceForm addResource={this.addResource}/>
        <Resource/>
      </div>
    );
  }
}

export default App;
