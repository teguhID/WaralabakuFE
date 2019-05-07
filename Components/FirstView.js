import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity , Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class FirstView extends Component {
render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('./../Components/images/logo.png')}/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={ ()=> Actions.Quisioner() }>
                        <Image source={require('./../Components/images/buttonAyoCoba.png')}/>
                    </TouchableOpacity>    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00aad4ff',
    },
    logo: {
        flex: 3,
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
});