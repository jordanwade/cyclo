import React, { Component } from 'react';
import * as firebase from 'firebase';

class AddResourceForm extends Component {

  constructor(props){
    super(props);
    this.createResource = this.createResource.bind(this);
  }

  createResource(event) {
    event.preventDefault();
    console.log('Gonna make a resource! 😎');
    const ref = firebase.database().ref('resources/');
    const newKey = () => ref.push().key;

    const resource = {
        resourceId   : newKey(),
        avatar       : this.props.user.avatar,
        desc         : this.desc.value,
        imple        : this.imple.value,
        name         : this.props.user.name,
        technology   : this.technology.value,
        title        : this.title.value,
        uid          : this.props.user.uid,
        url          : this.url.value,
    };

    this.props.addResource(resource.uid, resource);
    this.resourceForm.reset();
  }

  render() { 
    return (
      <form ref={(input) => this.resourceForm = input } className="resource-edit" onSubmit={(e) => this.createResource(e)}>
        <input ref={(input) => this.title = input } type="text" placeholder="Resource Title"/>
        <input ref={(input) => this.technology = input } type="text" placeholder="Technology"/>
        <input ref={(input) => this.url = input } type="text" placeholder="Resource URL"/>
        <textarea ref={(input) => this.desc = input } placeholder="What did you learn?"></textarea>
        <textarea ref={(input) => this.imple = input } placeholder="Details about the implementation"></textarea>
        <button type="submit">+ Add Resource</button>
      </form>
    )
  }
}

export default AddResourceForm;

