import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component<{}> {
  constructor(props) {
      super(props);
      this.state={
        somayman:5
      }
  }

  clickMe(){
    console.log('Click me!');
    this.setState({
      somayman:this.state.somayman + 1
    })
  }

  render() {
    return (
      <View>
        <Text style={{fontSize:100}}>{this.state.somayman}</Text> 
        <TouchableOpacity onPress={()=>{this.clickMe()}}>
          <View style={{width:100, height:20, backgroundColor:'red'}}>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
