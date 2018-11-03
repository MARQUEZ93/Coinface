import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute, LoggedInRoute } from '../util/route_util';
//components
import SignUp from './session_form/SignUp';
import SignIn from './session_form/SignIn';
import Welcome from './Welcome/Welcome';
import Dashboard from './Dashboard/Dashboard';
import PageNotFound from './PageNotFound';
import Accounts from './Accounts/AccountsContainer';
import Buy from './BuySell/BuyContainer';

const App = () => (
    <Switch>
      <LoggedInRoute exact path="/" component={Welcome} />
      <AuthRoute exact path="/login" component={SignIn} />
      <AuthRoute exact path="/signup" component={SignUp} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/buy" component={Buy} />
      <ProtectedRoute exact path="/accounts" component={Accounts} />
      <Route component={PageNotFound} />
    </Switch>
);

export default App;
