import styled from "styled-components/native";

export const Screen = styled.View`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const BackArrow = styled.Image`
    position: absolute;
    width: 34px;
    height: 34px;
    left: 8px;
    top: 39px;
`

export const TitlePage = styled.Text`
    position: absolute;
    width: 233px;
    height: 23px;
    left: 79px;
    top: 44px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
`

export const CardsContainer = styled.View`
    height: 80%;
    width: 80vw;
    align-items: center;
`