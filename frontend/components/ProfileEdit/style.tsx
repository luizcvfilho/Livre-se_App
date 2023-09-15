import styled from "styled-components/native";



export const Header = styled.View`
height: 40px;
width: 100%;
background-color: #8EC3B0;
margin-top: 39px;
display: flex;
flex-direction: row;
`

export const BackButton=styled.TouchableOpacity`
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




export const ChangeProfilePht = styled.View`
width: 100%;
height: 20%;
display:flex;
align-items: center;
justify-content: space-evenly;
margin-top: 48px;
`

export const UserPht = styled.Image`
height: 120px;
width: 120px;
border-radius: 50%;
border: 2px;
`

export const ChangePhtText = styled.Text`
font-size: 20;
color:#8EC3B0;
text-decoration: underline #5DC0A8;
`




export const EditFormBox = styled.View`
width:100%;
display:flex;
align-items: center;
justify-content: center;
`

export const Icon = styled.Image`
width: 24px;
height: 24px;
position: absolute;
margin-left: 14px;
align-self: flex-start;
`



export const ChangePasswordBox = styled.View`
height: 150px;
width:87.6%;
margin: auto;
background-color:#4BC8B1;
border-radius: 5;
border: 2px;
`

export const EditPasswordTxt = styled.Text`
font-size: 16;
font-weight: 600;
color: white;
align-self:flex-end;
margin-bottom: 10px;
`

