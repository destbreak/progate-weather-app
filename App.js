import React from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";
import { API_KEY } from "@env";

export default function App() {
  const searchWeather = (location) => {
    const url = "https://api.openweathermap.org/data/2.5/weather";

    axios
      .get(`${url}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <WeatherInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
