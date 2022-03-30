import React from "react";
import { useState } from "react";
import * as S from "../../../constants/styled";
import * as C from "./styled"
import useRequestPost from "../../../hooks/useRequestPost";
import DadosPosts from "../../../components/DadosPosts/DadosPost";
import { UserOutlined } from "@ant-design/icons";
import { Typography, Pagination, Tooltip } from "antd";
import { verificarData, verificarHora } from "../../../constants/verificarDataHora";
import Loading from "../../../components/Loading/Loading";
import moment from 'moment';
import 'moment/locale/pt-br';

const ListaPosts = (props) => {
    const token = localStorage.getItem('token');
    const [pagina, setPagina] = useState(1);
    const [posts, loading] = useRequestPost(token, props.atualizar, pagina);

    const onChange = (page) => {
        setPagina(page);
        window.scrollTo(0, 0);
    }

    const listarPosts = posts.length > 0 && posts.map((item, id) => {
        return <div key={id}>
            <S.Card>
                <C.PostInfo>
                    <C.PostHeader>
                        <Typography.Text strong style={{ color: "gray" }}>
                            <UserOutlined style={{ color: "#acacac", marginRight: "5px" }} />
                            {item.username}
                        </Typography.Text>
                        <div style={{ fontSize: "12px" }}>
                            <Tooltip title={`${verificarHora(item.createdAt)} ${verificarData(item.createdAt)}`}>
                                <span>{(moment(item.createdAt).fromNow())}</span>
                            </Tooltip>
                        </div>
                    </C.PostHeader>
                    <C.Divisao>
                        <p><Typography.Text strong style={{ marginRight: "10px", marginLeft: "10px" }}>{item.title}</Typography.Text></p>
                    </C.Divisao>
                    <p>{item.body}</p>
                </C.PostInfo >
            </S.Card>
            <DadosPosts item={item} atualizar={props.atualizar} />
        </div>
    })

    return (
        <>
            {loading === true && <Loading />}
            {posts && listarPosts}

            {loading !== true && (
                <C.Paginas>
                    <Pagination current={pagina} onChange={onChange} total={50} size="small" />
                </C.Paginas>
            )}
        </>
    )
}

export default ListaPosts;