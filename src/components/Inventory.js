import React from 'react';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const style = {
  display: 'flex',
  marginBottom: 20
};

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
      [e.target.name]: e.target.value
    };
    this.props.updateResource(key, updatedResource);
  }

  renderInventory(key) {
    const resource = this.props.resources[key];
    const currentUser = this.props.users.currentUser;
    if (currentUser.uid === resource.uid) {
      return (
        <div className="card" key={key}>
          <TextField
            style={style}
            name="title"
            type="text"
            value={resource.title}
            label="Resource Title"
            onChange={e => this.handleChange(e, key)}
          />
          <TextField
            style={style}
            name="technology"
            type="text"
            value={resource.technology}
            label="Technology"
            onChange={e => this.handleChange(e, key)}
          />
          <TextField
            style={style}
            name="url"
            type="text"
            value={resource.url}
            label="Resource URL"
            onChange={e => this.handleChange(e, key)}
          />
          <TextField
            style={style}
            multiline
            name="desc"
            value={resource.desc}
            label="Description"
            onChange={e => this.handleChange(e, key)}
          />
          <TextField
            style={style}
            multiline
            name="imple"
            value={resource.imple}
            label="Implementation"
            onChange={e => this.handleChange(e, key)}
          />
          <Button
            raised
            color="accent"
            onClick={() => this.props.removeResource(key)}
          >
            Remove Resource
          </Button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.resources).map(this.renderInventory)}
      </div>
    );
  }
}

export default Inventory;
