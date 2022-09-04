import { BtnTouchableOpacity, BtnText } from './style'
import * as React from 'react';

interface ButtonProps {
    name: string,
    icon?: string,
    onPress?: any
}

function Button({ name, icon, onPress }: ButtonProps) {
    return (
        <>
            <BtnTouchableOpacity onPress={onPress}>
                <BtnText>{name}</BtnText>
            </BtnTouchableOpacity>
        </>
    );
}

export default Button;