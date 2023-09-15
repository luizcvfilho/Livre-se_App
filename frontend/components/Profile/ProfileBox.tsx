import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import userServices from "../../services/userServices";
import { UpperProfile, ProfilePhoto, ProfileFont, ExitBtn, PointsWallet, ProfileBox } from "./style";


export default function ProfileBoxComponent() {

    interface userInfo {
        name: string;
        phoneNumber: string;
        address: string;
        image: string;
        email: string;
        cpf: string;
        point: number;
    }

    const [user, setUser] = useState<userInfo>();
    const navigation = useNavigation();

    // useEffect(() => {
    //     userServices.getUser(1).then(response => (
    //         console.log(response?.data.user),
    //         setUser(response?.data.user)
    //     ))
    // }, [])

    const userId =  AsyncStorage.getItem('userId')
    console.log(userId,'kk')
    useFocusEffect(
        React.useCallback(() => {
            userServices.getUser(1).then(response => (
                console.log(response?.data.user),
                setUser(response?.data.user)
            ))
            return ()=>{
                setUser([])
            }
        },[])
    )
    return (
        //Esse '.split(' ')[0] serve pra pegar só o primeiro nome do usuário'. Serveria, se por algum motivo isso não bugasse a navegação pra outras telas :,) . 
        <ProfileBox>
            <UpperProfile>
                <ProfilePhoto source={{ uri: `${user?.image}` }} />
                <ProfileFont style={{ alignSelf: 'center', fontWeight: '500' }}>Olá, <ProfileFont>{user?.name}</ProfileFont></ProfileFont>
            </UpperProfile>
            <PointsWallet style={{ alignSelf: 'flex-start' }}>
                <ProfileFont>Saldo:</ProfileFont>
                <ProfileFont style={{ color: '#5DC0A8' }}>{user?.point}</ProfileFont>
                <ExitBtn
                    onPress={() => {
                        AsyncStorage.removeItem('token')
                        navigation.navigate('Start Page')
                    }}
                >
                    Sair
                </ExitBtn>
            </PointsWallet>
        </ProfileBox>

    )
}
