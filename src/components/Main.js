import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';

import Header from './Header';

import { auth, gitAuthProvider } from '../base';

class Main extends Component {

  constructor(props) {
    super(props);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    this.props.fetchResources();
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.props.setCurrentUser(currentUser);
    });
  }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // },

  authenticate(provider) {
    provider.addScope('repo');
    auth.signInWithPopup(provider).then((authData) => {
      console.log(`Trying to log in with ${authData.credential.provider}`);
      console.log(authData);
      const ref = firebase.database().ref('users/');
      const newKey = () => ref.push().key;

      const user = {
        userId: newKey(),
        uid: authData.user.uid,
        name: authData.user.displayName,
        avatar: authData.user.photoURL,
      };

      this.props.addUser(user.userId, user);

    }).catch((error) => {
      console.log(error);
    });;
  }

  logout() {
    this.props.logoutUser();
  }

  renderLogin() {
    return (
      <nav className="login">
        <Link to="/">Cyclo</Link>
        <p>Please sign in.</p>
        <button className="github" onClick={() => this.authenticate(gitAuthProvider)}>Log In with Github</button>
      </nav>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>Logout</button>;
    const { currentUser } = this.props.users
    // check if they are no logged in at all
    if (!currentUser) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div>
        {logout}
        <Header tagline="Welcome to Cyclo" />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}

export default Main; 
