import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    position: sticky;
    top: 0;
    background-color: #fcfcfc;
    z-index: 99;
    border-bottom: ${props => props.border ? "1px solid #dadada;" : "none"};

    h1 {
        font-size: 20px;
    }
`
