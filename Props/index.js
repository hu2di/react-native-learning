import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text
} from 'react-native';
import Love from './components/love.js'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.propsInner}>
					<KhachHang hoten='Google'></KhachHang>
					<KhachHang hoten='Facebook'/>
					<KhachHang hoten='HuyHung Dinh'></KhachHang>
				</View>
				<View style={styles.propsOuter}>
					<Love name='Hu-Li'/>
					<Love name='Li-Hu' year='2017'/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: 'yellow'
	},
	propsInner: {
		flex: 1,
		backgroundColor: 'blue'
	},
	propsOuter: {
		flex: 1,
		backgroundColor: 'green'
	}
});

export class KhachHang extends Component {
	render() {
		return (
			<View style={{backgroundColor:'yellow'}}>
				<Text>{this.props.hoten}</Text>
			</View>
		);
	}
}