import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class Love extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.name} - {this.props.year}</Text>
			</View>
		);
	}
}

// Love.propType = {
// 	name:React.PropTypes.string.isRequired,
// 	year:React.PropTypes.number
// }

const styles = StyleSheet.create({
	container: {
		backgroundColor:'red'
	}
});