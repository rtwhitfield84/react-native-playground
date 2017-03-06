import React, { Component } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	Image, 
	StatusBar,
	KeyboardAvoidingView
	 } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
			<StatusBar backgroundColor='#ecf0f1' barStyle='light-content' />
			<View style={styles.logoContainer}>
			<Image style={styles.logo} source={require('../../../img/oldpbphoto.jpg')} />
			<Text style={styles.title}>
			A practice login and splash app for me
			</Text>
			</View>
				<View style={styles.formContainer}>
				<LoginForm />
			</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles =  StyleSheet.create({
	wrapper: {
	backgroundColor: '#16a085', 
	flex: 1, 
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		height: 100,
		width: 100,
		borderRadius: 50
	},
	title: {
		color: '#ecf0f1',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.85
	}
});