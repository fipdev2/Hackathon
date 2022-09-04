import * as React from 'react';
import { BottomView, Image, OnboardingView, OnbText, Logo } from './style';
import Button from '../../components/Button';

function OnboardingNext() {
    return (
        <OnboardingView>
            <Image source={require('../../../assets/backgroundOnboarding.png')} />
            <BottomView>
                <Logo>bubble hub</Logo>
                <OnbText>
                    Registre suas tartarugas, complete desafios, troque por recompensas e ajude a tornar
                    a vida marinha melhor!
                </OnbText>
                <Button name='Começar!' />

            </BottomView>
        </OnboardingView>
    );
}

export default OnboardingNext;