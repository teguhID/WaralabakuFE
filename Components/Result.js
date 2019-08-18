import React from 'react';
import { StyleSheet, ScrollView, Text, ActivityIndicator, View, TouchableOpacity,Button  } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Result extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
        isLoading: true,
        dataSource : null,
        url: 'http://192.168.43.234:8001/',
        // url: 'http://10.0.0.167:8001/',
      }
  }

  componentDidMount(){
    return (
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData1'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData2'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData3'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData4'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData5'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData6'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData7'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData8'):
        
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData9'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData10'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData11'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData12'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData13'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData14'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData15'):
        this.props.jawaban2 == 'jawaban1' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData16'):
        
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData17'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData18'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData19'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData20'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData21'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData22'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData23'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData24'):
        
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData25'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData26'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData27'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData28'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData29'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData30'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData31'):
        this.props.jawaban2 == 'jawaban2' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData32'):

        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData33'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData34'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData35'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData36'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData37'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData38'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData39'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban1' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData40'):

        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData41'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData42'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData43'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData44'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban1'? fetch(this.state.url + 'api/getData45'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban2' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData46'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban1' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData47'):
        this.props.jawaban2 == 'jawaban3' && this.props.jawaban3 == 'jawaban2' && this.props.jawaban4 == 'jawaban2' && this.props.jawaban5 == 'jawaban1' && this.props.jawaban6 == 'jawaban2'? fetch(this.state.url + 'api/getData48'):
        fetch(this.state.url + 'api/getData3')
      )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        })
      })
      .catch((error) =>{
        console.log(error);
      });
  }

  render(){

      if(this.state.isLoading){
        return(
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#d5f6ffff',}}>
            <ActivityIndicator size="large" color="#3498db"/>
            <Text style={{ paddingTop:'2%' }}>Loading ...</Text>
          </View>
        )
      } 
      else{
          return (
            <View style={styles.container}>
              <Text style={styles.title}>Rekomendasi Untuk Kamu</Text>
              <View style={{ marginHorizontal: '5%'}}>
              <ScrollView>
                {
                  this.state.dataSource.map((val, key) => {
                    return( 
                      <View key={key} style={{paddingTop: '5%'}}>
                        <TouchableOpacity onPress={ (e)=> {Actions.Detail(); this.props.detailValue(val.id)}}>
                          <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#006680ff', paddingVertical:'5%', paddingHorizontal:'8%', height:170 }}>
                            <Text style={{ color:'white', fontWeight:'bold', fontSize:30 }}>{val.nama}</Text> 
                            <Text style={{ color:'white', paddingLeft:'5%', fontSize:20 }}>{val.jenis}</Text> 
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </ScrollView>
              </View>
            </View>
          )
      }
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
    detailValues : state.detailValue,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    //kirim data ke action redux
    detailValue: (value) => dispatch({ type: 'DetailValue', detailValue: value })
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d5f6ffff',
    },
    title:{
        padding: '5%',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default connect(stateThispage,mapDispatchToProps)(Result)