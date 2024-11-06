import axios from "axios";
import {IPost} from "../../interfaces/post.interface.ts";

export const authenticateUser = async (username: string, password: string): Promise<string> => {
    const response = await axios.post('http://localhost:3000/login', {
        username, password
    })

    return response.data;
}

export const getPosts = async (token: string):Promise<IPost[]> => {
    const response = await axios.get("http://localhost:3000/posts", {
        headers: {
            Authorization: "Bearer " + token,
        }
    })

    return response.data as IPost[];
}