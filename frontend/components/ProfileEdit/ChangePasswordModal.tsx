import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, TextInput } from "react-native";

import { ChangePasswordBox, EditFormBox, EditPasswordTxt, Icon } from "./style";

export default function ChangePasswordModal() {
    const [visivel, setVisivel] = useState(false);

    return (
        <>
            <Modal
                animationType='fade'
                visible={visivel}
                transparent={true}
            >
                <ChangePasswordBox>
                    <Pressable
                        onPress={() => { setVisivel(false) }}
                        style={{ height: '24px', width: '24px', position:'absolute'}}
                    >
                        <Icon source={require('../../assets/Icone Fechar.png')} style={{marginLeft:'0px'}}/>
                    </Pressable>
                    <EditFormBox style={{margin:'auto', width:'90%'}}>
                        <Icon source={require(`../../assets/Icone Senha.png`)} />
                        <TextInput
                            style={styles.form}
                            placeholderTextColor='#535353'
                            value="*********"
                        />
                        <Icon source={require(`../../assets/Icone Olho.png`)} style={{alignSelf:'flex-end', marginRight:'14px'}} />
                    </EditFormBox>
                    <EditPasswordTxt style={styles.text}>Trocar Senha</EditPasswordTxt>
                </ChangePasswordBox>
            </Modal>
            <Pressable
                onPress={() => { setVisivel(true) }}
            >
                <EditPasswordTxt>Editar Senha</EditPasswordTxt>
            </Pressable>
        </>

    )
}

const styles = StyleSheet.create({
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
        border:'solid 2px'
    },
    text:{
        marginBottom:'30px',
        alignSelf:'center',
    }
})
