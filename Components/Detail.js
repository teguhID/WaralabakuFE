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
                      <Text style={{ fontSize: 24, paddingTop: 15, }}> {val.nama} </Text>
                    </View>
                    <View style={styles.content}>
                      <ScrollView>
                        <Text>ID : { this.props.detailValues }</Text>
                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>Alamat : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.alamat}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>jenis waralaba : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.jenis}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>jumlah gerai : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.gerai}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>minimal modal : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.modal}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>perkiraan bep : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.bep}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>Royalti fee : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.fee}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>keuntungan : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.keuntungan}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>contact : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.phone}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>
                        
                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>email : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.email}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

                        <Text style={{ color:'#1e272e', fontWeight: "bold", paddingTop:'3%', fontSize: 20, }}>web : </Text>
                        <Text style={{ color:'#34495e',fontSize: 17, paddingBottom:5, }}>{val.web}</Text>
                        <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1,}}/>

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
  },
  content:{
    flex:8,
    padding: '10%',
  },
})

export default connect(stateThisPage)(Detail)

