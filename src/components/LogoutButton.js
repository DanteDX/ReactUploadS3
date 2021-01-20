import React from "react";
import {useAuth0} from "@auth0/auth0-react";

const LogoutButton = () =>{
    const {isAuthenticated,logout} = useAuth0();
    if(isAuthenticated){
        return(
            <button onClick={e => logout()}>
                Log Out
            </button>
        )
    }else if(!isAuthenticated){
        return(
            <p>Not Logged IN</p>
        )
    }
};

export default LogoutButton;