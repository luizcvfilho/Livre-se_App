import React from "react";
import { Container, Form, Icon, Logo, Arrow, Screen, Title, ConfirmOpacity } from "./style";
import { StyleSheet} from "react-native";
import { useForm, Controller } from 'react-hook-form'
import { TextInputMask } from 'react-native-masked-text'
import AddPht from "../../components/Register/AddPhoto";
import FormComponent from "../../components/Register/Form";


export default function Register() {

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <Screen>
            <Arrow source={require('../../assets/Voltar Seta.png')} />
            <Logo source={require('../../assets/Logo.jpg')} />
            <Container>
                <Title>Cadastre-se</Title>
                <AddPht/>
                <FormComponent icon={"Icone Email.png"} holder={"E-mail"} />
                <Form>
                    <Icon source={require('../../assets/CPF.png')} />
                    <Controller
                        name='cpf'
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInputMask
                                type={'cpf'}
                                onChangeText={onChange}
                                style={styles.input}
                                value={value}
                                placeholder="CPF"
                                placeholderTextColor='#535353'
                            />
                        )}
                    />
                </Form>
                <FormComponent icon={"Icone Nome.png"} holder={"Nome Completo"}/>
                <Form>
                    <Icon source={require('../../assets/Icone Telefone.png')} />
                    <Controller
                        name='numero'
                        rules={{ required: true }}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInputMask
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99)'
                                }}
                                onChangeText={onChange}
                                style={styles.input}
                                value={value}
                                placeholder="Telefone/Celular"
                                placeholderTextColor='#535353'
                            />
                        )}
                    />
                </Form>
                <FormComponent icon={"Icone Senha.png"} holder={"Senha"}/>
                <FormComponent icon={"Icone Senha.png"} holder={"Confirmar Senha"}/>
                <FormComponent icon={"Icone Ping.png"} holder={"CEP"}/>
                <FormComponent icon={"Icone Ping.png"} holder={"Estado"}/>
                <FormComponent icon={"Icone Ping.png"} holder={"Cidade"}/>
                <FormComponent icon={"Icone Ping.png"} holder={"Endereço Completo"}/>
                <ConfirmOpacity>Corfimar</ConfirmOpacity>
            </Container>
        </Screen>

    );
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500',
        marginLeft: '18px',
        marginTop: '11px',
        marginBottom: '10px',
        paddingLeft: '47px',
        paddingTop: '19px',
        paddingBottom: '19px'
    }
})