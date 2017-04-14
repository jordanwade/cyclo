import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from  './Header';

import base from '../base'; 

class Main extends Component {

  constructor(props){
    super(props);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.props.fetchResources();
  }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // },

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    const uid = authData.user.uid;
    const name =  authData.user.displayName;
    const avatar = authData.user.photoURL;
    this.props.addUser(avatar, name, uid);

  }

  logout() {
    base.unauth();
    this.props.removeUser();
  }

  renderLogin() {
    return (
      <nav className="login">
        <Link to="/">Cyclo</Link>
        <p>Please sign in.</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
      </nav>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>Logout</button>;

    // check if they are no logged in at all
    if(!this.props.user.uid) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div>
        {logout}
        <Header  tagline="Welcome to Cyclo" />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}

export default Main; 
