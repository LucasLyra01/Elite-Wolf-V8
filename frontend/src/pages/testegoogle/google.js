import React from 'react';
import { GoogleLogin } from 'react-google-login';


const Google = () => {
    
    const responseGoogle = (response) => {

        let error = response.error;

        if(error == 'popup_closed_by_user'){
            console.log(response.error);
        }else{
            console.log(response.profileObj);
        }

    }

    return(
        <div>
            <GoogleLogin 
            clientId='349332171869-btsdfeaeakh96mincupuf1mftq2pc1vf.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </div>
    )

}

export default Google;