import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, ActivityIndicator, View } from 'react-native'
// import { LinearGradient } from 'expo'
import { connect } from 'react-redux'

class Detail extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        url: 'http://192.168.43.234:8001/',
        // url: 'http://10.0.0.167:8001/',
    }
  }
  
  componentDidMount(){
    return fetch( this.state.url + 'api/getData/detail/' + this.props.detailValues)
    // return fetch( this.state.url + 'detail/118')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {

     if(this.state.isLoading){
      return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#d5f6ffff',}}>
            <ActivityIndicator size="large" color="#3498db"/>
            <Text>ID : { this.props.detailValues }</Text>
            <Text style={{ paddingTop:'2%' }}>Loading ...</Text>
        </View>
      )
    }
    else{
        return (
          this.state.dataSource.map((val, key) => {
            return(
              <View key={key} style={styles.container}>
                    <View style={styles.title}>
                      <Text> {val.nama} </Text>
                    </View>
                    <View style={styles.content}>
                      <ScrollView>
                        <Text>ID : { this.props.detailValues }</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>Alamat : <Text style={{ color: '',fontSize: 16 }}>{val.alamat}</Text></Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>jenis waralaba : {val.jenis}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>jumlah gerai : {val.gerai}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>minimal modal : {val.modal}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>perkiraan bep : {val.bep}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>fanchise fee : {val.fee}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>keuntungan : {val.keuntungan}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>contact : {val.phone}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>email : {val.email}</Text>
                        <Text style={{ color:'#2980b9', fontWeight: "bold", paddingTop:'3%', fontSize: 18, }}>web : {val.web}</Text>
                      </ScrollView>
                    </View>
              </View>
            )
          })
        );
    }
  }
}

function stateThisPage(state) {
  return{
    detailValues : state.detailValue,
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#d5f6ffff',
    flexDirection: 'column',
  },
  title:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  content:{
    flex:8,
    paddingHorizontal: '10%',
  },
})

export default connect(stateThisPage)(Detail)

