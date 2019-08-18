import React, {Component} from 'react'
import AppNavigator from './AppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {AsyncStorage} from 'react-native'

const initialSatate = {
    jawaban1: 'redux-data1',
    jawaban2: 'redux-data2',
    jawaban3: 'redux-data3',
    jawaban4: 'redux-data4',
    jawaban5: 'redux-data5',
    jawaban6: 'redux-data6',
    jawaban7: 'redux-data7',
    detailValues: '0',
}
const reducer = (state = initialSatate, action) =>{
    switch (action.type){
        case 'Jawaban1_Pilihan1':
            return { ...state, action, jawaban1: 'jawaban1' }
        case 'Jawaban1_Pilihan2':
            return { ...state, action, jawaban1: 'jawaban2' }

        case 'Jawaban2_Pilihan1':
            return { ...state, action, jawaban2: 'jawaban1' }
        case 'Jawaban2_Pilihan2':
            return { ...state, action, jawaban2: 'jawaban2' }
        case 'Jawaban2_Pilihan3':
            return { ...state, action, jawaban2: 'jawaban3' }

        case 'Jawaban3_Pilihan1':
            return { ...state, action, jawaban3: 'jawaban1' }
        case 'Jawaban3_Pilihan2':
            return { ...state, action, jawaban3: 'jawaban2' }
    
        case 'Jawaban4_Pilihan1':
            return { ...state, action, jawaban4: 'jawaban1' }
        case 'Jawaban4_Pilihan2':
            return { ...state, action, jawaban4: 'jawaban2' }

        case 'Jawaban5_Pilihan1':
            return { ...state, action, jawaban5: 'jawaban1' }
        case 'Jawaban5_Pilihan2':
            return { ...state, action, jawaban5: 'jawaban2' }

        case 'Jawaban6_Pilihan1':
            return { ...state, action, jawaban6: 'jawaban1' }
        case 'Jawaban6_Pilihan2':
            return { ...state, action, jawaban6: 'jawaban2' }

        case 'Jawaban7_Pilihan1':
            return { ...state, action, jawaban7: 'jawaban1' }
        case 'Jawaban7_Pilihan2':
            return { ...state, action, jawaban7: 'jawaban2' }

        case 'DetailValue':
            return { ...state, detailValue: action.detailValue }

        case 'History_Jawaban2':
            return { ...state, jawaban2: action.history_Jawaban2 }
        case 'History_Jawaban3':
            return { ...state, jawaban3: action.history_Jawaban3 }
        case 'History_Jawaban4':
            return { ...state, jawaban4: action.history_Jawaban4 }
        case 'History_Jawaban5':
            return { ...state, jawaban5: action.history_Jawaban5 }
        case 'History_Jawaban6':
            return { ...state, jawaban6: action.history_Jawaban6 }
            
    }
    return state
}


const store = createStore(reducer)
class StateManagement extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        )
    }
}

export default StateManagement