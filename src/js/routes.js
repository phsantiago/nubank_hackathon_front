import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Comprar from './containers/Comprar/Comprar';
import Vender from './containers/Vender/Vender';
import Conquistas from './containers/Conquistas/Conquistas';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Comprar} />
    <Route path="comprar" component={Comprar} />
    <Route path="vender" component={Vender} />
    <Route path="conquistas" component={Conquistas} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
