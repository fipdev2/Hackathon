import * as React from 'react';
import { BottomView, Image, View, Text, Logo } from './style';
import Button from '../../components/Button';

function OnboardingNext() {
    return (
        <View>
            <Image source={require('../../../assets/backgroundOnboarding.png')} />
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