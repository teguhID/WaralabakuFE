import React, { Component } from "react";
import {Router, Scene} from 'react-native-router-flux'
import FirstView from '../Components/FirstView'
import Kuisioner from '../Components/Kuisioner'
import Result from '../Components/Result'
import Detail from '../Components/Detail'
import History from '../Components/History'

class AppNavigator extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">  
                    <Scene key="FirstView" component={FirstView} hideNavBar={true} initial/>
                    <Scene key="Kuisioner" component={Kuisioner} title="Kuisioner" />
                    <Scene key="Result" component={Result} title="Result" />    
                    <Scene key="Detail" component={Detail} title="Detail" />    
                    <Scene key="History" component={History} title="History" />    
                </Scene>
            </Router>
      )
    }
} 

export default AppNavigator