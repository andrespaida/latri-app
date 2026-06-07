import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [splashTerminado, setSplashTerminado] = useState(false);

  return (
    <View style={styles.container}>
      {!splashTerminado ? (
        <SplashScreen onFinish={() => setSplashTerminado(true)} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});