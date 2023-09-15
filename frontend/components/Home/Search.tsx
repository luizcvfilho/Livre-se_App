import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { SearchInput, SearchIcon, Search } from './style'

export default function SearchBar() {
    return (
        <Search>
            <SearchIcon source={require('../../assets/Icone Lupa.png')} />
            <SearchInput
                placeholder='Procure um Livro'
                placeholderTextColor='#4E4444'
                onChangeText={(event:any)=>{
                    AsyncStorage.setItem('search',(event))
                }}
            />
        </Search>
    )
}