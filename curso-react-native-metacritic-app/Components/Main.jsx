import { useEffect, useState } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native' //dice que no lo encuentra pero funciona bien igual
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AnimeCard from './AnimeCard'

export default function Main() {
  const [animes, setAnimes] = useState([])
  const [loading, setLoading] = useState(true)
  const insets = useSafeAreaInsets()

  const getAnimes = async () => {
    //esto deberia ir en otra carpeta, pero como estoy practicando lo dejo aca por ahora
    try {
      const response = await fetch('https://api.jikan.moe/v4/top/anime')
      const json = await response.json()
      setAnimes(json.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAnimes()
  }, [])
  if (loading) return <ActivityIndicator />
  return (
    <View style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}>
      {animes.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList //flatlist no recibe childrens
          data={animes} //recibe primero que nada la data
          keyExtractor={({ anime }) => anime?.mal_id.toString()} //hay que decirle de donde sacar la ID/ key
          renderItem={({ item }) => <AnimeCard anime={item} />} //le digo como quiero que renderice cada una de esas keys
        />
      )}
    </View>
  )
}
