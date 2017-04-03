import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	StatusBar,
	TouchableOpacity
	 } from 'react-native';

export default class About extends Component {
	render() {
		return (
			<View>
				<Text>About page</Text>
				<TouchableOpacity>Back</TouchableOpacity>
			</View>
		);
	}
}

