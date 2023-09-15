import styled from 'styled-components/native'

export const CommentSection = styled.View`
    margin-top: 10px;
    position: relative;
    align-self: center;
    height: auto;
    width: 90%;
`

export const ProfilePic = styled.Image`
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: white;
    border: 1px;
    border-color: black;
`

export const NameText = styled.Text`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin-left: 10px;
`

export const ProfileInfo = styled.View`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    align-items: center;
`

export const FirstSection = styled.View`
    display: flex;
    flex-direction: row;
    height: 30px;
    width: 90%;
    align-items: center;
    justify-content: space-between;
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

export const CommentTextSection = styled.View`
    position: relative;
    height: auto;
    width: 90%;
    align-self: flex-end;
`

export const CommentText = styled.Text`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

export const TrashBox = styled.View`
    position: absolute;
    width: 18px;
    height: 18px;
    left: 325px;
    top: 5px;
    background: #D9D9D9;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    align-items: center;
    justify-content: center;
`

export const TrashIcon = styled.Image`
    width: 10px;
    height: 12px;
`