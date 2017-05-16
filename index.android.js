import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Forecast extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'indigo',
  }
});

AppRegistry.registerComponent('Forecast', () => Forecast);
