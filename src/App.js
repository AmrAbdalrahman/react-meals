import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import MealsNavigator from "./navigation/MealsNavigator";
import {useScreens} from "react-native-screens";

useScreens();

const App = () => {
    return <MealsNavigator/>
};

const styles = StyleSheet.create({});

export default App;
