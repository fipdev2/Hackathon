import * as React from 'react';
import { useNavigation } from "@react-navigation/native";
import BackBtn from "../../components/BackBtn";
import Button from "../../components/Button";
import { Background, BottomBnts, TopView } from "./style";
import TopPerfil from '../../components/TopPerfil';
import { usuarioFoto } from '../Tartarugas/imagensTartaruga';

export function Camera() {
    const navigation = useNavigation();
    return (
        <Background source={require('../../../assets/backgroundcamera.png')}>
            <TopView>
                <BackBtn onPress={() => navigation.navigate('Tartarugas' as never)} />
                <TopPerfil path={usuarioFoto} />
            </TopView>

            <BottomBnts>
                <Button name="Tirar foto" />
                <Button name="Galeria" />
            </BottomBnts>
        </Background>
    )
}
export default Camera;