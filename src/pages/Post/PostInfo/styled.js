import styled from "styled-components";

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    width: 100%;
`

export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Divisao = styled.div`
    p {
    display: flex;
    flex-direction: row;
    padding-right: 10px;
    max-width: 64ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    p:before, p:after{
    padding-left: 10px;
    content: "";
    flex: 1 1;
    border-bottom: 1px solid #dadada;
    margin: auto;
    }
`

export const Paginas = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`
