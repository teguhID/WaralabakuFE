import React from 'react';
import { StyleSheet, ScrollView, Text, ActivityIndicator, View, TouchableOpacity  } from 'react-native';
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Result extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
        isLoading: true,
        dataSource : null,
        url: '',
      }
  }

  componentDidMount(){
    return (
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData1'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData2'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData3'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData4'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData5'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData6'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData7'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData8'):
        
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData9'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData10'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData11'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData12'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData13'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData14'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData15'):
        this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData16'):
        
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData17'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData18'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData19'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData20'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData21'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData22'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData23'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData24'):
        
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData25'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData26'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData27'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData28'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData29'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData30'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData31'):
        this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData32'):

        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData33'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData34'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData35'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData36'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData37'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData38'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData39'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData40'):

        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData41'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData42'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData43'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData44'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban1'? fetch('http://192.168.8.3:8000/api/getData45'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban2' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData46'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData47'):
        this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' && this.props.answere5 == 'jawaban1' && this.props.answere6 == 'jawaban2'? fetch('http://192.168.8.3:8000/api/getData48'):
        fetch('http://192.168.8.3:8000/api/getData3')
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
              <View style={{paddingTop: '60%',paddingBottom: '35%', borderBottomRightRadius: 200, backgroundColor:'#81D4FA' }}>
              </View>
              <View style={{ top: '-52%', marginHorizontal: '5%'}}>
              <ScrollView>
                {
                  this.state.dataSource.map((val, key) => {
                    return( 
                      <View key={key} style={{paddingTop: '5%'}}>
                        <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#2c82c9', paddingVertical:'5%', paddingHorizontal:'8%' }}>
                         <Text style={{ color:'white', fontWeight:'bold', fontSize:30 }}>{val.nama}</Text> 
                         <Text style={{ color:'white', paddingLeft:'5%', fontSize:20 }}>{val.jenis}</Text> 
                        </View>
                        <TouchableOpacity onPress={ (e)=> {Actions.Detail(); this.props.detailValue(val.id); }}>
                          <View style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20, backgroundColor: '#3498db', paddingVertical:'5%', width:'80%' }}>
                            <Text style={{ fontWeight:'bold', color:'white', paddingLeft:'5%', fontSize:15, textAlign:'center' }}>Detail</Text>
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
    answere1 : state.answere1,
    answere2 : state.answere2,
    answere3 : state.answere3,
    answere4 : state.answere4,
    answere5 : state.answere5,
    answere6 : state.answere6,
    answere7 : state.answere7,
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
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
      // top: -10
    }
});

export default connect(stateThispage,mapDispatchToProps)(Result)