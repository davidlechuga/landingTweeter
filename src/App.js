import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import Landing from './views/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/'
          component={Landing}
          exact
        />
      </Switch> 
    </Router>   
  );
}

export default App;
