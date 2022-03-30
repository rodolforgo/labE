import { Spin } from "antd"
import * as C from "./styled";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
    return (
            <C.Loading>
                <Spin indicator={antIcon} />
            </C.Loading>
    )
}

export default Loading;