import React from 'react';
import Navbar from './components/Navbar';
import './components/styles/App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboards from './components/pages/Dashboards';
import Signup from './components/pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import RoomDetail from './components/RoomDetail';
import RoomsList from './components/RoomList';
import LoginSignup from './components/pages/LoginSignup';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/rooms' component={RoomsList} />
          <Route path='/roomdetail/:id'component={RoomDetail}/>
          <ProtectedRoute path='/dashboards' component={Dashboards} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={LoginSignup}/>
          
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
