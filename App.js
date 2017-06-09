import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import configureStore from './src/store/store.js';
const {connect, Provider} = require('react-redux');
import {Action, ActionCreator, bindActionCreators} from 'redux';
import Monkey from './src/components/monkey.js';

const store = () => {
  console.log("store init");
  return configureStore()
};
const xActon = ({
  type: "DIdloAction",
  params: "hui"
})

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store()}>
        <View style={styles.container}>
          <Text>First Test of this Framework</Text>
          <Text>Jebem ti mater kurac</Text>
          <Monkey />
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              console.log('pressed')
            }}
            underlayColor={'#1ac5c0'}
          >
            <Text style={styles.buttonText}>
              Salam musoram
            </Text>
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1ac5c0',
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttonText: {
   color: '#fff',
    fontSize: 20,
  }
});
