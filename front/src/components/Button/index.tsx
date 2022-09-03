import { TouchableOpacity, Text, View } from './style'
import * as React from 'react';


interface ButtonProps {
    name: string,
    icon?: string,
    onPress?: any
}

function Button({ name, icon, onPress }: ButtonProps) {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <Text>{name}</Text>
                <View></View>
            </TouchableOpacity>
        </>
    );
}

export default Button;