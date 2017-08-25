import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Slide from 'material-ui/transitions/Slide';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import React, { Component } from 'react';
import { Link } from 'react-router';
import * as firebase from 'firebase';

import AddResourceForm from './AddResourceForm';

import { auth, gitAuthProvider } from '../base';

const styles = {
	root: {
		marginTop: 30,
		width: '100%'
	},
	flex: {
		flex: 1
	},
	appBar: {
		position: 'relative'
	}
};

class Main extends Component {
	constructor(props) {
		super(props);
		this.authenticate = this.authenticate.bind(this);
		this.logout = this.logout.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
	}

	componentWillMount() {
		this.props.fetchResources();
	}

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			this.props.setCurrentUser(currentUser);
		});
	}

	handleRequestClose() {
		this.props.closeDialog();
	}

	handleOpen() {
		this.props.openDialog();
	}

	// componentWillUnmount() {
	//   base.removeBinding(this.ref);
	// },

	authenticate(provider) {
		provider.addScope('repo');
		auth
			.signInWithPopup(provider)
			.then(authData => {
				console.log(`Trying to log in with ${authData.credential.provider}`);
				console.log(authData);
				const ref = firebase.database().ref('users/');
				const newKey = () => ref.push().key;

				const user = {
					userId: newKey(),
					uid: authData.user.uid,
					name: authData.user.displayName,
					avatar: authData.user.photoURL
				};

				this.props.addUser(user.userId, user);
			})
			.catch(error => {
				console.log(error);
			});
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
				<Button
					raised
					color="primary"
					className="github"
					onClick={() => this.authenticate(gitAuthProvider)}
				>
					Log In with Github
				</Button>
			</nav>
		);
	}

	renderDialog() {
		console.log(this.props);

		return (
			<Dialog
				fullScreen
				open={this.props.general.open}
				onRequestClose={this.handleRequestClose}
				transition={<Slide direction="up" />}
			>
				<AppBar style={styles.appBar}>
					<Toolbar>
						<Typography type="title" color="inherit" style={styles.flex}>
							Add a New Resource
						</Typography>
						<Button color="contrast" onClick={this.handleRequestClose}>
							𝗫 Close
						</Button>
					</Toolbar>
				</AppBar>
				<AddResourceForm {...this.props} />
			</Dialog>
		);
	}

	render() {
		const logout = (
			<Button raised color="accent" onClick={this.logout}>
				Logout
			</Button>
		);
		const { currentUser } = this.props.users;

		// check if they are no logged in at all
		if (!currentUser) {
			return (
				<div>
					{this.renderLogin()}
				</div>
			);
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
						<Button color="contrast" onClick={this.handleOpen}>
							+ Add Resource
						</Button>
						{logout}
					</Toolbar>
				</AppBar>
				<div>
					{this.renderDialog()}
				</div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;
