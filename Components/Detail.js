import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux'

class Detail extends Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  
  componentDidMount(){
    return fetch('https://rt668i43rhf9042n.000webhostapp.com/detail/118' )
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    else{
        return (
          this.state.dataSource.map((val, key) => {
            return(
            <View key={key}>
              <Text>{ this.props.detailValues }</Text>
              <Text>{val.nama}</Text>
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

export default connect(stateThisPage)(Detail)

