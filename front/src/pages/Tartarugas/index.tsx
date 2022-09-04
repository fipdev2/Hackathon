import * as React from 'react';
import TartarugaCard from '../../components/TartarugaCard';
import { TurtleTxt } from '../Login/style';
import { Carousel, Page, PageTitle, Texto, TopWrapper } from './style';
import { minhasTartarugas, usuarioFoto } from './imagensTartaruga';
import { TouchableOpacity, View } from 'react-native';
import TartarugasEncontradas from '../../components/TartarugasEncontradas';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HiOutlineCamera } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai';
import TopPerfil from '../../components/TopPerfil';

const data = minhasTartarugas.map((tartaruga, index) => (
    <TartarugaCard
        key={index}
        imagem={tartaruga.imagem}
        nome={tartaruga.nome}
        descricao={tartaruga.descricao} />
))


function Tartarugas() {
    const [achaTartaruga, setAchaTartaruga] = useState<any[]>([])
    const navigation = useNavigation();
    return (
        <Page>
            <TopWrapper>
                <PageTitle>bubblehub</PageTitle>
                <TopPerfil path={usuarioFoto} />
            </TopWrapper>
            <TouchableOpacity
                onPress={() => navigation.navigate('Camera' as never)}
                style={{
                    backgroundColor: '#09C6AB',
                    borderRadius: 7,
                    flexDirection: 'row',
                    width: '30%',
                    paddingLeft: 14,
                    paddingRight: 14,
                    paddingTop: 7,
                    paddingBottom: 7,
                    marginBottom: 12
                }}>
                <HiOutlineCamera style={{ color: 'white', fontSize: 36, marginRight: 12 }} />
                <AiOutlinePlus style={{ color: 'white', fontSize: 36 }} />
            </TouchableOpacity>
            <Carousel
                horizontal={true}
            >
                {data}
            </Carousel>
            {
                (achaTartaruga.length != 0) &&
                <View>
                    <Texto>
                        Tartarugas Encontradas
                    </Texto>
                    {achaTartaruga.map((tartarugaAchada) => {
                        <TartarugasEncontradas
                            nome={tartarugaAchada.nome}
                            imagem={tartarugaAchada.imagem}
                            especie={tartarugaAchada.especie}
                        />
                    })}
                </View>}
            {(achaTartaruga.length == 0) && < Texto > Você ainda não achou nenhuma tartaruga 😥</Texto>}
        </Page >
    );
}

export default Tartarugas;