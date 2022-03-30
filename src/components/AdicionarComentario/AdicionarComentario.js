import * as S from "../../constants/styled";
import * as C from "../../pages/Feed/styled";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { Input, Typography, Button } from "antd";
import { createComment } from "../../services/criacao";

const AdicionarComentario = (props) => {
    const token = localStorage.getItem('token');
    const [form, onChange, clear] = useForm({ body: "" });
    const id = props.id;
    const [loading, setLoading] = useState(false);

    const enviarComentario = (event) => {
        event.preventDefault();
        const body = {
            body: form.body
        }
        createComment(token, id, body, clear, setLoading, props.atualizar, props.setAtualizar);
    }

    return (
        <form onSubmit={enviarComentario}>
            <S.Card>
                <Input.TextArea
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    bordered={false}
                    placeholder="Comente com bastante carinho e empatia. :)"
                    autoSize={{ minRows: 2, maxRows: 3 }}
                    pattern={"^.{3,250}"} title={"Mín. de caractes: 3, máximo: 250."}
                    required
                />
            </S.Card>
            <S.CardBottom>
                <C.ContagemCaracteres>
                    <Typography.Text type="secondary">{form.body.length}/250</Typography.Text>
                </C.ContagemCaracteres>
                <Button size="small" htmlType="submit" loading={loading}>Comentar</Button>
            </S.CardBottom>

        </form>
    )
}

export default AdicionarComentario;