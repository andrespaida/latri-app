import {
  StyleSheet, Text, View,
  Image, ScrollView
} from 'react-native';

const jugadores = [
  { id: '1', nombre: 'Hernán Galíndez',  posicion: 'Portero',       dorsal: '1',   emoji: '🧤' },
  { id: '2', nombre: 'Piero Hincapié',   posicion: 'Defensa',       dorsal: '3',   emoji: '🛡️' },
  { id: '3', nombre: 'Joel Ordóñez',     posicion: 'Defensa',       dorsal: '4',   emoji: '🛡️' },
  { id: '4', nombre: 'Moisés Caicedo',   posicion: 'Mediocampista', dorsal: '23',  emoji: '⚙️' },
  { id: '5', nombre: 'Kendry Páez',      posicion: 'Mediocampista', dorsal: '10',  emoji: '⚙️' },
  { id: '6', nombre: 'Gonzalo Plata',    posicion: 'Delantero',     dorsal: '19',  emoji: '⚡' },
  { id: '7', nombre: 'Enner Valencia',   posicion: 'Delantero',     dorsal: '13',  emoji: '🔥' },
  { id: '8', nombre: 'John Yeboah',      posicion: 'Delantero',     dorsal: '9',   emoji: '💨' },
];

const estadisticas = [
  { label: 'Ranking FIFA',     valor: '23°',  emoji: '🌍' },
  { label: 'Mundiales',        valor: '5',    emoji: '🏆' },
  { label: 'Confederación',    valor: 'CONMEBOL', emoji: '🌎' },
  { label: 'Estadio',          valor: 'Rodrigo Paz Delgado', emoji: '🏟️' },
];

const TarjetaJugador = ({ nombre, posicion, dorsal, emoji }) => (
  <View style={styles.tarjetaJugador}>
    <View style={styles.dorsalContainer}>
      <Text style={styles.dorsal}>{dorsal}</Text>
    </View>
    <View style={styles.infoJugador}>
      <Text style={styles.nombreJugador}>{nombre}</Text>
      <Text style={styles.posicionJugador}>{emoji} {posicion}</Text>
    </View>
  </View>
);

const TarjetaEstadistica = ({ label, valor, emoji }) => (
  <View style={styles.tarjetaEstadistica}>
    <Text style={styles.estadisticaEmoji}>{emoji}</Text>
    <Text style={styles.estadisticaValor}>{valor}</Text>
    <Text style={styles.estadisticaLabel}>{label}</Text>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../assets/escudo.png')}
          style={styles.escudo}
          resizeMode="contain"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.headerTitulo}>🇪🇨 La Tri</Text>
          <Text style={styles.headerSubtitulo}>Selección Ecuatoriana</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>⚽ Mundial 2026</Text>
          </View>
        </View>
      </View>

      {/* ESTADÍSTICAS */}
      <Text style={styles.seccionTitulo}>📊 Datos del Equipo</Text>
      <View style={styles.estadisticasGrid}>
        {estadisticas.map((est, index) => (
          <TarjetaEstadistica
            key={index}
            label={est.label}
            valor={est.valor}
            emoji={est.emoji}
          />
        ))}
      </View>

      {/* DESCRIPCIÓN */}
      <View style={styles.descripcionContainer}>
        <Text style={styles.descripcionTitulo}>🇪🇨 Sobre La Tri</Text>
        <Text style={styles.descripcionTexto}>
          La Selección Ecuatoriana de Fútbol, conocida cariñosamente como
          "La Tri" por los colores de su camiseta, representa a Ecuador
          en competencias internacionales. Clasificó a su quinto Mundial
          consecutivo para la edición 2026 en USA, México y Canadá.
        </Text>
      </View>

      {/* JUGADORES DESTACADOS */}
      <Text style={styles.seccionTitulo}>⭐ Jugadores Destacados</Text>
      <View style={styles.listaJugadores}>
        {jugadores.map((jugador) => (
          <TarjetaJugador
            key={jugador.id}
            nombre={jugador.nombre}
            posicion={jugador.posicion}
            dorsal={jugador.dorsal}
            emoji={jugador.emoji}
          />
        ))}
      </View>

      {/* PRÓXIMOS PARTIDOS */}
      <Text style={styles.seccionTitulo}>📅 Mundial 2026</Text>
      <View style={styles.mundialContainer}>
        <View style={styles.mundialItem}>
          <Text style={styles.mundialFecha}>Junio 2026</Text>
          <Text style={styles.mundialTexto}>🇺🇸 Fase de Grupos</Text>
        </View>
        <View style={styles.mundialItem}>
          <Text style={styles.mundialFecha}>Julio 2026</Text>
          <Text style={styles.mundialTexto}>🏆 Eliminatorias</Text>
        </View>
        <View style={styles.mundialItem}>
          <Text style={styles.mundialFecha}>Meta</Text>
          <Text style={styles.mundialTexto}>🥇 ¡Llegar a Cuartos!</Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerTexto}>🇪🇨 ¡Arriba Ecuador! 🇪🇨</Text>
        <Text style={styles.footerSubTexto}>FEF — Federación Ecuatoriana de Fútbol</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1628',
  },
  header: {
    backgroundColor: '#002D62',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
  },
  escudo: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  headerSubtitulo: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#FFD700',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#002D62',
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 24,
    marginBottom: 12,
    marginHorizontal: 16,
  },
  estadisticasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 8,
  },
  tarjetaEstadistica: {
    backgroundColor: '#1a3a5c',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    width: '47%',
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
  },
  estadisticaEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  estadisticaValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  estadisticaLabel: {
    fontSize: 12,
    color: '#aaaaaa',
    marginTop: 4,
    textAlign: 'center',
  },
  descripcionContainer: {
    backgroundColor: '#1a3a5c',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  descripcionTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 8,
  },
  descripcionTexto: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 22,
  },
  listaJugadores: {
    paddingHorizontal: 16,
    gap: 8,
  },
  tarjetaJugador: {
    backgroundColor: '#1a3a5c',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FFD700',
  },
  dorsalContainer: {
    width: 44,
    height: 44,
    backgroundColor: '#002D62',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  dorsal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  infoJugador: {
    flex: 1,
  },
  nombreJugador: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  posicionJugador: {
    fontSize: 13,
    color: '#aaaaaa',
    marginTop: 2,
  },
  mundialContainer: {
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 8,
  },
  mundialItem: {
    backgroundColor: '#1a3a5c',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FF0000',
  },
  mundialFecha: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  mundialTexto: {
    fontSize: 14,
    color: '#ffffff',
  },
  footerContainer: {
    alignItems: 'center',
    padding: 30,
    marginTop: 10,
  },
  footerTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  footerSubTexto: {
    fontSize: 12,
    color: '#aaaaaa',
    marginTop: 6,
  },
});