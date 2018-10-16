import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
//components
import SignUp from './session_form/SignUp_container';
import SignIn from './session_form/SignIn_container';
import Welcome from './Welcome/Welcome';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <AuthRoute exact path="/login" component={SignIn} />
      <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
