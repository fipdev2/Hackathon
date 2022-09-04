import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import BackBtn from "../../components/BackBtn";
import Button from "../../components/Button";
import { Background, BottomBnts, TopView } from "./style";
import TopPerfil from '../../components/TopPerfil';
import { usuarioFoto } from '../Tartarugas/imagensTartaruga';
import { CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert } from 'react-native';
import { useState } from 'react';

export function Camera() {
    const navigation = useNavigation();
    const [selecionaFoto, setSelecionaFoto] = useState<string | undefined>()


    async function pegarDaGaleria() {
        const options: ImageLibraryOptions = { mediaType: 'photo' }
        const result = await launchImageLibrary(options)
        console.log(result)
        if (result?.assets) {
            setSelecionaFoto(result.assets[0].uri)
        }
    }


    async function pegarDaCamera() {
        const options: CameraOptions = {
            mediaType: 'photo',
            cameraType: 'back',
            quality: 1
        }
        const result = await launchCamera(options)
        console.log(result)
        if (result?.assets) {
            setSelecionaFoto(result.assets[0].uri)
        }
    }

    return (
        <Background source={require('../../../assets/backgroundcamera.png')}>
            <TopView>
                <BackBtn onPress={() => navigation.navigate('Tartarugas' as never)} />
                <TopPerfil path={usuarioFoto} />
            </TopView>

            <BottomBnts>
                <Button name="Tirar foto" onPress={() => pegarDaCamera()} />
                <Button name="Galeria" onPress={() => pegarDaGaleria()} />
            </BottomBnts>
        </Background>
    )
}
export default Camera;