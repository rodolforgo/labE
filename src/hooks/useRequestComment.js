import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";

const useRequestComment = (token, id, atualizar) => {
    const [comentarios, setComentarios] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/posts/${id}/comments`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            setComentarios(res.data)
            setLoading(false);
        }).catch((err) => {
             setLoading(false);
        });
     }, [atualizar])

     return [comentarios, loading]
    }

export default useRequestComment;