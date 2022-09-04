import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Login from '../pages/Login';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, primary: 'transparent' } }}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen
                        name='Tabs'
                        component={Tabs}
                        options={{
                            headerShown: false
                        }} />

                </Stack.Navigator>
            </NavigationContainer>




        </>
    );
}

export default Router;