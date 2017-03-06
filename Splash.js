import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Image, 
	StatusBar
	 } from 'react-native';

export default class Splash extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
			<StatusBar backgroundColor='#ecf0f1' barStyle='light-content' />
			<Image style={styles.photo} source={require('./img/oldpbphoto.jpg')} />
			<Text style={styles.title}>
			This is me :)
			</Text>
			</View>
		);
	}
}

const styles =  StyleSheet.create({
	wrapper: {
	backgroundColor: '#16a085', 
	flex: 1, 
	justifyContent: 'center', 
	alignItems: 'center'
	},
	title: {
		color: '#ecf0f1',
		fontSize: 40,
		fontWeight: 'bold'
	},
	photo: {
		height: 150,
		width: 150,
		borderRadius: 50
	}
});