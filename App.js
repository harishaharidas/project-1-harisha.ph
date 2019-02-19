/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, ScrollView } from 'react-native';

import InputItem from "./src/componet/InputItem/InputItem";
import DeleteList from './src/componet/DeleteList/DeletList';

export default class App extends Component {

  state = {
    contentName: "",
    contents: []
  };


  contentHandler = contentName => {
    this.setState(prevState => {
      return {
        contents: prevState.contents.concat({
          key: Math.random(),
          name: contentName
        })
      };
    });
  };

  contentDeleteHandler = key => {
    this.setState(prevState => {
      return {
        contents: prevState.contents.filter(content => {
          return content.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.head}>To-Do List</Text>
            <Text style={styles.sub}>Add List:</Text>
            <InputItem onContentAdded={this.contentHandler} />
          </View>

          <View style={styles.main}>
            <DeleteList contents={this.state.contents} onItemDeleted={this.contentDeleteHandler} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flex: 2,
    borderColor: '#ECF0F1',
    backgroundColor: '#2C3E50',
    borderWidth: 3
  },
  head: {
    backgroundColor: '#2C3E50',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#ECF0F1',
    fontWeight: 'bold'
  },
  sub: {
    fontSize: 18,
    textAlign: 'left',
    color: '#ECF0F1',
    paddingLeft: 13
  },
  main: {
    flex: 4,
    borderColor: '#ECF0F1',
    borderWidth: 3
  }
});
