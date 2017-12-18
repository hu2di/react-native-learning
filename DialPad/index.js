import React, { Component }  from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';

export default class MainActivity extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.row}>
					<View style={styles.button}>
						<Text style={styles.number}>1</Text>
						<Text style={{color:'white'}}>NULL</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>2</Text>
						<Text style={styles.text}>ABC</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>3</Text>
						<Text style={styles.text}>DEF</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.button}>
						<Text style={styles.number}>4</Text>
						<Text style={styles.text}>GHI</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>5</Text>
						<Text style={styles.text}>JKL</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>6</Text>
						<Text style={styles.text}>MNO</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.button}>
						<Text style={styles.number}>7</Text>
						<Text style={styles.text}>PQRS</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>8</Text>
						<Text style={styles.text}>TUV</Text>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>9</Text>
						<Text style={styles.text}>XYZ</Text>
					</View>
				</View>

				<View style={styles.row}>
					<View style={styles.special}>
					</View>
					<View style={styles.button}>
						<Text style={styles.number}>0</Text>
					</View>
					<View style={styles.button}>						
							<Image
							style={{width:20, height:20}}
							source={require('./img/ic_clear.png')}/>		
					</View>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		flexDirection:'column'
	},
	row: {
		flex:1,
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:'grey'
	},
	button: {
		flex:1,
		borderRightWidth:1,
		borderRightColor:'grey',
		justifyContent:'center',
		alignItems:'center'
	},
	special: {
		flex:1,
		borderRightWidth:1,
		backgroundColor:'grey',
		borderRightColor:'grey',
		justifyContent:'center',
		alignItems:'center'
	},
	number: {
		color:'black',
		fontSize:40
	},
	text: {
		color:'grey'
	}
});