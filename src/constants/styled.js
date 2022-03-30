import styled from "styled-components";

export const Titulo = styled.h2`
    background-color: #6b6b6b;
    color white;
    padding: 5px;
`

export const Centralizado = styled.div`
    width: 350px;
    text-align: center;
`

export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh; 
    display: flex;
    justify-content: center;
    background-color: #fcfcfc;

`

export const Main = styled.div`
    width: 500px;

    @media (max-width: 600px) {
         width: 100vw; 
`

export const MainContainer1 = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const MainContainer2 = styled.div`
    margin-top: 100px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Link = styled.span`
    cursor: pointer;
    font-style: italic;
`

export const Card = styled.div`
    background-color: white;
    width: 100%;
    border: 1px solid #dadada;
    padding: 10px;
    max-width: 500px;
`

export const CardBottom = styled.div`
    background-color: white;
    width: 100%;
    border-bottom: 1px solid #dadada;
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
    padding: 10px;
    display: flex;
    justify-content: end;
    margin-bottom: 30px;
`
