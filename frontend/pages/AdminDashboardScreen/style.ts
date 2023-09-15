import styled from "styled-components/native";

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
    margin-bottom: 15px;
`

export const PageText = styled.Text`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-top: 30px;
    margin-left: 10px;
    margin-bottom: 20px;
`

export const SearchBarIDView = styled.View`
    position: relative;
    width: 342px;
    height: 41px;
    border-color: black;
    border: 1px;
    border-radius: 5px;
    align-self: center;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
`

export const SearchBarID = styled.TextInput`
    width: 315px;
    height: 41px;
`

export const SearchBarIDIcons = styled.Image`
    width: 17px;
    height: 17px;
`

export const ProfilesContainer = styled.View`
    width: 371px;
    height: 322px;
    background: #4C8996;
    align-self: center;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const EachProfileContainer = styled.View`
    height: 65px;
    width: 65px;
    align-items: center;
    justify-content: space-between;
`

export const ProfilePic = styled.Image`
    background-color: white;
    border-radius: 100%;
    width: 39px;
    height: 39px;
`

export const EditProfileBar = styled.View`
    background-color: #8EC3B0;
    width: 48px;
    height: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`

export const EditProfileText = styled.Text`
    font-weight: 300;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    text-decoration-line: underline;
    color: white;
`

export const HorizontalContainer = styled.View`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const EtcIcon = styled.Image`
    position: relative;
    width: 30px;
    height: 30px;
    align-self: center;
`