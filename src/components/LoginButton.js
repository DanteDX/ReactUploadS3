import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () =>{
    const {isAuthenticated,loginWithRedirect} = useAuth0();
    if(!isAuthenticated){
        return(
            <button onClick={e => loginWithRedirect()}>
                Log In
            </button>
        )
    }else if(isAuthenticated){
        return(
            <p>Logged In</p>
        )
    }
};

export default LoginButton;