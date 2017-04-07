import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// Import css
import './stylesheets/app.css';

// Import Components
import App from './components/App';
import Single from './components/Single';
import Resources from './components/Resources';
import NotFound from './components/NotFound';


import store, { history } from './store';

import Raven from 'raven-js';

Raven
    .config('https://cebdea847d9f43e3bb3eb7bf3d3ccc01@sentry.io/156339')
    .install();

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
