import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import React from 'react'
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile";
import Stack from "../Stack";
import AddProduct from "../../pages/AddProduct/AddProduct";
import CartScreen from "../../pages/CartScreen";
import LoginScreen from "../../pages/LoginScreen";


const Tab = createBottomTabNavigator()

export default function () {
    return (

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Stack}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Add Product"
                component={AddProduct}
                options={{
                    headerShown:false
                }}
            />
        </Tab.Navigator>

    )
}
