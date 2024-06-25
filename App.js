import React, { useState } from "react";
import axios from "axios";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";
import { API_KEY } from "@env";

export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState("");

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return <Text>Terjadi kesalahan. Mohon coba kembali dengan nama kota yang benar</Text>;
      default:
        return;
    }
  };

  const searchWeather = (location) => {
    const language = "id";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    setStatus("loading");
    axios
      .get(`${url}?q=${location}&appid=${API_KEY}&lang=${language}`)
      .then((response) => {
        const data = response.data;
        data.weather[0].description = data.weather[0].description.toUpperCase();
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        data.main.temp_max -= 273.15;
        data.main.temp_max = data.main.temp_max.toFixed(2);
        data.main.temp_min -= 273.15;
        data.main.temp_min = data.main.temp_min.toFixed(2);
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  marginTop20: {
    marginTop: 20,
  },
});
