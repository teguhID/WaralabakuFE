import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, AsyncStorage } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { connect } from 'react-redux'

// =============================================================================================== //
// ====================================== MAIN CLASS  ============================================ //
// =============================================================================================== //
class test extends Component {

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
 
    componentDidMount = () => {
      this.countQuisioner() // JALANKAN FUNGSI PEMILIHAN PERTANYAAN DAN JAWABAN
    }; 

    render() {
        return (
            <View style={styles.container}>
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
                question:'kamu tipe orang yang seperti apa ? ',
                answere: [
                    {label: 'sabar menunggu hasil besar', value: '1'},
                    {label: 'ingin cepat dapat hasil meski kecil', value: '2'},
            ]})
        }
        if (this.props.countQuisioner == 1) { //PERTANYAAN KEDUA
            this.setState({
                question:'kamu lebih suka yang mana ? ',
                answere: [
                    {label: 'waralaba yang menyediakan fee tambahan di luar modal awal', value: '1'},
                    {label: 'waralaba yang semua biaya nya di masukan ke dalam modal awal', value: '2'},
            ]})

            //IF STATEMENT JAWABAN DARI PERNTANYAAN 1, DI SIMPAN DI SINI KARENA SAAT TOMBOL DI TEKAN PERTANYAAN 2 YANG MUNCUL, DAN JAWABAN INI PUN IKUT MUNCUL
            this.state.values == '1' ? this.props.AnswereQuestion1_1(): this.props.AnswereQuestion1_2()
        }
        if (this.props.countQuisioner == 2) {
            this.setState({
                question:' null ',
                answere: [
                    {label: 'null', value: '1'},
                    {label: 'null', value: '2'},
            ]})
            this.state.values == '1' ? this.props.AnswereQuestion2_1(): this.props.AnswereQuestion2_2()
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
        AnswereQuestion1_1: () => dispatch({ type: 'AnswereQuestion1_1' }),
        AnswereQuestion1_2: () => dispatch({ type: 'AnswereQuestion1_2' }),
        AnswereQuestion2_1: () => dispatch({ type: 'AnswereQuestion2_1' }),
        AnswereQuestion2_2: () => dispatch({ type: 'AnswereQuestion2_2' }),
        CountQuisioner: () => dispatch({type: 'CountQuisioner'})
    }
}

//export dan mengkoneksikan "stateThisPage" dan "mapDispatchToProps" dengan "test" 
export default connect(stateThisPage, mapDispatchToProps)(test)




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