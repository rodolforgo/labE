import { Destaque } from "./styled";
import { irFeed } from "../../routes/cordinator";
import { useNavigate } from "react-router-dom";

const LabeTituloHeader = () => {
    const navigate = useNavigate();
    
    return (
        <Destaque onClick={() => irFeed(navigate)}>
            <h1>Lab<span>E</span>.</h1>
        </Destaque>
    )
}

export default LabeTituloHeader;