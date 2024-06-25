import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const getCurrentDate = () => {
  const dayList = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

  const monthList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  var day = new Date().getDay();
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return `${dayList[day]}, ${date} ${monthList[month]} ${year}`;
};

const WeatherInfo = ({ weatherData }) => {
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>{weatherData.name}</Text>
      <Text style={styles.text}>{getCurrentDate()}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp}°C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
      </View>
      <Text style={[styles.text, styles.bold]}>
        {weatherData.weather[0].main} {weatherData.main.temp_max}°/{weatherData.main.temp_min}°
      </Text>
      <Text style={[styles.text, styles.description]}>{weatherData.weather[0].description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Jarak Pandang :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Kecepatan Angin :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  description: {
    textTransform: "capitalize",
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default WeatherInfo;
