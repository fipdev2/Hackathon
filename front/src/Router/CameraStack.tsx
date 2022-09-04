import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Camera from '../pages/Camera';
import Tartarugas from '../pages/Tartarugas';
function CameraStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Tartarugas'
                component={Tartarugas}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name='Camera'
                component={Camera}
                options={{
                    headerShown: false
                }} />

        </Stack.Navigator>
    );
}

export default CameraStack;