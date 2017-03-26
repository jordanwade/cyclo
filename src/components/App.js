import React, { Component }from 'react';
import AddResourceForm from  './AddResourceForm';
import Header from  './Header';
import Resource from  './Resource';
import Inventory from  './Inventory';
import base from '../base'; 

class App extends Component {

  constructor() {
    super();

    this.addResource = this.addResource.bind(this);
    this.updateResource = this.updateResource.bind(this);
    this.removeResource = this.removeResource.bind(this);

    // getintial state
    this.state = {
      resources: {},
    };
  }

  componentWillMount() {
    this.ref = base.syncState('/resources'
      , {
        context: this,
        state: 'resources'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addResource(resource) {
    // update state
    const resources = {...this.state.resources};
    // add in new resource
    const timestamp = Date.now();
    resources[`resource-${timestamp}`] = resource;
    // set state 
    this.setState({ resources });
  }

  updateResource(key, updatedResource) {
    const resources = {...this.state.resources};
    resources[key] = updatedResource;
    this.setState({ resources });
  }

  removeResource(key) {
    const resources = {...this.state.resources};
    resources[key] = null;
    this.setState({ resources });
  }

  render() {
    return (
      <div className="App">
        <Header tagline="Welcome to Cyclo"/>
        <AddResourceForm addResource={this.addResource}/>
        <ul className="list-of-fishes">
          {Object
            .keys(this.state.resources)
            .map(key => <Resource key={key} index={key} details={this.state.resources[key]} />)
          }
        </ul>
        <Inventory
          resources={this.state.resources}
          updateResource={this.updateResource}
          removeResource={this.removeResource}
        />
      </div>
    );
  }
}

export default App;
