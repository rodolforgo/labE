import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { irHome } from "../routes/cordinator";
import { useNavigate } from "react-router-dom";

const useRequestPost = (token, atualizar, pagina) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(false);

    const params = {
        page: pagina,
        size: 6
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
             localStorage.removeItem("token");
             irHome(navigate);   
        });
     }, [atualizar, pagina])

     return [posts, loading]
    }

export default useRequestPost;