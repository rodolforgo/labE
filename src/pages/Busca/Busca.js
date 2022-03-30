import React from "react";
import { useState } from "react";
import * as S from "../../constants/styled";
import * as C from "../Feed/ListaPosts/styled";
import useRequestPostList from "../../hooks/useRequestListPost";
import Header from "../../components/Header/Header";
import { Input, Tooltip, Typography } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import DadosPosts from "../../components/DadosPosts/DadosPost";
import { verificarData, verificarHora } from "../../constants/verificarDataHora";
import moment from "moment";
import "moment/locale/pt-br";

const Busca = () => {
    const token = localStorage.getItem('token');
    const [posts, loading] = useRequestPostList(token);
    const [busca, setBusca] = useState("");

    const buscar = (event) => {
        setBusca(event.target.value);
    }

    const resultadoBusca = posts && Object.values(posts).filter((item, id) => {
        return item.title.toUpperCase().includes(busca.toUpperCase()) || item.username.toUpperCase().includes(busca.toUpperCase()) || item.body.toUpperCase().includes(busca.toUpperCase())
    }).map((item, id) => {
        return <div key={id}>
            <S.Card style={{ width: "100vw" }}>
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
            <DadosPosts item={item} />
        </div>
    })


    return (
        <S.Container>
            <S.Main>
                <Header />
                <Input placeholder="Pesquise por autor, título ou conteúdo" allowClear value={busca} onChange={buscar}
                    suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                    style={{ marginBottom: "20px" }} />

                {busca !== "" && resultadoBusca}
            </S.Main>

        </S.Container>
    )
}

export default Busca;