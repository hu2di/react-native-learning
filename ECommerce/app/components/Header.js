import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class Header extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Image
					source={require('../img/cart.png')}
					style={styles.cart}
				/>
				<Text style={styles.logo}>e-commerce</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 80,
		marginTop: 20,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		borderBottomWidth: 4,
		borderBottomColor: '#ccc',
	},
	cart: {
		width: 40,
		height: 40,
	},
	logo: {
		fontSize: 20,
		marginLeft: 10,
		fontStyle: 'italic',
		color: '#292929',
	}
});