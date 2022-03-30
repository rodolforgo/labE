import { useState } from "react";
import { useParams } from "react-router-dom";
import useRequestComment from "../../hooks/useRequestComment";
import * as S from "../../constants/styled";
import { Comment, Avatar, Tooltip, Typography } from "antd";
import moment from 'moment';
import 'moment/locale/pt-br';
import { verificarData, verificarHora } from "../../constants/verificarDataHora";
import DadosComentarios from "../../components/DadosComentarios/DadosComentarios";
import AdicionarComentario from "../../components/AdicionarComentario/AdicionarComentario";

moment.locale();

const Comentarios = () => {
    const params = useParams();
    const id = params.id;
    const token = localStorage.getItem('token');
    const [atualizar, setAtualizar] = useState(false);
    const [comentarios, loadingComentarios] = useRequestComment(token, id, atualizar);

    const listaComentarios = comentarios.length > 0 && comentarios.map((comentario, id) => {
        return <Comment
            key={id}
            actions={[<DadosComentarios dados={comentario} />]}
            author={<Typography.Text strong>{comentario.username}</Typography.Text>}
            avatar={<Avatar size="small" style={{ backgroundColor: "gray" }}>{comentario.username[0]}</Avatar>}
            content={
                <p>
                    {comentario.body}
                </p>
            }
            datetime={
                <Tooltip title={`${verificarHora(comentario.createdAt)} ${verificarData(comentario.createdAt)}`}>
                    <span>{(moment(comentario.createdAt).fromNow())}</span>
                </Tooltip>
            }

        />
    })

    return (
        <>

            {loadingComentarios === false && comentarios.length === 0 && <>
                <AdicionarComentario id={id} atualizar={atualizar} setAtualizar={setAtualizar} />
            <S.Card> <p style={{ textAlign: "center", margin: "0" }}>Seja a primeira pessoa a comentar nesta postagem.</p> </S.Card> </>}
            {comentarios.length > 0 && <>
                <AdicionarComentario id={id} atualizar={atualizar} setAtualizar={setAtualizar} />
                <S.Card><div>{listaComentarios}</div></S.Card> </>}
        </>
    )

}

export default Comentarios;