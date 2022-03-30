import React from "react";
import { useState } from "react";
import * as S from "../../constants/styled";
import * as C from "./styled";
import ListaPosts from "./ListaPosts/ListaPosts";
import Header from "../../components/Header/Header";
import { Input, Button, Divider, Typography } from "antd";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/criacao";
import Footer from "../../components/Footer/Footer";

import useProtectedPage from "../../hooks/useProtectedPage";

const Feed = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const [loading, setLoading] = useState(false);
    const [postar, setPostar] = useState(false);
    const token = localStorage.getItem('token');
    const [atualizar, setAtualizar] = useState(false);

    useProtectedPage();

    const criarPost = (event) => {
        event.preventDefault();
        const body = {
            title: form.title,
            body: form.body
        }
        createPost(token, body, clear, setLoading, atualizar, setAtualizar)
    }

    return (
        <S.Container>
            <S.Main>
                <Header postar={postar} setPostar={setPostar} />
                {postar &&
                    <form onSubmit={criarPost}>
                        <S.Card>
                            <Input
                                name="title"
                                value={form.title}
                                onChange={onChange}
                                placeholder="Título"
                                bordered={false}
                                required
                                pattern={"^.{3,60}"} title={"Mín. de caractes: 3, máximo: 60."}
                            />

                            <Divider style={{ margin: "0px" }} />
                            <Input.TextArea
                                name="body"
                                value={form.body}
                                onChange={onChange}
                                bordered={false}
                                placeholder="O que você não está pensando?"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                pattern={"^.{3,250}"} title={"Mín. de caractes: 3, máximo: 250."}
                                required
                            />
                        </S.Card>
                        <S.CardBottom>
                            <C.ContagemCaracteres>
                            <Typography.Text type="secondary">{form.body.length}/250</Typography.Text>
                            </C.ContagemCaracteres>
                            <Button size="small" htmlType="submit" loading={loading}>Postar</Button>
                        </S.CardBottom>
                    </form>
                }
                <ListaPosts atualizar={atualizar} />
                <Footer />
            </S.Main>

        </S.Container>
    )
}

export default Feed;