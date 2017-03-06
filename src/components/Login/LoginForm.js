import React, { Component } from 'react';
import { 
	View, 
	TextInput, 
	StyleSheet, 
	Image, 
	TouchableOpacity,
	Text
	 } from 'react-native';

export default class LoginForm extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<TextInput 
					placeholder="Username or Email"
					placeholderTextColor="rgba(255,255,255,0.4)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input} />
				<TextInput 
					placeholder="Password"
					placeholderTextColor="rgba(255,255,255,0.4)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={(input) => this.passwordInput = input} />
			<TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
			</View>
		);
	}
}

const styles =  StyleSheet.create({
	wrapper: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 10,
		color: '#ecf0f1',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#e67e22',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#ecf0f1',
		fontWeight: '700'
	}
});