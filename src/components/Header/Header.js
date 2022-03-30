import LabeTituloHeader from "../LabeTitulo/LabeTitulo";
import * as C from "./styled";
import { useState } from "react";
import { Tooltip, Button, Popconfirm } from "antd";
import { SearchOutlined, EditOutlined, StarOutlined, LogoutOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from "react-router-dom";
import { irBusca, irDestaques, irHome, irNovoPost } from "../../routes/cordinator";

const Header = (props) => {
    const navigate = useNavigate();
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    window.addEventListener("scroll", function (event) {
        const scroll = window.scrollY;
        if (scroll < 10) {
            setScroll(false)
        } else {
            setScroll(true);
        }
    });

    const abrirPostar = () => {
        window.scrollTo(0, 0);
        props.setPostar(!props.postar);
    }

    const logout = () => {
        localStorage.removeItem("token");
        irHome(navigate);
    }

    return (
        <C.Header border={scroll}>
            <LabeTituloHeader />
            <div>
                <Tooltip title="Postar" >
                    {location.pathname === "/feed" ?
                        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: "5px" }} onClick={abrirPostar} />
                        :
                        <Button type="primary" shape="circle" icon={<EditOutlined />} style={{ marginRight: "5px" }} onClick={() => irNovoPost(navigate)} />}
                </Tooltip>

                <Tooltip title="Destaques">
                    <Button type="primary" shape="circle" icon={<StarOutlined />} onClick={() => irDestaques(navigate)} style={{ marginRight: "5px" }} />
                </Tooltip>

                <Tooltip title="Busca">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={() => irBusca(navigate)}  />
                </Tooltip>          
            </div>
    
            <Popconfirm title="Confirma a saída?" okText="Sim" cancelText="Não" onConfirm={logout}>
                <Tooltip title="Sair">
                    <Button shape="circle" icon={<LogoutOutlined />} size="small" />
                </Tooltip>
            </Popconfirm>
        </C.Header>
    )
}

export default Header;