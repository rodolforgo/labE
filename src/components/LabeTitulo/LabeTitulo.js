import { Destaque } from "./styled";
import { irHome } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";

const LabeTitulo = () => {
    const navigate = useNavigate();
    
    return (
        <Destaque onClick={() => irHome(navigate)}>
            <h1>Lab<span>E</span>.</h1>
        </Destaque>
    )
}

export default LabeTitulo;