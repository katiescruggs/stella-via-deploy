import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ImageBackground, TextInput, View, Text, Button, Image, TouchableHighlight } from 'react-native';
import NavButton from './NavButton.js';

const Welcome = (props) => {
  // handlePress = () => {
  //   console.log('pressed')
  // } 

  const buttons = [
    'Search', 
    'Tonight\'s Sky', 
    'Daily Image', 
    'Login'
  ];

  const paths = [
    require('../assets/search.png'),
    require('../assets/planet.png'),
    require('../assets/photo.png'),
    require('../assets/user.png'),
  ];

  const navButtons = buttons.map((name, index) => {
    return (
      <NavButton 
        key={`nav-btn-${index}`}
        name={name}
        path={paths[index]}
      />
    )
  })

  return (
    <ImageBackground source={require('../assets/star-background.jpg')} style={styles.container}>
      <Text style={styles.mainTitle}>Stella Via</Text>
      <View style={styles.nav}>
      {navButtons}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  mainTitle: {
    fontSize: 80,
    color: '#fff',
    marginTop: 70,
    margin: 15,
    textAlign: 'center'
  },
  nav: {
    borderRadius: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 3,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 30,
    margin: 15,
  }
})

export default Welcome;