import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { irLogin } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";

const useRequestPostList = (token) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);

    const params = {
        page: 1,
        size: 100
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: token
            },
            params
        }).then((res) => {
            setPosts(res.data);
            setLoading(res.data);
        }).catch((err) => {
             setLoading(false);
            irLogin(navigate);
        });
     }, [])

     return [posts, loading]
    }

export default useRequestPostList;