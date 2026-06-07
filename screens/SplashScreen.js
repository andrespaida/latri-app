import { useEffect } from 'react';
import {
  StyleSheet, Text, View,
  Image, Animated
} from 'react-native';

export default function SplashScreen({ onFinish }) {
  const opacidad = new Animated.Value(0);
  const escala = new Animated.Value(0.5);

  useEffect(() => {
    // Animación de entrada del logo
    Animated.parallel([
      Animated.timing(opacidad, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(escala, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    // Después de 3 segundos pasa a la HomeScreen
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      {/* FONDO DECORATIVO SUPERIOR */}
      <View style={styles.circuloSuperior} />
      <View style={styles.circuloInferior} />

      {/* LOGO ANIMADO */}
      <Animated.View style={[
        styles.logoContainer,
        { opacity: opacidad, transform: [{ scale: escala }] }
      ]}>
        <Image
          source={require('../assets/escudo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      {/* TEXTOS */}
      <Animated.View style={{ opacity: opacidad }}>
        <Text style={styles.titulo}>La Tri</Text>
        <Text style={styles.subtitulo}>Selección Ecuatoriana de Fútbol</Text>
        <Text style={styles.mundial}>⚽ Mundial 2026 ⚽</Text>
      </Animated.View>

      {/* FOOTER */}
      <Animated.View style={[styles.footer, { opacity: opacidad }]}>
        <Text style={styles.footerTexto}>🇪🇨 ¡Vamos Ecuador! 🇪🇨</Text>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002D62',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circuloSuperior: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#FFD700',
    opacity: 0.15,
  },
  circuloInferior: {
    position: 'absolute',
    bottom: -100,
    left: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#FF0000',
    opacity: 0.1,
  },
  logoContainer: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#FFD700',
  },
  logo: {
    width: 160,
    height: 160,
  },
  titulo: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 1,
  },
  mundial: {
    fontSize: 18,
    color: '#FFD700',
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
  },
  footerTexto: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 2,
  },
});