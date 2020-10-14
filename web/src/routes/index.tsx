import CreateOrphanage from 'pages/CreateOrphanage';
import Orphanage from 'pages/Orphanage';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={OrphanagesMap} />
        <Route path="/create" component={CreateOrphanage} />
        <Route path="/orphanage" component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
