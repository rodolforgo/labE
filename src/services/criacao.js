import axios from "axios";
import { BASE_URL } from "../constants/url.js";
import { enviarNotificacao } from "../constants/enviarNotificacao";
import { irFeed } from "../routes/cordinator.js";

export const createPost = (token, body, clear, setLoading, atualizar, setAtualizar, feed, navigate) => {
    setLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setLoading(false);
            clear();
            enviarNotificacao("success", "Post adicionado com sucesso!");
            if (feed === "irFeed") {
                irFeed(navigate);
            }
            setAtualizar(!atualizar);
        })
        .catch((err) => {
            setLoading(false);
            enviarNotificacao("error", err.response.data);
        })
}

export const createComment = (token, id, body, clear, setLoading, atualizar, setAtualizar) => {
    setLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setLoading(false);
            setAtualizar(!atualizar);
            clear();
            enviarNotificacao("success", "Comentário adicionado com sucesso!");

        })
        .catch((err) => {
            setLoading(false);
            enviarNotificacao("error", err.response.data);
        })
}