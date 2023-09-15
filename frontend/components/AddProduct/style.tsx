import styled from "styled-components/native"


export const Header = styled.View`
height: 40px;
width: 100%;
background-color: #8EC3B0;
margin-top: 39px;
display: flex;
flex-direction: row;
align-items: center;
`

export const BackButton = styled.TouchableOpacity`
margin-left: 8px;
align-self: center;
position: absolute;
`

export const ArrowWhite = styled.Image`
width: 34px;
height: 34px;
`

export const HeaderTitle = styled.Text`
font-size: 18;
font-weight: 500;
color: white;
margin: auto;
`




export const AddPhotoBox = styled.View`
width: 100%;
height: 240px;
background-color: #E8E8E8;
display: flex;
align-items: center;
justify-content:center;
`

export const AddPhotoArea = styled.View`
width: 87%;
height: 87%;
border: dashed #8EC3B0;
display: flex;
align-items: center;
justify-content: center;
`
export const PhotoIcon = styled.Image`
width: 40px;
height: 40px;
margin-top: 37px;
`

export const AddPhotoText = styled.Text`
font-size: 16;
font-weight: 500;
color: #4BC8B1;
margin-top: 41px;
`




export const FormArea = styled.View`
margin-top: 16px;
width: 87%;
height:70px;
`
export const FormTitle = styled.Text`
font-size: 16;
font-weight: 500;
`
export const FormTextInput = styled.TextInput`
width: 100%;
height:50px;
border: 2px #C5C5C5;
border-radius: 5;
font-size: 16;
font-weight: 500;
padding: 10px 8px;
`

export const SelectArrow = styled.Image`
height:16px;
width: 9px;
align-self: flex-end;
position: absolute;
margin: 38px 8px 0 0;
`