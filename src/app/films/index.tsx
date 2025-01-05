import { View, StyleSheet, FlatList, RefreshControl } from "react-native";
import { COLORS } from "@/constants/colors";
import { useEffect, useState } from "react";
import { Film } from "@/types";
import ListEmptyComponent from "@/components/list-empty-component";
import FilmItem from "@/components/film-item";

export default function FilmsScreen() {
  const [films, setFilms] = useState<Film[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://www.swapi.tech/api/films");
      const data = await response.json();
      setFilms(data?.result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    fetchFilms();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchFilms();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.properties.episode_id.toString()}
        renderItem={({ item }) => <FilmItem item={item} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={fetchFilms}
            tintColor={COLORS.text}
          />
        }
        ListEmptyComponent={
          <ListEmptyComponent
            loading={loading}
            message="No film data is available."
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.containerBackground,
  },
});
