import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss  } from 'react-router';

import App from './components/App';
import ResourceShow from './components/ResourceShow';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/resource/:resourceId" component={ResourceShow} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter> 
  )
}

render(<Root/>, document.querySelector('#main'));
