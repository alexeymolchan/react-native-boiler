import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const {connect} = require('react-redux');
import {Action, ActionCreator, bindActionCreators} from 'redux';

const testAction = () => ({
  type: "Hello",
  greetings: 'Hello guys!',
});

class Root extends React.Component {

  componentDidMount() {
    this.props.testAction();
  }

  render(){
    return (
      <View style={Styles.root}>
        <Text style={Styles.text}>
          Hello World!
        </Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  text: {
    fontSize: 25,
    color: '#1ac5c0',
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  testAction,
}, dispatch);

export default connect(null, mapDispatchToProps)(Root);