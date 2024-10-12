import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            {/* <View style={styles.logoContainer}>
                <Image source={{uri: 'https://img.icons8.com/ios-filled/100/000000/truck.png'}} style={styles.logo} />
                <Text style={styles.appName}>DistributorPro</Text>
            </View> */}

            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            {/* Password Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            {/* Login Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            {/* Forgot Password */}
            <TouchableOpacity onPress={() => console.log('Forgot password')}>
                <Text style={styles.forgotText}>Forgot your password?</Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>Don’t have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 50,
        height: 50,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    forgotText: {
        color: '#888',
        marginTop: 20,
    },
    signupText: {
        color: '#000',
        marginTop: 10,
    },
});

export default Login;
