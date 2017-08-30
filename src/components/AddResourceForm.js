import React, { Component } from 'react';
import * as firebase from 'firebase';

import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const style = {
  display: 'flex',
  marginBottom: 20
};

class AddResourceForm extends Component {
  constructor(props) {
    super(props);
    this.createResource = this.createResource.bind(this);
  }

  createResource(event) {
    event.preventDefault();
    console.log('Gonna make a resource! 😎');
    const ref = firebase.database().ref('resources/');
    const newKey = () => ref.push().key;

    const resource = {
      resourceId: newKey(),
      avatar: this.props.users.currentUser.photoURL,
      desc: this.desc.value,
      imple: this.imple.value,
      name: this.props.users.currentUser.displayName,
      technology: this.technology.value,
      title: this.title.value,
      uid: this.props.users.currentUser.uid,
      url: this.url.value
    };

    this.props.addResource(resource.resourceId, resource);
    this.resourceForm.reset();
  }

  render() {
    return (
      <form
        ref={input => (this.resourceForm = input)}
        className="card"
        onSubmit={e => this.createResource(e)}
      >
        <TextField
          style={style}
          label="Resource Title"
          inputRef={input => (this.title = input)}
          type="text"
        />
        <TextField
          style={style}
          label="Technology"
          inputRef={input => (this.technology = input)}
          type="text"
        />
        <TextField
          style={style}
          label="Resource URL"
          inputRef={input => (this.url = input)}
          type="text"
        />
        <TextField
          style={style}
          label="Description"
          multiline
          rows={4}
          inputRef={input => (this.desc = input)}
        />
        <TextField
          style={style}
          label="Implementation"
          multiline
          rows={4}
          inputRef={input => (this.imple = input)}
        />
        <Button raised color="primary" type="submit">
          Save Resource
        </Button>
      </form>
    );
  }
}

export default AddResourceForm;
