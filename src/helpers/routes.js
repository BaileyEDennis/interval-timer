import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Timer from '../components/Timer';
import NotFound from '../components/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/timer" component={() => <Timer />} />
      <Route component={NotFound} />
    </Switch>
  );
}
