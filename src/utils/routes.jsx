import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import NewSpreeadsheetContainer from 'containers/NewSpreeadsheet';

import urls from './constants/urls';

export const history = createBrowserHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route
        exact
        path={urls.ROUTES.APP}
        component={NewSpreeadsheetContainer}
      />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
