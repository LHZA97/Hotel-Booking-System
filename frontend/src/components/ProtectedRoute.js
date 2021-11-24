import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import useForm from './pages/useForm'

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const {login} = useForm();
    const isAuthenticated = {login}
    
    console.log('this', isAuthenticated)

    return (
     <Route 
     {...rest} 
     render={props => 
        isAuthenticated ? <Component {...rest} {...props}/> : <Redirect to='/login'/>
     }/>   
    );

    }
export default ProtectedRoute;