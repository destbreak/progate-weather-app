import { StyleSheet, View } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
