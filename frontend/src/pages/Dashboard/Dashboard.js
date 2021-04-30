import React from 'react';
import GoogleLogin from 'react-google-login';

import { Sidebar } from '../../components/Sidebar/index';

const Dashboard = () => {

    function responseGoogle(){
        console.log("object");
    }

    return(
        <div>
            <div>
                <Sidebar />
            </div>
            <div>

            </div>
        </div>
        
    )

}

export default Dashboard;