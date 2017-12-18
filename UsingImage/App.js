import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import MenuItem from './app/components/MenuItem.js';

export default class App extends Component<{}> {
  render() {
    return (   
        <ImageBackground
          source={require('./app/img/bg.jpg')}
          style={styles.container}>

          <View style={styles.overlayContainer}>

            <View style={styles.top}>
              <Text style={styles.header}>H O M E</Text>
            </View>

            <View style={styles.menuContainer}>

              <MenuItem itemImage={require('./app/img/icon1.jpg')}/>
              <MenuItem itemImage={require('./app/img/icon2.jpg')}/>
              <MenuItem itemImage={require('./app/img/icon3.jpg')}/>
              <MenuItem itemImage={require('./app/img/icon4.jpg')}/>
              <MenuItem itemImage={require('./app/img/icon5.jpg')}/>
              <MenuItem itemImage={require('./app/img/icon1.jpg')}/>

            </View>

          </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    overlayContainer: {
      flex: 1,
      backgroundColor: 'rgba(47,163,218, .4)'
    },
    top: {
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      color: '#fff',
      fontSize: 28,
      borderColor: '#fff',
      borderWidth: 2,
      padding: 20,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: 'rgba(255,255,255, .1)'
    },
    menuContainer: {
      height: '40%',
      flexDirection: 'column',
      flexWrap: 'wrap',
    }
});
