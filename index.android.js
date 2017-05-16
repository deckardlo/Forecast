import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

import WeatherView from './app/components/weather_view.js';
const PAGES = 3;

const CLEAR = "CLEAR";
const OVERCAST = "OVERCAST";
const STORM = "STORM";
const SNOW = "SNOW";
const SHOWERS = "SHOWERS";
const SHOWERS_SCATERRED = "SHOWERS_SCATERRED";
const FEW_CLOUDS = "FEW_CLOUDS";
const CLEAR_NIGHT = "CLEAR_NIGHT";
const CLOUDY_SUNNY = "CLOUDY_SUNNY";

var map_colors = new Map();
map_colors.set(CLEAR, "#7ec0ee");
map_colors.set(CLOUDY_SUNNY, "#4277a6");
map_colors.set(OVERCAST, "#808080");
map_colors.set(STORM, "#4C4C4C");
map_colors.set(SNOW, "#f0f0f0");
map_colors.set(SHOWERS, "#525252");
map_colors.set(SHOWERS_SCATERRED, "#627D8D");
map_colors.set(FEW_CLOUDS, "#DFE5E8");
map_colors.set(CLEAR_NIGHT, "#1A2226");

export default class Forecast extends Component {
  render() {
    return (
      <WeatherView city = "MANAUS" weather = "CLEAR" />
    );
  }
}

AppRegistry.registerComponent('Forecast', () => Forecast);
