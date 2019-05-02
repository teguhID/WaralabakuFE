import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'
import FirstView from './FirstView'
import Quisioner from './Quisioner'
import Result from './Result'
import Detail from './Detail'

const AppNavigator = () => {
    return (
    <Router>
        <Stack>
            <Scene key="FirstView" component={FirstView}  hideNavBar={true} />
            <Scene key="Quisioner" component={Quisioner}  hideNavBar={true} />
            <Scene key="Result" component={Result}  hideNavBar={true} initial />
            <Scene key="Detail" component={Detail} hideNavBar={true} />
        </Stack>
    </Router>
    )
}      

export default AppNavigator