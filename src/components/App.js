// Global
import React, { Component }from 'react';
import '../stylesheets/app.css';

// App
import AddResourceForm from  './AddResourceForm';
import Header from  './Header';
import Resource from  './Resource';
import Inventory from  './Inventory';
import base from '../base'; 

class App extends Component {

  constructor() {
    super();

    this.addResource = this.addResource.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.removeResource = this.removeResource.bind(this);
    this.removeResource = this.removeResource.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.updateResource = this.updateResource.bind(this);

    // getintial state
    this.state = {
      resources: {},
      uid: null
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

  componentDidMount() {
    base.onAuth((user) => {
      if(user) {
        this.authHandler(null, { user });
      }
    });
  }

  addResource(resource) {
    // update state
    const resources = {...this.state.resources};
    // add in new resource
    const timestamp = Date.now();
    resources[`${timestamp}`] = resource;
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

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  logout() {
    base.unauth();
    this.setState({ uid: null });
  }

  authHandler(err, authData)  {
    if (err) {
      console.error(err);
      return;
    }

    this.setState({
      uid: authData.user.uid
    });
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Cyclo</h2>
        <p>Please sign in.</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
      </nav>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // check if they are no logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <main className="main">
        {logout}
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
      </main>
    );
  }
}

export default App;
