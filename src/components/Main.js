import React from 'react';
import { Link } from 'react-router';

import Header from  './Header';

import base from '../base'; 

const Main = React.createClass({

  // componentWillMount() {
  //   this.props.fetchResources();
  // },

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // },

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  },

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

  },

  logout() {
    base.unauth();
    this.props.removeUser();
  },

  renderLogin() {
    return (
      <nav className="login">
        <Link to="/">Cyclo</Link>
        <p>Please sign in.</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
      </nav>
    )
  },

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

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

});

export default Main; 
