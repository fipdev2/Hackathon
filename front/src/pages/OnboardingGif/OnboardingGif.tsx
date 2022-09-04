import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import { ScreenContainer, Title, Description, TextView, TurtleGif, GifView } from "./style"
import { LinearGradient } from 'expo-linear-gradient';

export function OnboardingGif() {
    return(
        <ScreenContainer>
            <LinearGradient 
                colors={['#068888', '#02556D']}
                style={{height: '100%'}}
            >

            <GifView>
                <TurtleGif source={require('../../../assets/gifTurtle.gif')} style={{width:'90%', height: '80%'}}></TurtleGif>
            </GifView>

            <TextView>
                <Title>EXPLORE E CONTRIBUA</Title>
                <Description>O trabalho para proteger uma espécie beneficia todos nós. Vamos ajudar os animais marinhos!</Description>

            </TextView>


            </LinearGradient>
        </ScreenContainer>
    )
}
