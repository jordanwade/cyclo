import React, { Component }from 'react';
import AddResourceForm from  './AddResourceForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Cyclo</h2>
        </div>
        <p className="App-intro">
          This app lets you keep track of all the things you have learned.
        </p>
        <AddResourceForm/>
      </div>
    );
  }
}

export default App;
