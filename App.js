import React from 'react';
import configureStore from './src/store/store.js';
const {Provider} = require('react-redux');
import Root from './src/components/Root.js';

const store = configureStore();

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
