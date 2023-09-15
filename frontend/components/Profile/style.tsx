import styled from "styled-components/native";




export const ProfileBox = styled.View`
margin-top: 84;
width: 87.6%;
height: 180px;
display: flex;
`

export const UpperProfile = styled.View`
width:100%;
height: 72px;
display: flex;
flex-direction: row;
justify-content: space-between;
`

export const ProfilePhoto = styled.Image`
width:72px;
height: 72px;
background-color:red;
border: 2px;
border-radius: 50%;
`
export const ProfileFont = styled.Text`
font-size: 24;
font-weight: 700;
`

export const PointsWallet = styled.View`
width:100%;
height: 150px;
display: flex;
flex-direction: row;
align-items:center;
justify-content: space-between;
`

export const ExitBtn = styled.TouchableOpacity`
height: 40px;
width: 80px;
background-color: #CC2424;
color: white;
font-size: 18;
font-weight: 700;
border-radius: 8;
display: flex;
align-items: center;
justify-content: center;
`




export const OptionsBox = styled.View`
width: 87.6%;
margin-top: 24px;
`

export const Option = styled.Pressable`
height: 51px;
width:100%;
background-color: #8EC3B0;
border-radius:10;
margin-bottom: 16px;
`

export const OptionText = styled.Text`
font-size:16;
font-weight: 700;
margin:auto 16px;
color:white;
`