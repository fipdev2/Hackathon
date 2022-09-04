import React from "react";
import { ImageBackground, View, Image, TouchableOpacity, Text } from "react-native";
import Button from "../../components/Button";

export function Camera() {
    return (
        <ImageBackground source={require('../../../assets/bgCamera.png')} style={{width: '100%', height: '100%'}}>

                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: '16%', width: '92%', alignSelf: 'center'}}>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/backBtn.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../../assets/profile-photo.png')}></Image>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{backgroundColor: '#09C6AB', width: '80%', alignSelf: 'center', marginTop: '100%', padding: '0 10'}}>
                    <Text>Tirar foto</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Tirar foto</Text>
                </TouchableOpacity>

        </ImageBackground>
    )
}