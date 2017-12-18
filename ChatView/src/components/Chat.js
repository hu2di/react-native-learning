import React, { Component } from 'react';
import {
	View,
	Text,
} from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {

	state = {
		message: []
	}

	render() {
		return (
			<GiftedChat
				message={this.state.message}
				onSend={(message)=>{
					alert(message);
				}}
				user={{
					_id: 1,
				}}
			/>
		);
	}
}