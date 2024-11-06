import React, {FormEvent, useEffect, useState} from 'react';
import {authenticateUser} from "../../services/authentication/authentication.service.ts";
import {useNavigate} from "react-router";

const LoginPage: React.FC = () => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState<{accessToken: string, roleToken: string}>();
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const password = e.currentTarget.inpPassword.value;
        const username = e.currentTarget.username.value;



        authenticateUser(username, password).then(v => {
                localStorage.setItem('roleToken', v.roleToken)
                setAccessToken(v);

        }
        ).catch(error => alert("User not found! \n" + error));
    }

    useEffect(() => {
        if (accessToken){
            navigate(`/feed/${accessToken.accessToken}`);
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleLogin(e)}>
                <label htmlFor="username">Username: </label>
                <br/>
                <input type={"text"} className={"username"} placeholder={"guestUser"} id={"username"}/>
                <br/>
                <label>Password: </label>
                <br/>
                <input type={"password"} className={"inpPassword"} placeholder={"password123"} id={"inpPassword"}/>
                <br/>
                <button type={"submit"}>Login</button>
            </form>

        </div>
    );
};

export default LoginPage;