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

export const PriceBar = styled.View`
    width: 330px;
    height: 45px;
    background-color: rgba(142, 195, 176, 0.6);
    border-radius: 8px;
    align-items:center;
    margin-top: 50px;
    flex-direction: row;
`

export const PriceText = styled.Text`
    font-size: 16px;
    line-height: 19px;
    margin-left: 10px;
`

export const BuyButtonView = styled.View`
    width: 271px;
    height: 52px;
    border-radius: 15px;
    background: #8EC3B0;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const BuyButtonText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: white;
`