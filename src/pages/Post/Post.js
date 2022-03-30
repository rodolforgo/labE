import { useParams } from "react-router-dom";
import * as S from "../../constants/styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PostInfo from "./PostInfo/PostInfo";
import Comentarios from "./Comentarios";

const Posts = () => {
    const params = useParams();
    const id = params.id;

    return (
        <S.Container>
            <S.Main>
                <Header />
                    <PostInfo id={id} />
                    <Comentarios />
                <Footer />
            </S.Main>

        </S.Container>
    )

}

export default Posts;