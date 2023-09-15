import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import AddProduct from "../../pages/AddProduct/AddProduct";
import Home from "../../pages/Home/Home";
import ProductScreen from "../../pages/ProductScreen";
import Profile from "../../pages/Profile";
import MyProducts from "../../pages/MyProducts";
import FavoritesScreen from "../../pages/FavoritesScreen";
import ProfileEdit from "../../pages/ProfileEdit";
import StartPage from "../../pages/StartPage/StartPage";
import LoginScreen from "../../pages/LoginScreen";
import Register from "../../pages/Register/Register";
import RecoverPasswordScreen from "../../pages/RecoverPasswordScreen";
import VerifyCodeScreen from "../../pages/VerifyCodeScreen";

const Stack = createStackNavigator();


export default function (){
    return (
        <Stack.Navigator
        initialRouteName="Start Page"
        >
            <Stack.Screen
            name='Home'
            component={Home}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Product'
            component={ProductScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Add Product'
            component={AddProduct}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='My Products'
            component={MyProducts}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Favorites'
            component={FavoritesScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Profile Edit'
            component={ProfileEdit}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Start Page'
            component={StartPage}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Login Screen'
            component={LoginScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen
            name='Register'
            component={Register}
            options={{
                headerShown:false
            }}
            />
            {/* <Stack.Screen
            name='Recover Password'
            component={}
            options={{
                headerShown:false
            }}
            /> */}
        </Stack.Navigator>
    )
}