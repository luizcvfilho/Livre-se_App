import styled from "styled-components/native";

export const Header = styled.View`
height: 40px;
width: 100%;
margin-top: 39px;
display: flex;
flex-direction: row;
`

export const BackButton = styled.TouchableOpacity`
align-self: center;
position: absolute;
`

export const Arrow = styled.Image`
width: 34px;
height: 34px;
`

export const HeaderTitle = styled.Text`
font-size: 24;
font-weight: 500;
margin: auto;
`





export const ProductsContainer = styled.View`
width: 100%;
margin-top: 22px;
display: flex;
align-items: center;
`

export const ProductCard = styled.View`
width:87.6%;
height:154px;
margin-top: 12px;
`

export const ProductImgContainer = styled.View`
width:45%;
position: absolute;
display: flex;
align-items: center;
`

export const ProductImgBox = styled.View`
height:113px;
width: 78px;
display: flex;
align-items: center;
background-color: #BCEAD5;
border-radius: 5;
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.37));
`

export const ProductImg = styled.Image`
height:100%;
width: 80px;
`

export const ProductInfoBox = styled.View`
width: 100%;
height: 140;
background-color: #4C8996;
border-radius: 5;
padding: 15px 0 28px 45%;
margin-top: auto;
display: flex;
justify-content: space-between;
`
export const ProductInfoSection = styled.View`
`

export const ProductInfoText = styled.Text`
font-size: 18;
font-weight: 500;
`

export const ProductEditButton = styled.TouchableOpacity`
width:100px;
height: 32px;
background-color: #8EC3B0;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius:5;
font-size: 18;
font-weight: 500;
`





export const TrashIcon = styled.Image`
width: 24px;
height: 24px;

`

export const DeleteProductBox = styled.View`
height: 150px;
width:87.6%;
margin: auto;
background-color:#366B77;
border-radius: 5;
border: 2px;
`
export const ModalOptions = styled.View`
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: space-evenly;
margin-top: auto;
`

export const ModalButton = styled.TouchableOpacity`
width:100px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color:white;
font-size: 20;
font-weight: 500;
border-radius: 10;
font-family:sans-serif;
margin-bottom: 10px;
`

export const ModalText = styled.Text`
font-size: 24;
font-weight: 500;
margin-bottom: auto;
color:white;
align-self:center;
margin-top: 10px;
`

