import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import { isAuthenticated } from '../src/components/auth/auth';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';

import Google from './pages/testegoogle/google';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route 
        { ...rest }
        render={props =>
        isAuthenticated()
        ? ( <Component { ...props }/>)
        : ( <Redirect to={{ pathname: '/', state: { from: props.location } }}/> )
        }
    />
)

const Routes = () => {
    
    console.log(isAuthenticated());

    return(

        <BrowserRouter>

            <Route exact path='/' component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
        
        </BrowserRouter>
    );

}

export default Routes;