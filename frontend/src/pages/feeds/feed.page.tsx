import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/user.interface.ts";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {getUserFromToken} from "../../services/jwt/jwt.service.ts";
import {getPosts} from "../../services/authentication/authentication.service.ts";
import {IPost} from "../../interfaces/post.interface.ts";

const FeedPage: React.FC = () => {

    const [user, setUser] = useState<IUser>();
    const params = useParams()
    const [posts, setPosts] = useState<IPost[]>();

    useEffect(() => {
        setUser(getUserFromToken(params.accessToken || ""));
        const roleToken = localStorage.getItem('roleToken');
        getPosts({accessToken: params.accessToken || "", roleToken: roleToken || ""}).then(result => setPosts(result));
    }, []);

    return (
        <div>
            <h1>Hello {user?.username} <span>👋🏻</span></h1>
            <div style={{display:"flex", width: "70%", margin: "auto"}}>
                <div style={{flex: 1}}><Link to={"/profile?accessToken="+params.accessToken || ""}><button>Show Profile</button></Link></div>
                <div style={{flex: 1}}><Link to={"/login"}><button>Logout</button></Link></div>
            </div>
            <h2>Your Feed</h2>
            <table>
                <thead style={{fontWeight: "bold"}}>
                    <tr>
                        <td>User</td>
                        <td>Message</td>
                        <td>Date Created</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts?.map(p =>
                            <tr>
                            <td>{p.username}</td>
                            <td>{p.msg}</td>
                            <td>{new Date(p.postedAt).toLocaleString()}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FeedPage;