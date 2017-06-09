import React from 'react';
import {View, Text} from 'react-native';
const {connect} = require('react-redux');
import {Action, ActionCreator, bindActionCreators} from 'redux';



const xActon = () => ({
  type: "test",
  params: "test"
});

class Monkey extends React.Component {

  componentDidMount() {
    this.props.xActon();
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  xActon,
}, dispatch);

export default connect(null, mapDispatchToProps)(Monkey);