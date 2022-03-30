import axios from "axios";
import { BASE_URL } from "../constants/url.js";
import { irFeed } from "../routes/cordinator";
import { enviarNotificacao } from "../constants/enviarNotificacao";

export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            irFeed(navigate);
            setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            enviarNotificacao("error", err.response.data);
        })
}

export const cadastro = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            irFeed(navigate);
        })
        .catch((err) => {
            setIsLoading(false)
            enviarNotificacao("error", err.response.data.message);
        })
}