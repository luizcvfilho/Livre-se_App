import React, { useEffect, useState } from "react";
import { Card, InfoTable, PdtCondition, PdtImg, PdtImgBox, PdtName, PdtOldPrice, PdtPrice } from './style'
import productServices from "../../services/productServices";
import { Pressable } from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";




interface productInfo {
    id: number;
    author: string;
    title: string;
    publishers: string;
    genre: string;
    synopsis: string;
    publicationYear: string;
    price: number;
    image: string;
    quantity: number;
    condition: string;
}

interface section {
    sectionName: string;
}





export default function PdtCard({ sectionName }: section) {
    const number = (p) => {
        return Math.floor(p.price / 2).toFixed(2)
    }

    const [products, setProducts] = useState<productInfo[]>();

    useEffect(() => {
        productServices.getProducts().then(response => (
            console.log(response?.data.product),
            setProducts(response?.data.product)
        ))
    }, [])
    

    //---------Essa parte é boa, talvez dê pra usar depois// na real não, tinha uma jeito mais fácil-----------

    // const result = products?.reduce((accProduct, crrProduct) => {
    //     accProduct[crrProduct.genre] = accProduct[crrProduct.genre] || [];
    //     accProduct[crrProduct.genre].push(crrProduct);
    //     return accProduct;
    // }, {})
    // console.log(result?.HQs)

    const navigation = useNavigation()
    
    return (
        <>
            {products?.filter(product => product.genre == sectionName).map(product => {
                if(product.genre=='Promoções'){
                    return (
                        <Card
                        onPress={()=>navigation.navigate('Product', {id:product.id})}
                        >
                            <PdtImgBox>
                                <PdtImg source={{uri:product.image}} />
                            </PdtImgBox>
                            <InfoTable>
                                <PdtName>{product.title} - {product.author}</PdtName>
                                <PdtPrice><PdtOldPrice>R${product.price}</PdtOldPrice> {number(product)}</PdtPrice>
                                
                                <PdtCondition>{product.condition}</PdtCondition>
                            </InfoTable>
                        </Card>
                    )
                }
                else{
                    return(
                        <Card
                        onPress={()=>navigation.navigate('Product', {id:product.id})}
                        >
                            <PdtImgBox>
                                <PdtImg source={{uri:product.image}} />
                            </PdtImgBox>
                            <InfoTable>
                                <PdtName>{product.title} - {product.author}</PdtName>
                                <PdtPrice>R${product.price}</PdtPrice>
                                
                                <PdtCondition>{product.condition}</PdtCondition>
                            </InfoTable>
                        </Card>
                    )
                }
            //     return (
            //         // <Card
            //         // onPress={()=>navigation.navigate('Product', {id:product.id})}
            //         // >
            //         //     <PdtImgBox>
            //         //         <PdtImg source={{uri:product.image}} />
            //         //     </PdtImgBox>
            //         //     <InfoTable>
            //         //         <PdtName>{product.title} - {product.author}</PdtName>
            //         //         {/* <PdtPrice><PdtOldPrice>R${product.price}</PdtOldPrice> {number(product)}</PdtPrice> */}
            //         //         <PdtPrice>R${product.price}</PdtPrice>
            //         //         <PdtCondition>{product.condition}</PdtCondition>
            //         //     </InfoTable>
            //         // </Card>
            //     )
            })}
        </>
    )
}



// type PdtInfo = {
//     name: string;
//     author: string;
//     img: string;
//     price: number;
//     condition: string;
// }
