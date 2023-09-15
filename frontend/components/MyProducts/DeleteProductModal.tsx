import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, TextInput } from "react-native";
import { DeleteProductBox, HeaderTitle, ModalButton, ModalOptions, ModalText, TrashIcon } from "./style";


export default function DeleteProductModal() {
    const [visivel, setVisivel] = useState(false);
    return (
        <>
            <Modal
                animationType='fade'
                visible={visivel}
                transparent={true}
            >
                <DeleteProductBox>
                    <ModalText>
                        Deseja Excluir esse produto?
                    </ModalText>
                    <ModalOptions>
                        <ModalButton>
                            Sim
                        </ModalButton>
                        <ModalButton
                            onPress={() => { setVisivel(false) }}
                        >
                            Não
                        </ModalButton>
                    </ModalOptions>
                </DeleteProductBox>
            </Modal>
            <Pressable
                onPress={() => { setVisivel(true) }}
                style={styles.trash}
            >
                <TrashIcon source={require('../../assets/Icone Lixeira.png')} />
            </Pressable>
        </>

    )
}

const styles = StyleSheet.create({
    trash: {
        width: '24px',
        height: '24px',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        marginTop: 'auto',
        marginBottom: '12px',
        marginLeft: 'auto',
        marginRight: '8px'
    }
})
