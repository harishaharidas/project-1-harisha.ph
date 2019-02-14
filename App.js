/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InputItem from "./src/componet/InputItem/InputItem";


export default class App extends Component {

  state = {
    contents: []
  };


  contentAddedHandler = contentName => {
    this.setState(prevState => {
      return {
        contents: prevState.contents.concat({
          key: Math.random(),
          value: contentName
          // image: addImage
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>To-Do List</Text>
        <Text style={styles.sub}>Add List:</Text>
        <InputItem onContentAdded={this.contentHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2C3E50'
  },
  head: {
    backgroundColor: '#2C3E50',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#ECF0F1'
  },
  sub: {
    fontSize: 18,
    textAlign: 'left',
    color: '#ECF0F1',
    paddingLeft: 13
  }
});
