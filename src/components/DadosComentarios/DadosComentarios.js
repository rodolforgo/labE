import React from "react";
import { useState, useEffect } from "react";
import * as C from "./styled"
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from "@ant-design/icons";
import { changeVoteComment, createVoteComment, deleteVoteComment } from "../../services/votoComentarios";

const DadosComentarios = (props) => {
    const token = localStorage.getItem('token');
    const [statusLike, setStatusLike] = useState(0);
    const [votos, setVotos] = useState("");
    const id = props.dados.id;
    const userVote = props.dados.userVote;
  
     useEffect(() => {
        verificarVoto();
    }, [props.atualizar]);

    const verificarVoto = () => {
        setVotos(props.dados.voteSum || 0);
        if (userVote === null) {
            setStatusLike(0);
        } else if (userVote === 1) {
            setStatusLike(1);
        } else if (userVote === -1) {
            setStatusLike(-1);
        }
    }

    const votarLike = () => {
        if (statusLike === 0) {
            createVoteComment(token, id, votos, setVotos, setStatusLike);
        } else if (statusLike === 1) {
            deleteVoteComment(token, id, votos, setVotos, setStatusLike, "like-dislike");
        } else if (statusLike === -1) {
            deleteVoteComment(token, id, votos, setVotos, setStatusLike, 1)
        }
    }

    const votarDislike = () => {
        if (statusLike === 0) {
            changeVoteComment(token, id, votos, setVotos, setStatusLike);
        } else if (statusLike === 1) {
            deleteVoteComment(token, id, votos, setVotos, setStatusLike, -1);
        } else if (statusLike === -1) {
            deleteVoteComment(token, id, votos, setVotos, setStatusLike, "dislike-like");
        }
    }
    return (
            <C.PostDados style={{ fontSize: "13px"}}>
                {statusLike === 1 ? <LikeFilled onClick={votarLike} /> : <LikeOutlined onClick={votarLike} />}
                {votos}
                {statusLike === -1 ? <DislikeFilled onClick={votarDislike} /> : <DislikeOutlined onClick={votarDislike} />}
            </C.PostDados>
    )
}

export default DadosComentarios;