import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect, useState} from 'react';

interface Data{
    token: string;
    setToken: any;
    signed:boolean;
}


export const AuthContext = createContext<Data>({} as Data);

const AuthProvider = (props: any)=>{
    const [authorization, setAuthorization]= useState('');
    const [checkLogin,setCheckLogin]= useState(false);

    const userToken = async()=>{
        let token= '';
        
        try{
            const value = await AsyncStorage.getItem('token');
            if(value!=null){
                token='Bearer'.concat(value);
                return token
            }
        }
        catch(e){
            console.log(e)
        }
        return token
    };

    function checkIsLoggedIn(){
        if(authorization){
            setCheckLogin(true)
        }
        else{
            setCheckLogin(false)
        }
    }

    useEffect(()=>{
        userToken().then(value=>{
            setAuthorization(value)
        })
    },[]);

    useEffect(()=>{
        checkIsLoggedIn();
    },[authorization,checkLogin])

    return(
        <AuthContext.Provider
        value={{token:authorization,setToken:setAuthorization,signed:checkLogin}}
        >
            {props.children}
        </AuthContext.Provider>
    )
}