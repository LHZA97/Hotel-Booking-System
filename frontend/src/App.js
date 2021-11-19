import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import RoomList from "./components/RoomList";
import RoomDetail from "./components/RoomDetail";
import Booking from "./components/Booking";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from 'axios'
//import jwt_decode from 'jwt_decode';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>  
        </Route>
        <Route path="/register">
          <Register/>  
        </Route>
        <Route path="/roomlist">
          <RoomList/>  
        </Route>
        <Route path="/roomdetail/:id">
          <RoomDetail/>  
        </Route> 
        <Route path="/booking/:id">
          <Booking/>  
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;