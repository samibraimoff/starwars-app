import { View, Text } from "react-native";
import { Redirect } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Redirect href={"/films"} />
    </View>
  );
}
