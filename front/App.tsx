
import { useFonts } from 'expo-font';
import React from 'react';
import Camera from './src/pages/Camera';
import Tartarugas from './src/pages/Tartarugas';
import Router from './src/Router/Router';

export default function App() {
  const [fontsLoaded] = useFonts({ 'Turtles': require('./src/fonts/Turtles.otf') });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      {/* <Camera /> */}
      <Router />
    </>
  );
}
