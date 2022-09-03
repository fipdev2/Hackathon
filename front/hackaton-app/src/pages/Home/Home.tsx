import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image } from 'react-native';
import { News } from "../../components/News/News";
import { newsContent } from "../../constants/newsContent";
import { CardTitle, DonationCard, Header, Logo, ProfilePhoto, CardHeader, Screen, CardText, CardBar, Progress, NewsSection, NewsTitle } from "./style";

export function Home() {
    return (
        <Screen>
            <Header>
                <Logo source={require('../../../assets/logo-home.png')}></Logo>
                <ProfilePhoto source={require('../../../assets/profile-photo.png')}></ProfilePhoto>
            </Header>

            <DonationCard>
                <LinearGradient colors={['#068888', '#02556D']} style={{borderRadius: 40, padding: 24}}>
                    <CardHeader>
                        <CardTitle style={{marginRight: 10}}>Ajude as tartarugas</CardTitle>
                        <Image source={require('../../../assets/traced-turtle.png')}></Image>
                    </CardHeader>
                    
                    <CardText>
                        R$ 13.859/50.000 
                    </CardText>

                    <CardBar>
                        <Progress></Progress>
                    </CardBar>

                </LinearGradient>
            </DonationCard>

            <NewsSection>
                <NewsTitle>Últimas notícias</NewsTitle>

                {
                    newsContent.map((news) => 
                        <News
                            key={news.id}
                            img={news.img}
                            title={news.title}
                            description={news.description}
                        />
                    )
                }
            </NewsSection>

        </Screen>
    )
}