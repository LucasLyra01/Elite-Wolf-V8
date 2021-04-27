import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';

const Routes = () => {

    return(

        <BrowserRouter>
            <Route exact path='/' component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>
        
        </BrowserRouter>
    );

}

export default Routes;