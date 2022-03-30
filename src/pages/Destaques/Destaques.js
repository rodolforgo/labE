import React from "react";
import * as S from "../../constants/styled";
import * as C from "../Feed/ListaPosts/styled";
import useRequestPostList from "../../hooks/useRequestListPost";
import Header from "../../components/Header/Header";
import { Tooltip, Typography, Tabs } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Loading from "../../components/Loading/Loading";
import DadosPosts from "../../components/DadosPosts/DadosPost";
import { verificarData, verificarHora } from "../../constants/verificarDataHora";
import Footer from "../../components/Footer/Footer";
import moment from 'moment';
import 'moment/locale/pt-br';

const Destaques = () => {
    const token = localStorage.getItem('token');
    const [posts, loading] = useRequestPostList(token);

    const ordenarPorVoto = () => {
        const listaOrdenada = posts && Object.values(posts).sort(function compare(a, b) {
            if (a.voteSum < b.voteSum) return 1;
            if (a.voteSum > b.voteSum) return -1;
            return 0;
        })
        const listaTop = Object.values(listaOrdenada).filter((item, id) => {
            if (id < 5) {
                return item;
            }
        });
        return listaTop;
    }
    const ordenarPorComentario = () => {
        const listaOrdenada = posts && Object.values(posts).sort(function compare(a, b) {
            if (a.commentCount < b.commentCount) return 1;
            if (a.commentCount > b.commentCount) return -1;
            return 0;
        })
        const listaTop = Object.values(listaOrdenada).filter((item, id) => {
            if (id < 5) {
                return item;
            }
        });
        return listaTop;
    }

    const listaCurtidas = ordenarPorVoto().map((item, id) => {
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
            <DadosPosts item={item} />
        </div>
    })

    const listaComentarios = ordenarPorComentario().map((item, id) => {
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
            <DadosPosts item={item} />
        </div>
    })

    return (
        <S.Container>

            <S.Main>
                <Header />

                {loading === true && <Loading />}
                {loading !== true &&
                    <Tabs defaultActiveKey="1" centered>
                        <Tabs.TabPane tab="Mais curtidas" key="1">
                            {listaCurtidas}
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Mais comentadas" key="2">
                            {listaComentarios}

                        </Tabs.TabPane>
                    </Tabs>
                }
                <Footer />
            </S.Main>

        </S.Container>
    )
}

export default Destaques;