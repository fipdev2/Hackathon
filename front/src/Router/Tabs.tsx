import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home'
import { RiHome2Fill, RiHome2Line } from 'react-icons/ri'
import Camera from '../pages/Camera';
import Tartarugas from '../pages/Tartarugas';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { Image } from 'react-native'
import { HiPuzzle, HiOutlinePuzzle } from 'react-icons/hi'
import { AiFillGift, AiOutlineGift } from 'react-icons/ai';


const DEVICE_WIDTH = Dimensions.get('window').width;

function Tabs() {
    const Tab = createBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#F7E74A',
                    tabBarInactiveTintColor: 'white',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarStyle: {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        backgroundColor: "#000000",
                        padding: 10,
                        width: DEVICE_WIDTH,
                        height: 108,
                        zIndex: 8,
                        borderTopWidth: 0,
                        overflow: 'hidden',
                    },
                    tabBarBackground: () =>
                    (<LinearGradient
                        colors={['#068888', '#02556D']}
                        style={{
                            height: '108px',
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                        }} />)
                }
                }
            >
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            return focused ? <RiHome2Fill style={{ color: '#F7E74A', fontSize: 32 }
                            } /> : <RiHome2Line style={{ color: 'white', fontSize: 32 }} />
                        }
                    }} />
                <Tab.Screen
                    name='Tartarugas'
                    component={Tartarugas}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            let icon = focused ? 'turtlefill' : 'turtleoutline';
                            return < Image source={require(`../../assets/${icon}.png`)} style={{ height: 32, width: 32 }} />
                        }
                    }} />
                <Tab.Screen
                    name='Desafios'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            return focused ? <HiPuzzle style={{ color: '#F7E74A', fontSize: 32 }
                            } /> : <HiOutlinePuzzle style={{ color: 'white', fontSize: 32 }} />
                        }
                    }} />
                <Tab.Screen
                    name='Recompensas'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            return focused ? <AiFillGift style={{ color: '#F7E74A', fontSize: 32 }
                            } /> : <AiOutlineGift style={{ color: 'white', fontSize: 32 }} />
                        }
                    }} />
            </Tab.Navigator>
        </>
    );
}

export default Tabs
    ;