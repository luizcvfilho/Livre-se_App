import styled from 'styled-components/native'

export const Screen = styled.View`
    flex: 1;
    overflow-y: scroll;
`

export const BackArrow = styled.Image`
    position: relative;
    width: 34px;
    height: 34px;
    left: 8px;
    top: 39px;
`

export const TitlePage = styled.Text`
    position: relative;
    width: 233px;
    height: 23px;
    left: 79px;
    top: 10px;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
`

export const RateText = styled.Text`
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
`

export const RatingBar = styled.View`
    width: 85px;
    height: 17px;
    display: flex;
    flex-direction: row;
`

export const RatingStar = styled.Image`
    height: 16px;
    width: 17px;
`

export const RateSection = styled.View`
    margin-left: 20px;
    height: 40px;
    width: 45%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`

export const RateSmallSection = styled.View`
    height: 40px;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    justify-content: center;
`

export const RateSmallSectionText = styled.Text`
    font-weight: 300;
    font-size: 11px;
    line-height: 13px;
    color: #000000;
`

export const PageText = styled.Text`
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    margin-left: 20px;
    margin-top: 30px;
`
