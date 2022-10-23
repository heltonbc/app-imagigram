import React, { useState } from "react";
import firebase from "firebase";
import { Text, TextInput, View, Button } from "react-native";

const Register = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async () => {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    // components imported from react native
    return (
        <View>
            <TextInput placeholder="Nome" onChange={setName} />
            <TextInput placeholder="E-mail" onChange={setEmail} />
            <TextInput
                placeholder="Password"
                secureTextEntry
                onChange={setPassword}
            />{" "}
            {/* imported too react native */}
            <Button title="Create Account" onPress={handleSubmit} />
        </View>
    );
};

export default Register;
