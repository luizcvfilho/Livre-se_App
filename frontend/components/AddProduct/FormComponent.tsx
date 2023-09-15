import React from "react";
import { FormArea, FormTextInput, FormTitle, SelectArrow } from "./style";
import { StyleSheet } from "react-native";
import { useForm, Controller } from 'react-hook-form'
import { TextInputMask } from 'react-native-masked-text'

export default function FormComponent() {

    const { control, handleSubmit, formState: { errors } } = useForm();
    return (
        <>
            <FormArea>
                <FormTitle>Título do Anúncio</FormTitle>
                <FormTextInput
                    placeholder='Escreva um título que resuma sua venda'
                    placeholderTextColor='#9E9E9E' />
            </FormArea>
            <FormArea>
                <FormTitle>Gênero</FormTitle>
                <FormTextInput
                    placeholder='Escreva a descrição do seu anúncio'
                    placeholderTextColor='#9E9E9E' />
                <SelectArrow source={require('../../assets/Seta Select.png')} />
            </FormArea><FormArea style={{ height: '120px' }}>
                <FormTitle>Descrição</FormTitle>
                <FormTextInput
                    placeholder='Escreva a descrição do seu anúncio'
                    placeholderTextColor='#9E9E9E'
                    style={{ height: '120px' }}
                    multiline={true} />
            </FormArea>
            <FormArea>
                <FormTitle>Valor</FormTitle>
                <Controller
                    name='cpf'
                    rules={{ required: true }}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextInputMask
                            type={'custom'}
                            options={{
                                mask: 'R$ 99,99'
                            }}
                            onChangeText={onChange}
                            value={value}
                            placeholder="R$ 00,00"
                            placeholderTextColor='#9E9E9E'
                            style={styles.input}
                        />
                    )}
                />
            </FormArea>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '25%',
        height: '50px',
        borderRadius: 5,
        fontSize: 18,
        fontWeight: '500',
        padding: '10px 8px',
        border: ' solid 2px #C5C5C5'
    }
})