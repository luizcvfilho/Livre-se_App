import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, StyleSheet, Modal, Pressable } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ConfirmBtn, ContainerForm, Teste } from "../../pages/ProfileEdit/style";
import userServices from "../../services/userServices";
import { ChangePasswordBox, ChangePhtText, ChangeProfilePht, EditFormBox, EditPasswordTxt, Icon, UserPht } from "./style";



export default function EditForm() {

    interface userInfo {
        name: string;
        phoneNumber: string;
        address: string;
        image: string;
        email: string;
        cpf: string;
    }

    const { control, handleSubmit, formState: { errors } } = useForm();

    const [user, setUser] = useState<userInfo>();

    const [visivel, setVisivel] = useState(false);

    const navigation = useNavigation();


    const onSubmit = (data) => {
        console.log(data)
        navigation.navigate('Profile')
        userServices.updateUser(1, data).then(response => {
        })
    }

    //<----- Descontinuado por um erro desconhecido ----->

    // const getUser = async () => {
    //     const userToken = await AsyncStorage.getItem('token')
    //     return console.log(userToken)
    // }
    // AsyncStorage.setItem('token', 'aaa poha')


    // const TOKEN = () => AsyncStorage.getItem('token').then(res => {
    //     return console.log(res)
    // })
    // async function getToken() {
    //     const help = await AsyncStorage.getItem("token");

    //     if (help){
    //         const helpPelamordedeus = JSON.parse(help)
    //         console.log(helpPelamordedeus)
    //     }
    // }



    //<----- UseEffect sem graça ----->
    // useEffect(() => {
    // if (getToken()) {
    //     userServices.getUserDetails(getToken()).then(response => {
    //         console.log(response?.data)
    //     })
    // }

    // });

    // getToken()

    //     userServices.getUser(1).then(response => (
    //         console.log(response?.data.user),
    //         setUser(response?.data.user)
    //     ))
    // }, [])

    //<----- UseEffect Bolado ----->
    useFocusEffect(
        React.useCallback(() => {
            userServices.getUser(1).then(response => (
                console.log(response?.data.user),
                setUser(response?.data.user)
            ))
            return () => {
                setUser([])
            }
        }, [])
    )


    return (
        <>
            <ChangeProfilePht>
                <UserPht source={{ uri: `${user?.image}` }} />
                <ChangePhtText>Trocar Foto</ChangePhtText>
            </ChangeProfilePht>
            <ContainerForm>
                <Teste>
                    <EditFormBox>
                        <Icon source={require('../../assets/Icone Nome.png')} />
                        <Controller
                            name='name'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    placeholder={user?.name}
                                    placeholderTextColor='#535353'
                                />
                            )}
                        />
                    </EditFormBox>
                    <EditFormBox>
                        <Icon source={require('../../assets/Icone Mail.png')} />
                        <TextInput
                            style={styles.input}
                            value={user?.email}
                            placeholderTextColor='#535353'
                        />
                    </EditFormBox>
                    <EditFormBox>
                        <Icon source={require('../../assets/CPF.png')} />
                        <TextInputMask
                            type="cpf"
                            style={styles.input}
                            value={user?.cpf}
                            placeholderTextColor='#535353'
                        />
                    </EditFormBox>
                    <EditFormBox>
                        <Icon source={require('../../assets/Icone Ping.png')} />
                        <Controller
                            name='address'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    placeholder={user?.address}
                                    placeholderTextColor='#535353'
                                />
                            )}
                        />
                    </EditFormBox>
                    <EditFormBox>
                        <Icon source={require('../../assets/icone foto form.png')} />
                        <Controller
                            name='image'
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                    placeholder='Nova Foto de Perfil'
                                    placeholderTextColor='#535353'
                                />
                            )}
                        />
                    </EditFormBox>
                    <EditFormBox>
                        <Icon source={require('../../assets/Icone Senha.png')} />
                        <TextInput
                            style={styles.input}
                            value={'********'}
                            placeholderTextColor='#535353'
                        />

                    </EditFormBox>
                    <Modal
                        animationType='fade'
                        visible={visivel}
                        transparent={true}
                    >
                        <ChangePasswordBox>
                            <Pressable
                                onPress={() => { setVisivel(false) }}
                                style={{ height: '24px', width: '24px', position: 'absolute' }}
                            >
                                <Icon source={require('../../assets/Icone Fechar.png')} style={{ marginLeft: '0px' }} />
                            </Pressable>
                            <EditFormBox style={{ margin: 'auto', width: '90%' }}>
                                <Icon source={require(`../../assets/Icone Senha.png`)} />
                                <Icon source={require(`../../assets/Icone Olho.png`)} style={{ alignSelf: 'flex-end', marginRight: '14px' }} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Nova Senha'
                                    placeholderTextColor='#535353'
                                />
                            </EditFormBox>
                            <Pressable>
                                <EditPasswordTxt style={styles.text}>Trocar Senha</EditPasswordTxt>
                            </Pressable>

                        </ChangePasswordBox>
                    </Modal>
                    <Pressable
                        onPress={() => { setVisivel(true) }}
                    >
                        <EditPasswordTxt>Editar Senha</EditPasswordTxt>
                    </Pressable>
                </Teste>

            </ContainerForm>

            <ConfirmBtn
                onPress={handleSubmit(onSubmit)}
            >
                Salvar Alterações
            </ConfirmBtn>
        </>

    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500',
        marginTop: '11px',
        marginBottom: '10px',
        paddingLeft: '47px',
        paddingTop: '19px',
        paddingBottom: '19px'
    },
    form: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500',
        marginTop: '11px',
        marginBottom: '10px',
        paddingLeft: '47px',
        paddingTop: '19px',
        paddingBottom: '19px',
        border: 'solid 2px'
    },
    text: {
        marginBottom: '30px',
        alignSelf: 'center',
    }
})

function jwt_decode(token: any) {
    throw new Error("Function not implemented.");
}

