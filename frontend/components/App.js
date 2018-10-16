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
import SignUp from './session_form/Signup';
import LogIn from './session_form/Login';
import Welcome from './Welcome/Welcome';

const App = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <AuthRoute exact path="/login" component={LogIn} />
      <AuthRoute exact path="/signup" component={SignUp} />
    </Switch>
  </div>
);

export default App;
