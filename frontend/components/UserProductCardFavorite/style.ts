import styled from "styled-components/native";

export const Card = styled.Pressable`
    width: 340px;
    height: 200px;
    border-radius: 27px;
    background-color: #4C8996;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const CardImage = styled.Image`
    position: relative;
    width: 75px;
    height: 113px;
    left: 30px;
    top: -12px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.37));
`

export const CardText = styled.Text`
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 250px;
`

export const CardTextView = styled.View`
    position: relative;
    left: 30px;
    height: 60px;
    width: 250px;
`

export const IconsContainer = styled.Pressable`
    position: relative;
    left: 300px;
    bottom: 160px;
    height: 160px;
    width: 30px;
    justify-content: space-between;
`

export const IconImage = styled.Image`
    height: 28px;
    width: 30px;
`

export const IconButton = styled.Button`
    height: 28px;
    width: 30px;
`

export const IconPress = styled.Pressable`
    height: 28px;
    width: 30px;
`
