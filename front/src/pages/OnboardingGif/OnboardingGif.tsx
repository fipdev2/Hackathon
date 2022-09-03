import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

export function OnboardingGif() {
    return(
        <>
            <View>
                
            </View>

            <View>
                <Text>EXPLORE E CONTRIBUA</Text>
                <Text>O trabalho para proteger uma espécie beneficia todos nós. Vamos ajudar os animais marinhos!</Text>

                <TouchableOpacity>
                    <Text>Explore agora</Text>
                    <Image source={require('../../../assets/arrow.png')}></Image>
                </TouchableOpacity>
            </View>
        </>
    )
}