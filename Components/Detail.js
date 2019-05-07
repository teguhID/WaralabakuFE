import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, ActivityIndicator, View } from 'react-native'
// import { LinearGradient } from 'expo'
import { connect } from 'react-redux'

class Detail extends Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  componentDidMount(){
    // return fetch('http://192.168.8.3:8000/detail/' + this.props.detailValues)
    return fetch('http://192.168.8.3:8000/detail/118')
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
            <Text style={{ paddingTop:'2%' }}>Loading ...</Text>
        </View>
      )
    }
    else{
        return (
          this.state.dataSource.map((val, key) => {
            return(
              <View key={key} style={styles.container}>
                  <View style={{ borderBottomLeftRadius: 200 ,paddingTop: '20%',paddingBottom: '35%', alignItems: 'center', backgroundColor:'#81D4FA' }}>
                    <Text>ID : { this.props.detailValues }</Text>
                    <Text style={{ fontSize:30, fontWeight: "bold", color:'white'}}>{val.nama}</Text>
                  </View>
                  <View style={{ paddingBottom: '5%', paddingLeft: '8%', paddingRight: '8%'}}>
                    <View style={{backgroundColor: '#1e8bc3', borderRadius: 40, paddingHorizontal: '10%', paddingVertical:'5%', top: '-15%', height: '84%'}}>
                      <ScrollView>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>alamat :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.alamat}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>jenis waralaba :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.jenis}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>jumlah gerai :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.gerai}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>minimal modal :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.modal}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>perkiraan bep :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.bep}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>fanchise fee :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.fee}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>keuntungan :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.keuntungan}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>contact :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.phone}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>email :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.email}</Text>
                        <Text style={{ color:'white', fontWeight: "bold", paddingTop:'5%'}}>web :</Text>
                        <Text style={{ color:'white', borderBottomWidth: 0.4, borderBottomColor: '#81cfe0', width: '100%',}} note>{val.web}</Text>
                      </ScrollView>
                    </View>
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
  },
  title:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex:8,
    flexDirection: 'row',
  },
  leftView:{
    flex:1,
    padding: '3%'
  },
  rightView:{
    flex:1,
    padding: '3%'
  },
})

export default connect(stateThisPage)(Detail)

