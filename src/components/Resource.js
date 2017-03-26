import React, { Component }from 'react';

class Resource extends Component {
  render() { 
    const { details, index } = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {details.name}
        </h3>
        <span className="price">{details.url}</span>
        <p>{details.desc}</p>
        <p>{details.imple}</p>
        
      </li> 
    )
  }
}

export default Resource
