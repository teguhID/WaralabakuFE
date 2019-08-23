import React, { Component } from 'react'
import { ScrollView, ActivityIndicator, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import {AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux';

class History extends Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      // url: 'http://10.0.0.167:8001/',
      // url: 'http://192.168.43.234:8001/',
      url: 'https://waralabaku.000webhostapp.com/',
    }
  }

  componentDidMount = async () =>{
    console.disableYellowBox = true
    return fetch(this.state.url + 'api/getHistory/' + await AsyncStorage.getItem('ID'))
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
          no: 1,
        }, 
        function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
            <ActivityIndicator size="large" color="#3498db"/>
        </View>
      )
    }
    var rowID = 1
    return(
      <View style={{flex: 1, paddingTop:20, backgroundColor:'#d5f6ffff'}}>
        <ScrollView>
        {
          this.state.dataSource.map((val, key) => {
            return( 
              <View key={key} style={{paddingTop: '5%', paddingHorizontal: '5%'}}>  
                <TouchableOpacity onPress={ async ()=> {
                  AsyncStorage.setItem('jawaban2', val.jawaban2)
                  AsyncStorage.setItem('jawaban3', val.jawaban3)
                  AsyncStorage.setItem('jawaban4', val.jawaban4)
                  AsyncStorage.setItem('jawaban5', val.jawaban5)
                  AsyncStorage.setItem('jawaban6', val.jawaban6)

                  this.props.history_Jawaban2(await AsyncStorage.getItem('jawaban2'))
                  this.props.history_Jawaban3(await AsyncStorage.getItem('jawaban3'))
                  this.props.history_Jawaban4(await AsyncStorage.getItem('jawaban4'))
                  this.props.history_Jawaban5(await AsyncStorage.getItem('jawaban5'))
                  this.props.history_Jawaban6(await AsyncStorage.getItem('jawaban6'))
                  // alert(await AsyncStorage.multiGet(['jawaban2', 'jawaban3', 'jawaban4', 'jawaban5', 'jawaban6',]) + ' ------------ jawaban2 : ' + this.props.jawaban2 + ' jawaban3 : ' + this.props.jawaban3 + ' jawaban4 : ' + this.props.jawaban4 + ' jawaban5 : ' + this.props.jawaban5 + ' jawaban6 : ' + this.props.jawaban6 + '-----------')
                  Actions.Result()

                }}>
                <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, backgroundColor: '#006680ff', paddingVertical:'5%', paddingHorizontal:'8%' }}>
                  <Text style={{ color:'white', fontWeight:'bold', fontSize:30 }}> History {rowID++}</Text> 
                  {/* <Text>ID : { val.no }</Text>
                  <Text>Jawaban2 : { val.jawaban2 }</Text>
                  <Text>Jawaban3 : { val.jawaban3 }</Text>
                  <Text>Jawaban4 : { val.jawaban4 }</Text>
                  <Text>Jawaban5 : { val.jawaban5 }</Text>
                  <Text>Jawaban6 : { val.jawaban6 }</Text> */}
                  <Text style={{ color:'white' }}>{val.created_at}</Text>
                </View>
                </TouchableOpacity>
              </View>
            )
          }
          )
        }
        </ScrollView>
      </View>
    );
  }
}

function stateThispage(state) {
  return{
    jawaban1 : state.jawaban1,
    jawaban2 : state.jawaban2,
    jawaban3 : state.jawaban3,
    jawaban4 : state.jawaban4,
    jawaban5 : state.jawaban5,
    jawaban6 : state.jawaban6,
    jawaban7 : state.jawaban7,
  }
}

function mapDispatchoProps(dispatch) {
  return {
      history_Jawaban2: (value) => dispatch({ type: 'History_Jawaban2', history_Jawaban2: value }),
      history_Jawaban3: (value) => dispatch({ type: 'History_Jawaban3', history_Jawaban3: value }),
      history_Jawaban4: (value) => dispatch({ type: 'History_Jawaban4', history_Jawaban4: value }),
      history_Jawaban5: (value) => dispatch({ type: 'History_Jawaban5', history_Jawaban5: value }),
      history_Jawaban6: (value) => dispatch({ type: 'History_Jawaban6', history_Jawaban6: value }),
  }
}

export default connect(stateThispage, mapDispatchoProps)(History)
