import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const firebaseConfig = {
    apiKey: "AIzaSyDYuBvk8l83TLFUNT-QQ_FJRsjgk3jb0NA",
    authDomain: "imagigram-e3a48.firebaseapp.com",
    projectId: "imagigram-e3a48",
    storageBucket: "imagigram-e3a48.appspot.com",
    messagingSenderId: "43882132994",
    appId: "1:43882132994:web:861a5fec9f4c8943b8591b",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                setIsLoggedIn(false);
            } else {
                setIsLoggedIn(true);
            }
            setIsLoading(false);
        });
    }, []);

    const Loading = () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Carregando...</Text>
        </View>
    );

    const LoggedOut = () => (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Landing"
                    component={Landing}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );

    const LoggedIn = () => (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Bem Vindo!</Text>
        </View>
    );

    if (isLoading) {
        return <Loading />;
    }
    if (isLoggedIn) {
        return <LoggedIn />;
    }
    return <LoggedOut />;
};
export default App;

// Autenticação e Rotas Condicionais.
/*  */
