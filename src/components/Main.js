import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { auth, gitAuthProvider } from '../base';

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
};

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
    auth.signOut();
  }

  renderLogin() {
    return (
      <nav className="login">
        <Link to="/">Cyclo</Link>
        <p>Please sign in.</p>
        <Button raised color="primary" className="github" onClick={() => this.authenticate(gitAuthProvider)}>Log In with Github</Button>
      </nav>
    )
  }

  render() {
    const logout = <Button raised color="primary" onClick={this.logout}>Logout</Button>;
    const { currentUser } = this.props.users

    // check if they are no logged in at all
    if (!currentUser) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              🌪
            </IconButton>
            <Typography type="title" color="inherit" style={styles.flex}>
              Cyclo
            </Typography>
            {logout}
          </Toolbar>
        </AppBar>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}

export default Main; 
