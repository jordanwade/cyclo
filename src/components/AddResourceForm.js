import React, { Component } from 'react';

class AddResourceForm extends Component {

  createResource(event) {
    event.preventDefault();
    console.log('Gonna make a resource! 😎');
    const resource = {
      avatar       : this.props.avatar,
      desc         : this.desc.value, 
      imple        : this.imple.value, 
      name         : this.props.name,
      technology   : this.technology.value, 
      title        : this.title.value,
      uid          : this.props.uid,
      url          : this.url.value,
    }

    this.props.addResource(resource);
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

AddResourceForm.propTypes = {
  addResource: React.PropTypes.func.isRequired
}

export default AddResourceForm

