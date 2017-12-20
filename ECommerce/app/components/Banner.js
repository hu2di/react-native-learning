import React from 'react';
import {
	View,
	ImageBackground,
	StyleSheet,
} from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component {
	render() {
		return (

			<ImageBackground 
				source={require('../img/img5.jpg')}
				style={styles.banner} >
				
				<ImageOverlay
					header='- React Native -'
					paragraph='- e-commerce -' />

			</ImageBackground>

		);
	}
}

const styles = StyleSheet.create({
	banner: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	}
})