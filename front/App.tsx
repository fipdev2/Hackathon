import OnboardingNext from './src/pages/OnboardingNext';
import * as React from 'react';
import { useFonts } from 'expo-font';
import Login from './src/pages/Login';

export default function App() {
  const [fontsLoaded] = useFonts({ 'Turtles': require('./src/fonts/Turtles.otf') });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Login />
    </>
  );
}

