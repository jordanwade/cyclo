import React from 'react';

import { render } from 'react-dom';

// Import css
import './stylesheets/app.css';

// Import Components
import App from './components/App';
import Single from './components/Single';
import Resources from './components/Resources';
import NotFound from './components/NotFound';

// Import react router deps
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Resources}></IndexRoute>
          <Route path="/view/:resourceId" component={Single}></Route>
        </Route>
        <Route path='*' component={NotFound} />
      </Router>
    </Provider>
  )
}  

render(<Root/>, document.querySelector('#root'));
