import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  menuContainer: {
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    height: '8%',
    width: '100%',
    textAlign: 'center'
  },
  menuItem: {
    color: 'white',
    width: '50%',
    textAlign: 'center',
  }
});

class Menu extends Component {
  render() {
    return(
      <View style={styles.menuContainer}>
        <Text style={styles.menuItem}><FontAwesomeIcon icon={ faHome } /> </Text>
        <Text style={styles.menuItem}>Friends</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}></Text>
        <Menu />
      </View>
    );
  }
}
