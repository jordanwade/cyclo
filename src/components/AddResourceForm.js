import React, { Component }from 'react';

class AddResourceForm extends Component {

  createResource(event) {
    event.preventDefault();
    console.log('Gonna make a resource! 😎');
    const resource = {
      name    : this.name.value,
      url     : this.url.value, 
      desc    : this.desc.value, 
      imple   : this.imple.value, 
    }
    console.log(resource)

    this.props.addResource(resource);
    this.resourceForm.reset();
  }

  render() { 
    return (
      <form ref={(input) => this.resourceForm = input } className="resource-edit" onSubmit={(e) => this.createResource(e)}>
        <input ref={(input) => this.name = input } type="text" placeholder="Resource Name"/>
        <input ref={(input) => this.url = input } type="text" placeholder="Resource URL"/>
        <textarea ref={(input) => this.desc = input } placeholder="Resource Desc"></textarea>
        <textarea ref={(input) => this.imple = input } placeholder="Implementation"></textarea>
        <button type="submit">+ Add Resource</button>
      </form>
    )
  }
}

export default AddResourceForm

