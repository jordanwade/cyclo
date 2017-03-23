import React, { Component }from 'react';

class AddResourceForm extends Component {
  render() { 
    return (
      <form className="resource-edit">
        <input type="text" placeholder="Resource Name"/>
        <input type="text" placeholder="Resource URL"/>
        <textarea placeholder="Resource Desc"></textarea>
        <textarea placeholder="Implementation"></textarea>
        <button type="submit">+ Add Resource</button>
      </form>
    )
  }
}

export default AddResourceForm

