import React, { useEffect, useState } from "react";
import productServices from "../../services/productServices";
import { Block, ReleaseImg, Test } from './style'




// interface productInfo {
//     id: number;
//     author: string;
//     title: string;
//     publishers: string;
//     genre: string;
//     synopsis: string;
//     publicationYear: string;
//     price: number;
//     image: string;
//     quantity: number;
//     condition: string;
// }




export default function ReleaseScroll() {
    // const [products, setProducts] = useState<productInfo[]>();

    // useEffect(() => {
    //     productServices.getProducts().then(response => (
    //         console.log(response?.data.product),
    //         setProducts(response?.data.product)
    //     ))
    // }, [])
    return (
        <Test horizontal={true}>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
            <Block>
                <ReleaseImg source={{uri:'https://m.media-amazon.com/images/I/41q8zuSBWsL._SX328_BO1,204,203,200_.jpg'}} />
            </Block>
        </Test>
    )
}
