import axios from "axios";
import { BASE_URL } from "../constants/url.js";
import { enviarNotificacao } from "../constants/enviarNotificacao";

export const createVoteComment = (token, id, votos, setVotos, setStatusLike) => {
    const body = {
        direction: 1
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setVotos(parseInt(votos) + 1);
            setStatusLike(1)
        })
        .catch((err) => {
            enviarNotificacao("error", err.response.data);
        })
}

export const changeVoteComment = (token, id, votos, setVotos, setStatusLike) => {
    const body = {
        direction: -1
    }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setVotos(parseInt(votos) - 1);
            setStatusLike(-1);
        })
        .catch((err) => {
            enviarNotificacao("error", err.response.data);
        })
}

export const deleteVoteComment = (token, id, votos, setVotos, setStatusLike, atualizarLike) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            if (atualizarLike === 1) {
                const votosAtualizados = (parseInt(votos) + 1);
                setStatusLike(1);
                createVoteComment(token, id, votosAtualizados, setVotos, setStatusLike);
            } else if (atualizarLike === -1) {
                setStatusLike(-1);
                const votosAtualizados = (parseInt(votos) + -1);
                changeVoteComment(token, id, votosAtualizados, setVotos, setStatusLike);
            } else if (atualizarLike === "like-dislike") {
                setVotos(parseInt(votos) - 1);
                setStatusLike(0);
            } else if (atualizarLike === "dislike-like") {
                setVotos(parseInt(votos) + 1);
                setStatusLike(0);
            }

        })
        .catch((err) => {
            enviarNotificacao("error", err.response.data);
        })
}