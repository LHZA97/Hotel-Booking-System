import React, { useContext } from 'react';
import { Redirect, Route} from 'react-router-dom';
import Auth from './utils/Auth';

const ProtectedRoute = ({children, ...rest}) => {
   const {token} = useContext(Auth)
   return (
    <Route {...rest}>{!token ? <Redirect to="/login"/> : children}</Route>
   )
}

export default ProtectedRoute;