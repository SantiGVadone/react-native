import { useEffect, useState } from 'react'
import { Text, Image, View, FlatList, StyleSheet } from 'react-native'

const AnimeList = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getAnimes = async () => {
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime')
      const json = await response.json()
      setData(json.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAnimes()
  }, [])

  if (loading) {
    return <Text style={styles.loading}> Cargando...</Text>
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.mal_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.images.jpg.image_url }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.episodes}>{item.epidosdes}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  card: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2c2c2c2c',
    borderColor: 'black',
  },
  image: { width: 100, height: 125, left: 0, padding: 5 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    flexShrink: 1,
    color: 'white',
    paddingLeft: 20,
  },
  loading: {
    color: 'white',
    fontSize: 33,
  },
  episodes: {
    color: '#9b9b9b',
    fontSize: 30,
  },
})

export default AnimeList
