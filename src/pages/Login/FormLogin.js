import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Form, Input, Button } from "antd";
import { login } from "../../services/acesso";

const FormLogin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, onChange, clear] = useForm({
        email: "",
        password: ""
    });

    const enviarLogin = (event) => {
        event.preventDefault();
        const body = {
            email: form.email,
            password: form.password
        }
        login(body, clear, navigate, setLoading);
    };

    return (
        <div>
            <form onSubmit={enviarLogin}>
                               <Form.Item label="E-mail">
                    <Input name="email" value={form.email} onChange={onChange} type="email" required />
                </Form.Item>

                <Form.Item label="Senha">
                    <Input.Password name="password" value={form.password} onChange={onChange} type="password" pattern={"^.{8,30}"} title={"Mín. de caractes: 8, máximo: 30."} required />
                </Form.Item>

                <Button type="primary" htmlType="submit" loading={loading}>
                    Entrar
                </Button>
            </form>
        </div>
    );
};

export default FormLogin;