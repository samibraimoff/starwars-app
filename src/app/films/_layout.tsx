import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";

export default function FilmLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "My films" }} />
      <Stack.Screen name="[id]" options={{ title: "Film details" }} />
    </Stack>
  );
}
