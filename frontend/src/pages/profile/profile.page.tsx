import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {IUser} from "../../interfaces/user.interface.ts";
import {getUserFromToken} from "../../services/jwt/jwt.service.ts";

const ProfilePage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const accessToken = searchParams.get("accessToken");

        if (accessToken) {
            setUser(getUserFromToken(accessToken));
        }

    }, []);

    return (
        <div>

            <h1><span>⚙️ </span>Your Profile, {user?.username}</h1>
            <Link to={"/feed/"+searchParams.get("accessToken")}><button>Back</button></Link>
            <form>
                <label>ID </label>
                <br/>
                <input readOnly={true} value={user?.id}/>
                <br/>
                <label>Username: </label>
                <br/>
                <input readOnly={true} value={user?.username}/>
                <br/>
                <label>E-Mail </label>
                <br/>
                <input readOnly={true} value={user?.email}/>
                <br/>
                <label>Role </label>
                <br/>
                <input readOnly={true} value={user?.role}/>

            </form>
        </div>
    );
};

export default ProfilePage;