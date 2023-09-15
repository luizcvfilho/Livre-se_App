import styled from "styled-components/native";

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

export const Screen = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    overflow-y: scroll;
`

export const ProfilePicContainer = styled.View`
    width: 80%;
    height: 80px;
    margin-top: 90px;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`

export const EditProfileContainer = styled.View`
    width: 154px;
    height: 31px;
    background-color: #8EC3B0;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`

export const EditProfileText = styled.Text`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: white;
`

export const ProfilePicElipse = styled.Image`
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 50%;
    border: 1px;
    border-color: black;
`

export const ProfileInfoContainer = styled.View`
    width: 356px;
    height: 564px;
    background: #8EC3B0;
    border-radius: 5px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 5px;
`

export const ProfileInfoText = styled.Text`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`

export const InfoBar = styled.View`
    width: 291px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InfoBarText = styled.Text`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.63);
    margin-left: 10px;
`

export const InfoBarIcons = styled.Image`
    width: 20px;
    height: 20px;
    margin-left: 15px;
`