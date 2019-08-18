import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import {AsyncStorage} from 'react-native'

class FirstView extends Component{
    constructor() {
        super()
        this.state = {
            id:0,
        }
    }

    componentDidMount(){
        console.disableYellowBox = true
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.history}> 
                    <TouchableOpacity onPress={ ()=> Actions.History() }>
                        <Image source={require('./../Components/images/history.png')}/>
                    </TouchableOpacity>  
                </View>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={ ()=> Actions.Kuisioner() }>
                        <Image source={require('./../Components/images/logo.png')}/>
                    </TouchableOpacity>   
                </View>
                <View style={styles.start}>
                    <TouchableOpacity onPress={ ()=> Actions.Kuisioner() }>
                        <Image source={require('./../Components/images/buttonAyoCoba.png')}/>
                    </TouchableOpacity>   
                </View>
                {/* <Button title="Simpan Data ke LocalStorage" onPress={this.getId}/>
                <Button title="Display Data" onPress={this.displayId}/>
                <Button title="Clear Data" onPress={this.clearData}/> */}
            </View>
        )
    }

    // getId = async () =>{
    //     dataId = await AsyncStorage.getItem('ID')
    //     if (dataId == null ) {
    //         AsyncStorage.setItem('ID', require("uuid").v4())
    //         fetch('http://10.0.0.167:8001/api/makeHistory', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 id: await AsyncStorage.getItem('ID'),
    //                 jawaban2: 'testAndroid',
    //                 jawaban3: 'testAndroid',
    //                 jawaban4: 'testAndroid',
    //                 jawaban5: 'testAndroid',
    //                 jawaban6: 'testAndroid',
    //             }),
    //         });
    //         alert('Data Id Tersimpan')
    //         Actions.Kuisioner()
    //     } else {
    //         Actions.Kuisioner()
    //     }
    // }

    // displayId = async () => {
    //     alert(await AsyncStorage.getItem('ID')) 
    // }

    // clearData = async () =>{
    //     AsyncStorage.clear();
    // }

    // TambahDataHistori(){
    //     fetch('http://10.0.0.167:8001/api/makeHistory', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             id: 'testAndroid',
    //             url: 'testAndroid',
    //         }),
    //     });
    // }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00aad4ff',
    },

    logo:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    start: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    history: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: '5%'
    },
})

export default FirstView