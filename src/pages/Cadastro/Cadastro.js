import React from "react";
import { useNavigate } from "react-router-dom";
import { irLogin } from "../../routes/cordinator";
import * as S from "../../constants/styled";
import LabeTitulo from "../../components/LabeTitulo/LabeTitulo";
import { Typography } from "antd";
import FormCadastro from "./FormCadastro";

const Cadastro = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Main>
                <S.MainContainer2>
                    <S.Centralizado>
                        <LabeTitulo />
                    </S.Centralizado>
                    <S.Centralizado>
                        <Typography.Title level={5}>Crie sua conta ou faça o <S.Link onClick={() => irLogin(navigate)}>login</S.Link>.</Typography.Title>
                        <FormCadastro />
                    </S.Centralizado>
                </S.MainContainer2>
            </S.Main>
        </S.Container>
    )
}

export default Cadastro;