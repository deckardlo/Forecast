import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  Button,
  View
} from 'react-native';

const onButtonClicked = () => {
  Alert.alert("button clicked!");
};

class WeatherView extends Component {

  render() {
    let city_name = this.props.city;
    let weather_type = this.props.weather;
    return(
      <View style={styles.container}>
        <Text style={styles.city_name}>
          {city_name} - {weather_type}
        </Text>

        <Button onPress = {} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7ec0ee',
  },
  city_name: {
    fontSize: 34,
    fontWeight: 'bold',
    alignItems: 'center',
    color: 'white'
  }
});

export default WeatherView;
