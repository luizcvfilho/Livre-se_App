import styled from "styled-components/native";

export const Screen= styled.View`
overflow-y: scroll;
`

export const Logo = styled.Image`
    width: 270px;
    height: 270px;
    position: absolute;
    left: 58px;
    top: 149px;
`

export const BackArrow = styled.Image`
    position: absolute;
    width: 34px;
    height: 34px;
    left: 8px;
    top: 39px;
`

export const Container = styled.View`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    position: absolute;
    width: 340px;
    height: 290px;
    left: 26px;
    top: 400px;
    background: #8EC3B0;
    border-radius: 5px;
    font-family: 'Inter';
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
`

export const Title = styled.Text`
    color: white;
    font-size: 32px;
    text-align: center;
`

export const DescText = styled.Text`
    font-size: 14px;
    line-height: 21px;
    color: #58625E;
    text-align: center;
`

export const InputBar = styled.View`
    width: 308px;
    height: 38px;
    background-color: white;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Type = styled.TextInput`
    width: 275px;
    height: 38px;
    background-color: white;
    border-radius: 5px;
    font-size: 15px;
`

export const TypeBars = styled.View`
    height: 95px;
    justify-content: space-between;
`

export const InputBarImage = styled.Image`
    width: 24px;
    height: 24px;
`

export const ButtonText = styled.Text`
    font-size: 24px;
    color: #58625E;
`

export const EnterButton = styled.TouchableOpacity`
    background-color: white;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    bottom: 10px;
`

export const TextView = styled.View`
    bottom: 15px;
    height: 135px;
    align-items: center;
    justify-content: space-between;
`