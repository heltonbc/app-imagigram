import React, { useState } from "react";
import firebase from "firebase";
import { Text, TextInput, View, Button } from "react-native";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
    };

    return (
        <View>
            <TextInput placeholder="E-mail" onChange={setEmail} />
            <TextInput placeholder="Password" secureTextEntry onChange={setPassword} />
            <Button title="Login" onPress={handleSubmit} />
        </View>
    );
};

export default Login;
