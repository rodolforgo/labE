import React from "react";
import { useState } from "react";
import * as S from "../../constants/styled";
import * as C from "../../pages/Feed/styled";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/criacao";

import { Input, Typography, Divider, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NovoPost = () => {
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const postar = (event) => {
        event.preventDefault();
        const body = {
            title: form.title,
            body: form.body
        }
        createPost(token, body, clear, setLoading, "", "", "irFeed", navigate)
    }

    return (
        <S.Container>
            <S.Main>
                <Header />
                <form onSubmit={postar}>
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
                            autoSize={{ minRows: 4, maxRows: 5 }}
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
            </S.Main>
        </S.Container>
    )
}

export default NovoPost;