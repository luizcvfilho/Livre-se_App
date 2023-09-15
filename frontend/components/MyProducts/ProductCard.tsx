import React from "react";
import DeleteProductModal from "./DeleteProductModal";
import { ProductCard, ProductEditButton, ProductImg, ProductImgBox, ProductImgContainer, ProductInfoBox, ProductInfoText, ProductsContainer, TrashIcon } from "./style";


export default function ProductCardComponent() {
    return (
        <ProductsContainer>
            <ProductCard>
                <ProductInfoBox>
                    <ProductInfoText>O Máskara - John ...</ProductInfoText>
                    <ProductInfoText>R$ 70,00</ProductInfoText>
                    <ProductEditButton>Editar</ProductEditButton>
                    <DeleteProductModal/>
                </ProductInfoBox>
                <ProductImgContainer>
                    <ProductImgBox>
                        <ProductImg source={{uri:'https://cf.shopee.com.br/file/39483ad3bf9f2cc23d2e49e83d90b97c'}} />
                    </ProductImgBox>
                </ProductImgContainer>
            </ProductCard>
            <ProductCard>
                <ProductInfoBox>
                    <ProductInfoText>Cálculo Volume I ...</ProductInfoText>
                    <ProductInfoText>R$ 150,00</ProductInfoText>
                    <ProductEditButton>Editar</ProductEditButton>
                    <DeleteProductModal/>
                </ProductInfoBox>
                <ProductImgContainer>
                    <ProductImgBox>
                        <ProductImg source={'https://m.media-amazon.com/images/I/81SuEoiJXlL.jpg'} />
                    </ProductImgBox>
                </ProductImgContainer>
            </ProductCard>
        </ProductsContainer>
    )
}