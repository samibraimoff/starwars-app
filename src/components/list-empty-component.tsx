import { COLORS } from "@/constants/colors";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

interface ListEmptyComponentProps {
  loading: boolean;
  message: string;
}

export default function ListEmptyComponent({
  loading,
  message,
}: ListEmptyComponentProps) {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={"large"} color={COLORS.text} />
      ) : (
        <Text style={styles.text}>{message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: COLORS.text,
  },
});
