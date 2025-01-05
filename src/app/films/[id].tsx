import { COLORS } from "@/constants/colors";
import { Film } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function FilmDetails() {
  const { id } = useLocalSearchParams();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFilmDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://www.swapi.tech/api/films/${id}`);
      const data = await response.json();
      setFilm(data?.result);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFilmDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  if (!film) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.error}>There is no such film details.</Text>
      </View>
    );
  }

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{film?.properties?.title}</Text>
      <Text style={styles.title}>{film?.description}</Text>
      <View style={styles.info}>
        <Text style={styles.paragraph}>
          Director: {film?.properties?.director}
        </Text>
        <Text style={styles.paragraph}>
          Release date: {film?.properties?.release_date}
        </Text>
        <Text style={styles.paragraph}>
          Episode: {film?.properties.episode_id}
        </Text>

        <Text style={styles.paragraph}>
          Producers: {film?.properties?.producer}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontSize: 18,
    color: COLORS.text,
  },
  titleContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 16,
    color: "#ffffff",
  },
  info: {
    marginTop: 15,
  },
});
