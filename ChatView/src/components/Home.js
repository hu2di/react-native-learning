import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import {
	Actions,
} from 'react-native-router-flux'

export default class Home extends Component {

	state = {
		name: '',
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>Enter your name :</Text>

				<TextInput
					style={styles.nameInput}
					placeholder='Jon Snow'
					onChangeText={(text)=>{
						this.setState({
							name: text,
						})
					}}
					value={this.state.name}
				/>
				
				<TouchableOpacity
					onPress={()=>{
						Actions.chat({
							name: this.state.name,
						});
					}}
				>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 20,
		marginLeft: 20,
		fontSize: 20,
	},
	nameInput: {
		height: 40,
		borderWidth: 2,
		borderColor: 'black',
		margin: 20,
		padding: 5,
	},
	buttonText: {
		marginLeft: 20,
		fontSize: 20,
	}
});