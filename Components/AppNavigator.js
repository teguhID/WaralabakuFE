import React, { Component } from "react";
import {Router, Scene} from 'react-native-router-flux'
import FirstView from '../Components/FirstView'
import Kuisioner from '../Components/Kuisioner'
import Result from '../Components/Result'
import Detail from '../Components/Detail'
import History from '../Components/History'
import KuisionerHasil from '../Components/KuisionerHasil'

class AppNavigator extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">  
                    <Scene key="FirstView" component={FirstView} hideNavBar={true} />
                    <Scene key="Kuisioner" component={Kuisioner} title="" />
                    <Scene key="Result" component={Result} hideNavBar={true} title="Result" initial />    
                    <Scene key="Detail" component={Detail} title="Detail" />    
                    <Scene key="History" component={History} title="History" />    
                    <Scene key="KuisionerHasil" component={KuisionerHasil} title="Kuisioner" />    
                </Scene>
            </Router>
      )
    }
} 

export default AppNavigator