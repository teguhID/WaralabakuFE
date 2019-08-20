import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {Actions} from 'react-native-router-flux'
import RadioForm from 'react-native-simple-radio-button'
import {AsyncStorage} from 'react-native'

import { connect } from 'react-redux';

class Kuisioner extends Component {
    
    constructor() {
        super()
        this.state = {
            jumlahPertanyaan: 0,
            pertanyaan: '', //PERTANYAAN
            values:1, //JAWABAN TERPILH
            jawaban: [
                {label: '', value: ''}, // PILIHAN JAWABAN
                {label: '', value: ''},
            ],
            jawaban1 : '',
            jawaban2 : '',
            jawaban3 : '',
            jawaban4 : '',
            jawaban5 : '',
            jawaban6 : '',
            jawaban7 : '',
            // url: 'http://192.168.43.234:8001/',
            // url: 'http://10.0.0.167:8001/',,
            url: 'https://waralabaku.000webhostapp.com/',
        }
    }

    componentWillMount(){
        this.incrementPertanyaan()
    }

    incrementPertanyaan=()=>{
        this.setState({ jumlahPertanyaan: this.state.jumlahPertanyaan + 1 })
        if (this.state.jumlahPertanyaan == 0) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Apakah kamu ? ',
                jawaban: [
                    {label: 'seorang pemula dalam ber wirausaha', value: '1'}, // PILIHAN JAWABAN
                    {label: 'sudah berpengalaman di bidang wirausaha', value: '2'},
                ],
                // jawaban1 : this.state.values,
            })
            // this.state.values == '1' ? this.props.Jawaban1_Pilihan1(): this.props.Jawaban1_Pilihan2()
        }
        if (this.state.jumlahPertanyaan == 1) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Jenis waralaba apa yang kamu inginkan ? ',
                jawaban: [
                    {label: 'makanan', value: '1'},
                    {label: 'minuman', value: '2'},
                    {label: 'keduanya', value: '3'},
                ],
                jawaban1 : this.state.values,
            })
            this.state.values == '1' ? this.props.Jawaban1_Pilihan1(): this.props.Jawaban1_Pilihan2()
        }
        if (this.state.jumlahPertanyaan == 2) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Berapa modal yang kamu punya ? ',
                jawaban: [
                    {label: 'Kurang dari 7 juta', value: '1'},
                    {label: 'Lebih dari 7 juta', value: '2'},
                ],
                jawaban2 : this.state.values,
        })
            this.state.values == '1' ? this.props.Jawaban2_Pilihan1(): this.state.values == '2' ? this.props.Jawaban2_Pilihan2(): this.props.Jawaban2_Pilihan3()
        }
        if (this.state.jumlahPertanyaan == 3) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Apakah anda ingin waralaba yang ? ',
                jawaban: [
                    {label: 'Sudah banyak outlet nya', value: '1'},
                    {label: 'Outlet nya masih jarang', value: '2'},
                ],
                jawaban3 : this.state.values,
        })
            this.state.values == '1' ? this.props.Jawaban3_Pilihan1(): this.props.Jawaban3_Pilihan2()
        }
        if (this.state.jumlahPertanyaan == 4) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Apakah anda ingin waralaba yang ? ',
                jawaban: [
                    {label: 'Memasang biaya tambahan di luar modal', value: '1'},
                    {label: 'Memasang semua biaya nya di modal awal', value: '2'},
                ],
                jawaban4 : this.state.values,
        })
            this.state.values == '1' ? this.props.Jawaban4_Pilihan1(): this.props.Jawaban4_Pilihan2()
        }
        if (this.state.jumlahPertanyaan == 5) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Apakah anda tipe orang yang ?',
                jawaban: [
                    {label: 'Ingin cepat dapat untung meskipun kecil', value: '1'},
                    {label: 'Sabar menunggu lama lalu mendapat untung yang besar', value: '2'},
                ],
                jawaban5 : this.state.values,
        })
            this.state.values == '1' ? this.props.Jawaban5_Pilihan1(): this.props.Jawaban5_Pilihan2()
        }
        if (this.state.jumlahPertanyaan == 6) { //PERTANYAAN PERTAMA
            this.setState({
                pertanyaan:'Apakah anda sebelumnya pernah mencoba usaha waralaba ?',
                jawaban: [
                    {label: 'ya', value: '1'},
                    {label: 'tidak', value: '2'},
                ],
                jawaban6 : this.state.values,
        })
            this.state.values == '1' ? this.props.Jawaban6_Pilihan1(): this.props.Jawaban6_Pilihan2()
        }
        if (this.state.jumlahPertanyaan >= 7) {
            this.setState({
                jawaban7 : this.state.values,
                jumlahPertanyaan : 1,
                pertanyaan:'Apakah kamu ? ',
                jawaban: [
                    {label: 'seorang pemula dalam ber wirausaha', value: '1'}, // PILIHAN JAWABAN
                    {label: 'sudah berpengalaman di bidang wirausaha', value: '2'},
                ],
                // jawaban1 : this.state.values,
            })
            this.state.values == '1' ? this.props.Jawaban7_Pilihan1(): this.props.Jawaban7_Pilihan2()
            this.getId()
        }
    }

    getId = async () =>{
        dataId = await AsyncStorage.getItem('ID')
        if (dataId == null ) {
            AsyncStorage.setItem('ID', require("uuid").v4())
            AsyncStorage.multiSet( [['jawaban2', '-'], ['jawaban3', '-'], ['jawaban4', '-'], ['jawaban5', '-'], ['jawaban6', '-']] );
            alert('Data Id Tersimpan' + await AsyncStorage.getItem('ID') + ',,,' + await AsyncStorage.getItem('jawaban2') + ',,,' + await AsyncStorage.getItem('jawaban3') + ',,,' + await AsyncStorage.getItem('jawaban4') + ',,,' + await AsyncStorage.getItem('jawaban5') + ',,,' + await AsyncStorage.getItem('jawaban6'))
            Actions.Result()
        } else {
            // alert('Data Sudah Ada' + await AsyncStorage.getItem('ID') + ',,,' + await AsyncStorage.getItem('jawaban2') + ',,,' + await AsyncStorage.getItem('jawaban3') + ',,,' + await AsyncStorage.getItem('jawaban4') + ',,,' + await AsyncStorage.getItem('jawaban5') + ',,,' + await AsyncStorage.getItem('jawaban6'))
            fetch( this.state.url + 'api/makeHistory', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: await AsyncStorage.getItem('ID'),
                    jawaban2: this.props.jawaban2,
                    jawaban3: this.props.jawaban3,
                    jawaban4: this.props.jawaban4,
                    jawaban5: this.props.jawaban5,
                    jawaban6: this.props.jawaban6,
                }),
            });
            Actions.Result()
        }
    }

    render(){
        return(
            <View style={styles.container}>
                {/* <Text>jawaban1 : {this.state.jawaban1}</Text>
                <Text>jawaban1 Redux : {this.props.jawaban1}</Text>
                <Text>jawaban2 : {this.state.jawaban2}</Text>
                <Text>jawaban2 Redux : {this.props.jawaban2}</Text>
                <Text>jawaban3 : {this.state.jawaban3}</Text>
                <Text>jawaban3 Redux : {this.props.jawaban3}</Text>
                <Text>jawaban4 : {this.state.jawaban4}</Text>
                <Text>jawaban4 Redux : {this.props.jawaban4}</Text>
                <Text>jawaban5 : {this.state.jawaban5}</Text>
                <Text>jawaban5 Redux : {this.props.jawaban5}</Text>
                <Text>jawaban6 : {this.state.jawaban6}</Text>
                <Text>jawaban6 Redux : {this.props.jawaban6}</Text>
                <Text>jawaban7 : {this.state.jawaban7}</Text>
                <Text>jawaban7 Redux : {this.props.jawaban7}</Text>
                <Text></Text> */}
                {/* <Text>Pertanyaan : {this.state.jumlahPertanyaan}</Text>
                <Text></Text> */}
                <Text style={{ paddingBottom:'10%', fontSize: 20, textAlign:'center' }}>{this.state.pertanyaan}</Text>
                <RadioForm
                    radio_props={this.state.jawaban}
                    initial={0}
                    onPress={(value) => {this.setState({values:value})}}
                    labelStyle={{ fontSize:20, color:'#006680ff', textAlign: 'left' }}
                    style={{ paddingHorizontal:'15%', }}
                />
                {/* <Text>{ this.state.values }</Text>
                <Text></Text> */}
                <TouchableOpacity onPress={this.incrementPertanyaan} style={{ paddingTop:'10%' }}>
                    <Image source={require('./../Components/images/buttonLanjut.png')}/>
                </TouchableOpacity>  
            </View>
        )
    }
}

function stateThisPage(state) {
    return {
        jawaban1: state.jawaban1,
        jawaban2: state.jawaban2,
        jawaban3: state.jawaban3,
        jawaban4: state.jawaban4,
        jawaban5: state.jawaban5,
        jawaban6: state.jawaban6,
        jawaban7: state.jawaban7,
    }
}

function mapDispatchoProps(dispatch) {
    return {
        Jawaban1_Pilihan1 : () => dispatch({ type: 'Jawaban1_Pilihan1' }),
        Jawaban1_Pilihan2 : () => dispatch({ type: 'Jawaban1_Pilihan2' }),

        Jawaban2_Pilihan1 : () => dispatch({ type: 'Jawaban2_Pilihan1' }),
        Jawaban2_Pilihan2 : () => dispatch({ type: 'Jawaban2_Pilihan2' }),
        Jawaban2_Pilihan3 : () => dispatch({ type: 'Jawaban2_Pilihan3' }),

        Jawaban3_Pilihan1 : () => dispatch({ type: 'Jawaban3_Pilihan1' }),
        Jawaban3_Pilihan2 : () => dispatch({ type: 'Jawaban3_Pilihan2' }),

        Jawaban4_Pilihan1 : () => dispatch({ type: 'Jawaban4_Pilihan1' }),
        Jawaban4_Pilihan2 : () => dispatch({ type: 'Jawaban4_Pilihan2' }),

        Jawaban5_Pilihan1 : () => dispatch({ type: 'Jawaban5_Pilihan1' }),
        Jawaban5_Pilihan2 : () => dispatch({ type: 'Jawaban5_Pilihan2' }),

        Jawaban6_Pilihan1 : () => dispatch({ type: 'Jawaban6_Pilihan1' }),
        Jawaban6_Pilihan2 : () => dispatch({ type: 'Jawaban6_Pilihan2' }),

        Jawaban7_Pilihan1 : () => dispatch({ type: 'Jawaban7_Pilihan1' }),
        Jawaban7_Pilihan2 : () => dispatch({ type: 'Jawaban7_Pilihan2' }),
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    }
})

export default connect(stateThisPage, mapDispatchoProps)(Kuisioner)