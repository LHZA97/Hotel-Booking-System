import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rooms from './components/pages/Rooms';
import Dashboards from './components/pages/Dashboards';
import Signup from './components/pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms' component={Rooms} />
          <Route path='/dashboards' component={Dashboards} />
          <Route path='/Signup' component={Signup} />
          <Signup />;
        </Switch>
      </Router>
    </>
  );
}

export default App;
