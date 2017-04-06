import React from 'react';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const resource = this.props.resources[key]; 
    // take a copy of that resource and update if with the new data
    const updatedResource = {
      ...resource,
      [e.target.name]:  e.target.value
    };
    this.props.updateResource(key, updatedResource);
    
  }

  renderInventory(key) {
    const resource = this.props.resources[key]; 
    return (
      <div className="resource-edit" key={key}>
        <input name="title" type="text" value={resource.title}  placeholder="Resource Title" onChange={(e) => this.handleChange(e, key)}/>
        <input name="technology" type="text" value={resource.technology}  placeholder="Technology" onChange={(e) => this.handleChange(e, key)}/>
        <input name="url"  type="text" value={resource.url}  placeholder="Resource url" onChange={(e) => this.handleChange(e, key)}/>
        <textarea name="desc" value={resource.desc}  placeholder="Resource desc" onChange={(e) => this.handleChange(e, key)}></textarea>
        <textarea name="imple" value={resource.imple}  placeholder="Resource implementation" onChange={(e) => this.handleChange(e, key)}></textarea>
        <button onClick={() => this.props.removeResource(key)}>Remove Resource</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.resources).map(this.renderInventory)}
      </div>  
    )
  }
}

Inventory.propTypes = {
  resources: React.PropTypes.array.isRequired,
}

export default Inventory;
