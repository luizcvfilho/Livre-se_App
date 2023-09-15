import { NavigationContainer } from "@react-navigation/native";
import Stack from './Stack'
import Tab from './Tab'
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'

export default function (){
    return (
        <NavigationContainer>
            <Tab/>
        </NavigationContainer>
    )
}


//<----- Bottom Tab ----->

// return(
//     <NavigationContainer>
//         <Tab.Navigator>
//             <Tab.Screen
//             name="Home"
//             component={Home}
//             />
//             <Tab.Screen
//             name="Profile"
//             component={Profile}
//             />
//         </Tab.Navigator>
//     </NavigationContainer>
// )