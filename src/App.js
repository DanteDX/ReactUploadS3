import React from 'react';
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";
export default function App(){
    const {isLoading,user} = useAuth0();
    return(
        <div>
            {isLoading && (<p>Loading...</p>)}
            <p>This is App components</p>
            <button onClick={e => console.log(user)}>
                Console log user
            </button>
            <LoginButton />
            <LogoutButton/>
        </div>
    )
}