import { View } from "react-native";
import { BackArrow, ButtonText, Container, DescText, EnterButton, InputBar, InputBarImage, Logo, Screen, TextView, Title, Type, TypeBars } from "./style";

export default function NewPasswordScreen(){
    return(
        <Screen>
            <BackArrow source={require("../../assets/BackArrow.svg")}/>
            <Logo source={require("../../assets/Logo.png")}/>
            <Container>
                <Title>Recuperar Senha</Title>
                <TextView>
                    <DescText>Código veriricado com sucesso</DescText>
                    <TypeBars>
                        <InputBar>
                                <InputBarImage source={require("../../assets/PasswordIcon.svg")}/>
                                <Type placeholder="Nova Senha"></Type>
                        </InputBar>
                        <InputBar>
                                <InputBarImage source={require("../../assets/PasswordIcon.svg")}/>
                                <Type placeholder="Confirmar Nova Senha"></Type>
                        </InputBar>
                    </TypeBars>
                </TextView>
                <EnterButton>
                    <ButtonText>Confirmar</ButtonText>
                </EnterButton>
            </Container>
        </Screen>
    );
}
