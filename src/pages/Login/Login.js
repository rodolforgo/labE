import React from "react";
import { useNavigate } from "react-router-dom";
import { irCadastro } from "../../routes/cordinator";
import * as S from "../../constants/styled";
import LabeTitulo from "../../components/LabeTitulo/LabeTitulo";
import FormLogin from "./FormLogin";
import { Typography } from "antd";

const Login = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Main>
                <S.MainContainer2>
                    <S.Centralizado>
                        <LabeTitulo />
                    </S.Centralizado>
                    <S.Centralizado>
                        <Typography.Title level={5}>Faça o login ou crie uma <S.Link onClick={() => irCadastro(navigate)}>nova conta</S.Link>.</Typography.Title>
                        <FormLogin />
                    </S.Centralizado>

                </S.MainContainer2>
            </S.Main>
        </S.Container>
    )
}

export default Login;