import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <Route component={Routes} />
    </Provider>
  );
};

export default App;
