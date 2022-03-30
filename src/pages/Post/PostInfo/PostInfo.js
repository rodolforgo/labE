import * as S from "../../../constants/styled";
import * as C from "./styled";
import useRequestPostList from "../../../hooks/useRequestListPost";
import { UserOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import { verificarData, verificarHora } from "../../../constants/verificarDataHora";
import Loading from "../../../components/Loading/Loading";
import DadosPosts from "../../../components/DadosPosts/DadosPost";

const PostInfo = (props) => {
    const id = props.id;
    const token = localStorage.getItem('token');
    const [posts, loading] = useRequestPostList(token);

    const postInfo = posts.length > 0 && posts.filter((post) => {
        return post.id === id;
    })

    const post = postInfo && postInfo[0];


    return (
        <div>
            {loading === true && <Loading />}
            {posts.length > 0 && <>
                <S.Card>
                    <C.PostInfo>
                        <C.PostHeader>
                            <Typography.Text strong style={{ color: "gray" }}>
                                <UserOutlined style={{ color: "#acacac", marginRight: "5px" }} />
                                {post.username}
                            </Typography.Text>
                            <div style={{ fontSize: "12px" }}>
                                <Typography.Text> {verificarHora(post.createdAt)} </Typography.Text>
                                <Divider type="vertical" />
                                <Typography.Text> {verificarData(post.createdAt)} </Typography.Text>
                            </div>
                        </C.PostHeader>
                        <C.Divisao>
                            <p><Typography.Text strong style={{ marginRight: "10px", marginLeft: "10px" }}>{post.title}</Typography.Text></p>
                        </C.Divisao>
                        <p>{post.body}</p>
                    </C.PostInfo >
                </S.Card>
                <DadosPosts item={post} />
            </>
            }
        </div>
    )
}

export default PostInfo;