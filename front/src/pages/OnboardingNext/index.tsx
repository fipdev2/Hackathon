import * as React from 'react';
import { BottomView, Image, View, Text, Logo } from './style';
import Background from '../../../assets/backgroundOnboarding.png'
import Button from '../../components/Button';

function OnboardingNext() {
    return (
        <View>
            <Image source={Background} />
            <BottomView>
                <Logo>bubble hub</Logo>
                <Text>
                    Registre suas tartarugas, complete desafios, troque por recompensas e ajude a tornar
                    a vida marinha melhor!
                </Text>
                <Button name='Começar!' />

            </BottomView>
        </View>
    );
}

export default OnboardingNext;