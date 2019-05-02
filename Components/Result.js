import React from 'react';
import { FlatList, StyleSheet, ScrollView, ActivityIndicator, Button, View, TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
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
        this.props.answere2 == 'jawaban1' & this.props.answere3 == 'jawaban1' & this.props.answere4 == 'jawaban1' & this.props.answere5 == 'jawaban1' & this.props.answere6 == 'jawaban1'? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData1'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData2'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData3'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData4'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData5'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData6'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData7'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData8'):
        
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData9'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData10'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData11'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData12'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData13'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData14'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData15'):
        // this.props.answere2 == 'jawaban1' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData16'):
        
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData17'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData18'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData19'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData20'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData21'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData22'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData23'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData24'):
        
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData25'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData26'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData27'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData28'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData29'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData30'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData31'):
        // this.props.answere2 == 'jawaban2' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData32'):

        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData33'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData34'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData35'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData36'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData37'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData38'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData39'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban1' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData40'):

        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData41'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData42'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData43'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData44'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban1' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData45'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 2' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData46'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban1' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData47'):
        // this.props.answere2 == 'jawaban3' && this.props.answere3 == 'jawaban2' && this.props.answere4 == 'jawaban2' , this.props.answere5 == 'jawaban 1' && this.props.answere6 == 'jawaban2' ? fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData48'):
        fetch('http://rt668i43rhf9042n.000webhostapp.com/api/getData3')
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
            
            <View style={styles.title}>
              <Text>HASIL</Text>
              <Text>{ this.props.detailValues }</Text>
            </View>

            <View style={styles.content}>
            <ScrollView>
              <Container style={{ backgroundColor:'#d5f6ffff', paddingLeft: ('5%'), paddingRight: ('5%'),}}>   
                {
                  this.state.dataSource.map((val, key) => {
                    return( 
                      <Card key={key}>
                        <CardItem style={{  backgroundColor:'#3498db' }}>
                          <Body style={{  }}>
                            <Text style={{ color:'white', fontWeight: 'bold', fontSize: 28, }}>
                              {val.nama}
                            </Text>
                            <Text style={{ color:'white', fontSize: 18, }}>
                              {val.modal}
                            </Text>
                          </Body>
                        </CardItem>
                        <TouchableOpacity onPress={ (e)=> {Actions.Detail(); this.props.detailValue(val.id); }}>
                          <CardItem footer style={{ backgroundColor:'#2e84e0ff', flexDirection: "row", justifyContent: "center" }}>
                            <Text style={{ color:'white', fontSize: 15, }}>Detail</Text>
                          </CardItem>
                        </TouchableOpacity>
                      </Card>
                    )
                  })
                }
              </Container>
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
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'#d5f6ffff',
    },
    title:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        flex:5,
    }
});

export default connect(stateThispage,mapDispatchToProps)(Result)