import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { NewsCard, NewsDescription, NewsTitle, ReadMore, TxtContainer } from "./style";

type NewsInfo = {
    img: any;
    title: string;
    description: string;
}

export function News({img, title, description} : NewsInfo) {
    return(
        <NewsCard>
            <Image source={img}></Image>

            <TxtContainer>
                <NewsTitle>{title}</NewsTitle>
                <NewsDescription>{description}</NewsDescription>

                <TouchableOpacity>
                    <ReadMore>Ler mais</ReadMore>
                </TouchableOpacity>
            </TxtContainer>   
        </NewsCard>
    )
}