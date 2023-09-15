import styled from "styled-components/native";


export const Screen = styled.View`
`

export const Container = styled.View`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
    position: absolute;
    left: 24px;
    top: 398px;
    width: 340px;
    height: 320px;
    display: flex;
    flex-direction: column;
    background-color: #8EC3B0;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    font-family: 'Inter';
`;

export const Title = styled.Text`
    color: white;
    font-size: 32px;
`
export const Logo = styled.Image`
    width: 270px;
    height: 270px;
    position: absolute;
    left: 58px;
    top: 149px;
`

export const Type = styled.TextInput`
    width: 275px;
    height: 38px;
    background-color: white;
    border-radius: 5px;
    font-size: 15px;
`
export const TypeBars = styled.View`
    height: 100px;
    justify-content: space-between;
`

export const ForgotPassword = styled.TouchableOpacity`
    position: relative;
    bottom: 15px;
    right: 75px;
    width: 150px;
    height: 21px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #58625E;
`

export const EnterButton = styled.TouchableOpacity`
    background-color: white;
    width: 200px;
    height: 50px;
    align-items: center;
    justify-content: center;
    bottom: 20px;
    border-radius: 5px;
`

export const LoginButton = styled.TouchableOpacity`
    background-color: white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
`

export const Nav = styled.View`
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    width: 150px;
    bottom: 20px;
`

export const SocialImage = styled.Image`
    width: 40px;
    height: 40px;
`

export const BackButton = styled.TouchableOpacity`
left: 8px;
top: 39px;
position: absolute;
`

export const BackArrow = styled.Image`
    width: 34px;
    height: 34px;
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

export const InputBarImage = styled.Image`
    width: 24px;
    height: 24px;
`

export const ButtonText = styled.Text`
    font-size: 24px;
    color: #58625E;
`