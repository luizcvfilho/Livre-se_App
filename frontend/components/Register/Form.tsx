import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Form, Icon } from "./style";


type FormInfo = {
    icon: string;
    holder: string;
}

export default function FormComponent({icon, holder}: FormInfo) {
    return (
        <Form>
            <Icon source={require(`../../assets/${icon}`)} />
            <TextInput
                style={styles.input}
                placeholder= {`${holder}`}
                placeholderTextColor='#535353'
            />
        </Form>
    )
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