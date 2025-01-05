import { Tabs } from "expo-router";
import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: COLORS.containerBackground,
          borderTopColor: COLORS.text,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.inactive,
      }}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name={"films"}
        options={{
          title: "My Films",
          tabBarLabel: "Films",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="film-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={"favorites"}
        options={{
          title: "My Favorites",
          tabBarLabel: "Favorites",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={"people"}
        options={{
          title: "All Characters",
          tabBarLabel: "Characters",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
