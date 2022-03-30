import React from "react";
import { useState, useEffect } from "react";
import * as S from "../../constants/styled";
import * as C from "./styled"
import { MessageOutlined, LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from "@ant-design/icons";
import { Divider } from "antd";
import { changeVote, createVote, deleteVote } from "../../services/votacao";
import { useNavigate, useLocation } from "react-router-dom";
import { irPosts } from "../../routes/cordinator";

const DadosPosts = (props) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [statusLike, setStatusLike] = useState(0);
    const [votos, setVotos] = useState("");
    const id = props.item.id;
    const userVote = props.item.userVote;
    const location = useLocation();

    useEffect(() => {
        verificarVoto();
    }, [id, props.atualizar]);

    const verificarVoto = () => {
        setVotos(props.item.voteSum || 0);
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
            createVote(token, id, votos, setVotos, setStatusLike);
        } else if (statusLike === 1) {
            deleteVote(token, id, votos, setVotos, setStatusLike, "like-dislike");
        } else if (statusLike === -1) {
            deleteVote(token, id, votos, setVotos, setStatusLike, 1)
        }
    }

    const votarDislike = () => {
        if (statusLike === 0) {
            changeVote(token, id, votos, setVotos, setStatusLike);
        } else if (statusLike === 1) {
            deleteVote(token, id, votos, setVotos, setStatusLike, -1);
        } else if (statusLike === -1) {
            deleteVote(token, id, votos, setVotos, setStatusLike, "dislike-like");
        }
    }
    return (
        <S.CardBottom>
            <C.PostDados>
                {statusLike === 1 ? <LikeFilled onClick={votarLike} /> : <LikeOutlined onClick={votarLike} />}
                {votos}
                {statusLike === -1 ? <DislikeFilled onClick={votarDislike} /> : <DislikeOutlined onClick={votarDislike} />}
            </C.PostDados>
            <C.PostDados>
                {location.pathname.includes("/post") ? "" : <div>
                    <Divider type="vertical" />
                    <MessageOutlined onClick={() => irPosts(navigate, props.item.id)} />
                    {props.item.commentCount}
                </div>}
            </C.PostDados>
        </S.CardBottom>
    )
}

export default DadosPosts;