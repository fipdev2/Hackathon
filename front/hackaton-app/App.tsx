import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OnboardingGif } from './src/pages/OnboardingGif/OnboardingGif';

export default function App() {
  return (
    <View style={styles.container}>
      <OnboardingGif />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
