import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, BackHandler } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux';

// =============================================================================================== //
// ====================================== MAIN CLASS  ============================================ //
// =============================================================================================== //
class Quisioner extends Component {

// ============= LOCAL STATE  ================== //
    constructor(props) {
      super(props)
      this.state = {
         question: '', //PERTANYAAN
         values:1, //JAWABAN TERPILH
         answere: [
             {label: 'pilihan1', value: 0}, // PILIHAN JAWABAN
             {label: 'pilihan2', value: 0},
         ],
      };
    };
// ============= LOCAL STATE  ================== //

    componentWillMount(){
        // ============== DISABLED BACK BUTTON ===================//
        BackHandler.addEventListener('hardwareBackPress', function() {
            return true;
        });
    }

    componentDidMount = () => {
      this.countQuisioner() // JALANKAN FUNGSI PEMILIHAN PERTANYAAN DAN JAWABAN
    }; 

    render() {
        return (
            <View style={styles.container}>
             {/* <Text>DEBUGGING MODE</Text>
             <Text>( MODE PENGUSIR SERANGGA )</Text>
             <Text>PENGAWAKUTUAN</Text> */}
              <View style={styles.quisioner}>
                <Text>Nomor Pertanyaan = { this.props.countQuisioner }</Text>
                <Text>Jawaban pertanyaan 1 = { this.props.answere1 }</Text>
                <Text>Jawaban pertanyaan 2 = { this.props.answere2 }</Text>
                <Text>Jawaban pertanyaan 3 = { this.props.answere3 }</Text>
                <Text>Jawaban pertanyaan 4 = { this.props.answere4 }</Text>
                <Text>Jawaban pertanyaan 5 = { this.props.answere5 }</Text>
                <Text>Jawaban pertanyaan 6 = { this.props.answere6 }</Text>
                <Text style={{ paddingBottom: ('7%'), }}>Jawaban pertanyaan 7 = { this.props.answere7 }</Text>

                <Text style={{ fontFamily: 'ahronbd', fontSize:24, textAlign: 'center', paddingBottom: ('7%'),}}>{ this.state.question }</Text>
                <RadioForm
                    radio_props={this.state.answere}
                    initial={0}
                    onPress={(value) => {this.setState({values:value})}}
                    labelStyle={{ fontSize:20, color:'#006680ff', textAlign: 'left' }}
                />
                <Text>{ this.state.values }</Text>
              </View>
              <View style={styles.button}>
                  <TouchableOpacity onPress={this.countQuisioner}>
                      <Image source={require('./images/buttonLanjut.png')}/>
                  </TouchableOpacity>
              </View>
            </View>
        );
    }

// ============= FUNGSI SWITCH PERTANYAAN DAN PEMILIHAN JAWABAN  ============================ //
    countQuisioner=()=>{
        this.props.CountQuisioner() // HITUNG PERNYATAAN 
        if (this.props.countQuisioner == 0) { //PERTANYAAN PERTAMA
            this.setState({
                question:'Apakah kamu ? ',
                answere: [
                    {label: 'seorang pemula dalam ber wirausaha', value: '1'},
                    {label: 'sudah berpengalaman di bidang wirausaha', value: '2'},
            ]})
        }
        if (this.props.countQuisioner == 1) { //PERTANYAAN KEDUA
            this.setState({
                question:'Jenis waralaba apa yang kamu inginkan ? ',
                answere: [
                    {label: 'makanan', value: '1'},
                    {label: 'minuman', value: '2'},
                    {label: 'keduanya', value: '3'},
            ]})
            //IF STATEMENT JAWABAN DARI PERNTANYAAN 1, DI SIMPAN DI SINI KARENA SAAT TOMBOL DI TEKAN PERTANYAAN 2 YANG MUNCUL, DAN JAWABAN INI PUN IKUT MUNCUL
            this.state.values == '1' ? this.props.AnswereQuestion1_1():  this.props.AnswereQuestion1_2()
        }
        if (this.props.countQuisioner == 2) {
            this.setState({
                question:'Berapa modal yang kamu punya ? ',
                answere: [
                    {label: 'Kurang dari 7 juta', value: '1'},
                    {label: 'Lebih dari 7 juta', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion2_1(): this.state.values == '2' ? this.props.AnswereQuestion2_2(): this.props.AnswereQuestion2_3()
        }
        if (this.props.countQuisioner == 3) {
            this.setState({
                question:'Apakah anda ingin waralaba yang ? ',
                answere: [
                    {label: 'Sudah banyak outlet nya', value: '1'},
                    {label: 'Outlet nya masih jarang', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion3_1(): this.props.AnswereQuestion3_2()
        }
        if (this.props.countQuisioner == 4) {
            this.setState({
                question:' Apakah anda ingin waralaba yang ? ',
                answere: [
                    {label: 'Memasang biaya tambahan di luar modal', value: '1'},
                    {label: 'Memasang semua biaya nya di modal awal', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion4_1(): this.props.AnswereQuestion4_2()
        }
        if (this.props.countQuisioner == 5) {
            this.setState({
                question:' Apakah anda tipe orang yang ? ',
                answere: [
                    {label: 'Ingin cepat dapat untung meskipun kecil', value: '1'},
                    {label: 'Sabar menunggu lama lalu mendapat untung yang besar', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion5_1(): this.props.AnswereQuestion5_2()
        }
        if (this.props.countQuisioner == 6) {
            this.setState({
                question:' Apakah anda sebelumnya pernah berbisnis waralaba ? ',
                answere: [
                    {label: 'ya', value: '1'},
                    {label: 'tidak', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion6_1(): this.props.AnswereQuestion6_2()
        }
        if (this.props.countQuisioner == 7) {
            Actions.Result()
            this.state.values == '1' ? this.props.AnswereQuestion7_1(): this.props.AnswereQuestion7_2()
        }
    }
}
// ============= FUNGSI SWITCH PERTANYAAN DAN PEMILIHAN JAWABAN  ============================ //

// =============================================================================================== //
// ====================================== MAIN CLASS  ============================================ //
// =============================================================================================== //

function stateThisPage(state) { 
    return {
      //ambil data dari 'state' di state manager
        countQuisioner: state.countQuisioner,
        answere1 : state.answere1,
        answere2 : state.answere2,
        answere3 : state.answere3,
        answere4 : state.answere4,
        answere5 : state.answere5,
        answere6 : state.answere6,
        answere7 : state.answere7,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      // FUNGSI UNTIK DI KIRIMKAN KE REDUCER 
        //============================PERTANYAAN 1================================================//
        AnswereQuestion1_1: () => dispatch({ type: 'AnswereQuestion1_1' }),
        AnswereQuestion1_2: () => dispatch({ type: 'AnswereQuestion1_2' }),
        //============================PERTANYAAN 2================================================//
        AnswereQuestion2_1: () => dispatch({ type: 'AnswereQuestion2_1' }),
        AnswereQuestion2_2: () => dispatch({ type: 'AnswereQuestion2_2' }),
        AnswereQuestion2_3: () => dispatch({ type: 'AnswereQuestion2_3' }),
        //============================PERTANYAAN 3================================================//
        AnswereQuestion3_1: () => dispatch({ type: 'AnswereQuestion3_1' }),
        AnswereQuestion3_2: () => dispatch({ type: 'AnswereQuestion3_2' }),
        //============================PERTANYAAN 4================================================//
        AnswereQuestion4_1: () => dispatch({ type: 'AnswereQuestion4_1' }),
        AnswereQuestion4_2: () => dispatch({ type: 'AnswereQuestion4_2' }),
        //============================PERTANYAAN 5================================================//
        AnswereQuestion5_1: () => dispatch({ type: 'AnswereQuestion5_1' }),
        AnswereQuestion5_2: () => dispatch({ type: 'AnswereQuestion5_2' }),
        //============================PERTANYAAN 6================================================//
        AnswereQuestion6_1: () => dispatch({ type: 'AnswereQuestion6_1' }),
        AnswereQuestion6_2: () => dispatch({ type: 'AnswereQuestion6_2' }),
        //============================PERTANYAAN 7================================================//
        AnswereQuestion7_1: () => dispatch({ type: 'AnswereQuestion7_1' }),
        AnswereQuestion7_2: () => dispatch({ type: 'AnswereQuestion7_2' }),
        
        CountQuisioner: () => dispatch({type: 'CountQuisioner'})
    }
}

//export dan mengkoneksikan "stateThisPage" dan "mapDispatchToProps" dengan "Quisioner" 
export default connect(stateThisPage, mapDispatchToProps)(Quisioner)


// ====================================== //
// ============= CSS STYLE ============== //
// ====================================== //

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#d5f6ffff',
    },
    quisioner:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: ('10%'),
    },
    button:{
        flex:1,
        justifyContent: 'center',
    }
});
            
// ====================================== //
// ============= CSS STYLE ============== //
// ====================================== //