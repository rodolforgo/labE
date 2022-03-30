import React from "react";

import { useNavigate } from "react-router-dom";
import ImagemHome from "../../assets/Comunidade.png"
import * as S from "../../constants/styled";
import * as C from "./styled";
import { irLogin, irCadastro } from "../../routes/cordinator";
import useAuth from "../../hooks/useAuth";

import { Button, Typography } from 'antd';

const HomePage = () => {
    const navigate = useNavigate();
    
    useAuth();

    return (
        <S.Container>
            <S.Main>
                <S.MainContainer1>
                    <S.Centralizado>
                        <Typography.Title level={4}>LabEddit é um agregador social para pessoas sensacionais iguais a você.</Typography.Title>
                    </S.Centralizado>
                    <S.Centralizado>
                        <Button type="primary" block style={{ marginBottom: "5px" }} onClick={() => irCadastro(navigate)}>Inscreva-se</Button>
                        <Typography.Text type="secondary">Já tem conta?</Typography.Text>
                        <Button type="link" size="small" onClick={() => irLogin(navigate)}>Entrar</Button>
                    </S.Centralizado>
                    <C.Imagem src={ImagemHome} />
                    <Typography.Text type="secondary">© 2021 - LabEddit</Typography.Text>
                </S.MainContainer1>
            </S.Main>
        </S.Container>
    )
}

export default HomePage;