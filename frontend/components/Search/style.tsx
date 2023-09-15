import styled from "styled-components/native"



export const Card = styled.TouchableOpacity`
background-color: #4C8996;
height: 128px;
width: 374px;
border-radius: 5;
margin-bottom:18px;
display: flex;
flex-direction: row;
justify-content: center;

`
export const PdtImgBox = styled.View`
height:100%;
width: 128px;
display: flex;
align-items: center;
background-color: #BCEAD5;
border-radius: 5;
`

export const PdtImg = styled.Image`
display: flex;
align-items: center;
height:128px;
width:85px;
`

export const InfoTable = styled.View`
display:flex;
align-items: flex-start;
margin-left: 15px;
width: 63%;
height:100%;
`

export const PdtName = styled.Text `
font-size: 16;
font-weight: 500;
margin-top:10px;
margin-left: 31px;
width: 200px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`

export const PdtOldPrice = styled.Text`
font-size: 16;
color: #A5A5A5;
text-decoration: line-through #A5A5A5;
margin-top: 25px ;
`

export const PdtPrice = styled.Text`
font-size: 20;
color: #8EC3B0;
position: absolute;
margin: 63px 0px 41px 31px; 
`

export const PdtCondition = styled.Text`
font-size: 16;
font-weight: 500;
margin:101px 0 0 31px;
position: absolute;
`