import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

interface imagem {
    path: string
}
function TopPerfil({ path }: imagem) {

    return (
        <TouchableOpacity style={{ marginTop: '2%' }}>
            <FotodePerfil source={path} />
        </TouchableOpacity>
    )

}

export default TopPerfil;

const FotodePerfil = styled.Image`
height:57px;
width:57px;
border-radius:100px;
border: 2px solid #498888;

`