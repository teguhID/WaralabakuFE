import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import Test from '../Components/test'
import Quisioner from '../Components/Quisioner'
import { Provider } from 'react-redux'
import AppNavigator from '../Components/AppNavigator';

//global state yang bisa di akses semua component
const initialState = {
    answere1: 'null',
    answere2: 'null',
    answere3: 'null',
    answere4: 'null',
    answere5: 'null',
    answere6: 'null',
    answere7: 'null',
    countQuisioner: 0,
    detailValue: '0',
}

// eksekusi type dari component lain
const reducer = (state = initialState, action) => {
    
    //AKSI DARI DATA YANG DI KIRIM DISPATCH
    switch (action.type) {
        case 'CountQuisioner':
            return { ...state, action, countQuisioner: state.countQuisioner + 1 }
        //============================PERTANYAAN 1================================================//
        case 'AnswereQuestion1_1':
            return { ...state, action, answere1: 'jawaban1' }
        case 'AnswereQuestion1_2':
            return { ...state, action, answere1: 'jawaban2' }  
        //============================PERTANYAAN 2================================================//
        case 'AnswereQuestion2_1':  
            return { ...state, action, answere2: 'jawaban1' }
        case 'AnswereQuestion2_2':
            return { ...state, action, answere2: 'jawaban2' }
        case 'AnswereQuestion2_3':
            return { ...state, action, answere2: 'jawaban3' }   
        //============================PERTANYAAN 3================================================//
        case 'AnswereQuestion3_1':
            return { ...state, action, answere3: 'jawaban1' }
        case 'AnswereQuestion3_2':
            return { ...state, action, answere3: 'jawaban2' }  
        //============================PERTANYAAN 4================================================//
        case 'AnswereQuestion4_1':
            return { ...state, action, answere4: 'jawaban1' }
        case 'AnswereQuestion4_2':
            return { ...state, action, answere4: 'jawaban2' }  
        //============================PERTANYAAN 5================================================//
        case 'AnswereQuestion5_1':
            return { ...state, action, answere5: 'jawaban1' }
        case 'AnswereQuestion5_2':
            return { ...state, action, answere5: 'jawaban2' }  
        //============================PERTANYAAN 6================================================//
        case 'AnswereQuestion6_1':
            return { ...state, action, answere6: 'jawaban1' }
        case 'AnswereQuestion6_2':
            return { ...state, action, answere6: 'jawaban2' }  
        //============================PERTANYAAN 7================================================//
        case 'AnswereQuestion7_1':
            return { ...state, action, answere7: 'jawaban1' }
        case 'AnswereQuestion7_2':
            return { ...state, action, answere7: 'jawaban2' }
        
        case 'DetailValue':
            return { ...state, detailValue: action.detailValue }
    }
    return state
}

//hold nilai action dari state
const store = createStore(reducer)

// ========================================================================== //
// ============================ MAIN VIEW TO LOAD =========================== //
// ========================================================================== //
class StateManagement extends Component {

    render() {
        return (
            //PROVIDER UNTUK MENGGUNAKAN REDUX DI COMPONENT TERTENTU
            <Provider store={store}>
                {/* <Test /> */}
                <AppNavigator/>
            </Provider>
        );
    }
}
// ========================================================================== //
// ============================ MAIN VIEW TO LOAD =========================== //
// ========================================================================== //

export default StateManagement