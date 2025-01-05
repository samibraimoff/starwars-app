import { COLORS } from "@/constants/colors";
import { Film } from "@/types";
import { Link } from "expo-router";
import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function FilmItem(film: ListRenderItemInfo<Film>) {
  const id = film.item.properties.url.split("/").filter(Boolean).pop();
  return (
    <Link href={`/films/${id}`} asChild>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.title}>{film.item.properties.title}</Text>
          <Text style={styles.paragraph}>
            Release date: {film.item.properties.release_date}
          </Text>
          <Text style={styles.paragraph}>
            Episode: {film.item.properties.episode_id}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    backgroundColor: COLORS.background,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  paragraph: {
    color: "#ffffff",
    fontSize: 16,
  },
});
