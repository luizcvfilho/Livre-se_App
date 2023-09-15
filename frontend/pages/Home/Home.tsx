import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ReleaseScroll from "../../components/Home/ReleaseScroll";
import SearchBar from "../../components/Home/Search";
import { Screen, Title, Section, HomePdts } from './style'

import productServices from "../../services/productServices";
import PdtCard from "../../components/Home/ProductCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchIcon, SearchInput, Search } from "../../components/Home/style";






interface productInfo {
    id: number;
    author: string;
    title: string;
    publishers: string;
    genre: string;
    type: string;
    synopsis: string;
    publicationYear: string;
    price: number;
    image: string;
    quantity: number;
    condition: string;
}






export default function Home() {
    const [products, setProducts] = useState<productInfo[]>();
    const [productsSearched, setProductsSearched] = useState<productInfo[]>();

    useEffect(() => {
        productServices.getProducts().then(response => (
            console.log( 'ioi',response?.data.product),
            setProducts(response?.data.product)
        ))
    }, [])


    //<----- Use Effect do Search ----->
    // useEffect(() => {
    //     productServices.getProducts().then(response => (
    //         console.log(response?.data.product),
    //         setProducts(response?.data.product)
    //     ))
    // }, [])



    const SearchResult = AsyncStorage.getItem('search')
    console.log(Search)
    // setProductsSearched(products?.filter(product => { product.title.includes(Search) }))


    return (
        <>
            <Screen>
                <Search>
                    <SearchIcon source={require('../../assets/Icone Lupa.png')} />
                    <SearchInput
                        placeholder='Procure um Livro'
                        placeholderTextColor='#4E4444'
                        onChangeText={(event: any) => {
                            AsyncStorage.setItem('search', (event))
                        }}
                    />
                </Search>
                <Title>
                    Lançamentos
                </Title>
                <ReleaseScroll />

                <Section>Promoções</Section>
                <HomePdts>
                    <PdtCard sectionName={"Promoções"} />
                </HomePdts>
                <Section>HQs</Section>
                <HomePdts>
                    <PdtCard sectionName={"HQs"} />
                </HomePdts>

                <Section>Educacional</Section>
                <HomePdts>
                    <PdtCard sectionName={"Educacional"} />
                </HomePdts>
            </Screen>

        </>


)
}