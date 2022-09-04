import * as React from 'react';
import { Card, Descricao, Titulo } from './style';
import { View } from 'react-native'
import { TouchableOpacity } from './style';
import { FaChevronRight } from 'react-icons/fa'

interface CardProps {
    imagem: string,
    nome: string,
    descricao: string,

}
function TartarugaCard({ imagem, nome, descricao, }: CardProps) {
    return (
        <>

            <Card source={require(`../../../assets/${imagem}.png`)} imageStyle={{ borderRadius: 7 }} >
                <View style={{
                    backgroundColor: 'rgba(0, 0, 0, .3)', position: 'absolute', width: 358,
                    height: 489, left: 0, top: 0
                }} />
                <Titulo>{nome}</Titulo>
                <Descricao>{descricao}</Descricao>
                <TouchableOpacity>
                    <FaChevronRight style={{ color: 'white', fontSize: 32 }} />
                </TouchableOpacity>
            </Card>
        </>
    );
}

export default TartarugaCard;