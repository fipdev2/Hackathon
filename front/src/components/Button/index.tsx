import { TouchableOpacity, Text, View } from './style'
import * as React from 'react';


interface ButtonProps {
    name: string,
    icon?: string,
    onPress?: any
    highlighted?: boolean
}

function Button({ name, icon, onPress, highlighted }: ButtonProps) {


    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <Text>{name}</Text>
                {highlighted && <View />}
            </TouchableOpacity>
        </>
    );
}

export default Button;