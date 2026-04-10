import { StyleSheet, View, Image, Text } from 'react-native'

export default function AnimeCard({ anime }) {
  return (
    <View key={anime.mal_id.toString()} style={styles.card}>
      <Image
        source={{ uri: anime.images.jpg.image_url }}
        style={styles.image}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.score}>{anime.score}</Text>
        <Text style={styles.title}>{anime.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2c2c2c2c',
    borderColor: 'black',
  },
  cardContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 125,
    left: 0,
    padding: 5,
    borderRadius: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flexShrink: 1,
    color: 'white',
    textAlign: 'center',
  },
  score: {
    textAlign: 'center',
    textAlignVertical: 'top',
    color: '#ffff00',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
