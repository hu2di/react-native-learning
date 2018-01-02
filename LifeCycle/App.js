import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class LifeCycle extends Component {

  // MOUNTING
  constructor(props) {
    super(props);
    this.state={
      data:0,
    };
    console.log('void: constructor');
  }

  componentWillMount() {
    console.log('void: componentWillMount');
  }

  render() {
    console.log('void: render')
    return(
      <View style={{flex: 1, backgroundColor: 'green', justifyContent:'center', alignItems:'center'}}>
        <Text>{this.state.data}</Text>

        <Text onPress = { ()=> {this.setState({
                                                data: this.state.data+1,
                                              });} }>
          Click
        </Text>

      </View>
    );
  }

  componentDidMount() {
    console.log('void: componentDidMount');
  }

  //UPDATING
  componentWillReceiveProps(nextProps) {
    console.log('void: componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('void: shouldComponentUpdate');
    return true; //True: can update ; False: cannot update
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('void: componentWillUpdate');
  }

  //render(){ return(); }

  componentDidUpdate(prevProps, prevState) {
    console.log('void: componentDidUpdate');
  }

  //UNMOUNTING
  componentWillUnmount() {
    console.log('void: componentWillUnmount');
  }
}