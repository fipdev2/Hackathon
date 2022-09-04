import * as React from 'react';
import { View } from 'react-native';
import { Box, Especie, Imagem, Nome } from './style';

export interface TartarugasEncontradas {
    imagem: string,
    nome: string,
    especie: string
}
function TartarugasEncontradas({ imagem, nome, especie }: TartarugasEncontradas) {
    return (
        <>
            <Box>
                <Imagem source={require(`../../../assets/${imagem}.png`)} />
                <View>
                    <Nome>{nome}</Nome>
                    <Especie>{especie}</Especie>
                </View>
            </Box>
        </>
    );
}

export default TartarugasEncontradas;