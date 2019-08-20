import React, { Component } from 'react'
import { TextInput ,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button'
import {Actions} from 'react-native-router-flux'

class KuisionerHasil extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            // url: 'http://10.0.0.167:8001/',
            // url: 'http://192.168.43.234:8001/',
            url: 'https://waralabaku.000webhostapp.com/',
            namaError: '',
            komentarError: '',
            nama: '',
            komentar:'',
            bermanfaat:'Ya',
            jawaban1: [
                {label: 'Ya', value: 'Ya'}, // PILIHAN JAWABAN
                {label: 'Tidak', value: 'Tidak'},
            ],
            tindakLanjut: 'Ya',
            jawaban2: [
                {label: 'Ya', value: 'Ya'}, // PILIHAN JAWABAN
                {label: 'Tidak', value: 'Tidak'},
            ],  
        };
      }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 25, paddingHorizontal: '10%', marginTop: 60, textAlign: 'center', }}>Dengan Mengisi Kuisioner Akan Sangat Membantu Penelitian Ini</Text>
                </View>
                
                <View style={{ flex:9, paddingTop:'15%', paddingHorizontal:'15%' }}>
                <ScrollView>
                    <Text style={{fontSize:20}}>Nama : </Text>
                    <TextInput
                        style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(nama) => this.setState({nama})}
                        value={this.state.nama}
                    />
                    {!!this.state.namaError && (
                        <Text style={{ color: "red" }}>{this.state.namaError}</Text>
                    )}
                    {/* ========================================================================================================= */}       

                    <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1, paddingVertical: '5%'}}/>
                    <Text style={{fontSize:20, paddingTop:10}}>Apakah aplikasi ini menurutmu bisa membantu seseorang mencari rekomendasi bisnis waralaba : </Text>
                    <RadioForm
                        radio_props={this.state.jawaban1}
                        initial={0}
                        onPress={(value) => {this.setState({bermanfaat:value})}}
                        labelStyle={{ fontSize:20, color:'#006680ff', textAlign: 'left' }}
                        style={{ paddingTop:5 }}
                    />
                    <Text>{this.state.bermanfaat}</Text>
                    <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1, paddingVertical: '5%'}}/>
                    {/* ========================================================================================================= */}


                    <Text style={{fontSize:20,  paddingTop:10}}>Komentar kamu tentang aplikasi ini : </Text>
                    <TextInput
                        multiline = {true}
                        style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(komentar) => this.setState({komentar})}
                        value={this.state.komentar}
                    />
                    {!!this.state.komentarError && (
                        <Text style={{ color: "red" }}>{this.state.komentarError}</Text>
                    )}
                    {/* ========================================================================================================= */}

                    <View style={{borderBottomColor: '#808e9b',borderBottomWidth: 1, paddingVertical: '5%'}}/>
                    <Text style={{fontSize:20, paddingTop:10}}>Apakah anda tertarik serius menjalani bisnis waralaba : </Text>
                    <RadioForm
                        radio_props={this.state.jawaban2}
                        initial={0}
                        onPress={(value) => {this.setState({tindakLanjut:value})}}
                        labelStyle={{ fontSize:20, color:'#006680ff', textAlign: 'left' }}
                        style={{ paddingTop:5 }}
                    />
                    <Text>{this.state.tindakLanjut}</Text>
                    {/* ========================================================================================================= */}
                </ScrollView>
                </View>

                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ paddingBottom: 20, paddingHorizontal:5 }} onPress={ this.submitData }>
                        <Image source={require('./../Components/images/submit.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingBottom: 20, paddingHorizontal:5 }} onPress={ ()=>Actions.FirstView() }>
                        <Image source={require('./../Components/images/lewati.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
      }

      submitData=()=>{
        if (this.state.nama.trim() === "" && this.state.komentar.trim() !== "") {
            this.setState(() => ({ namaError: "Nama Harus Di Isi." }));
            this.setState(() => ({ komentarError: "" }));
        }
        if(this.state.nama.trim() !== "" && this.state.komentar.trim() === ""){
            this.setState(() => ({ komentarError: "Nama Harus Di Isi." }));
            this.setState(() => ({ namaError: "" }));
        }
        if(this.state.nama.trim() === "" && this.state.komentar.trim() === ""){
            this.setState(() => ({ komentarError: "Nama Harus Di Isi." }));
            this.setState(() => ({ namaError: "Nama Harus Di Isi." }));
        }
        if(this.state.nama.trim() !== "" && this.state.komentar.trim() !== "")
        {
            this.setState(() => ({ nameError: null }));
            fetch( this.state.url + 'api/sendKuisioner', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama: this.state.nama,
                    bermanfaat: this.state.bermanfaat,
                    komentar: this.state.komentar,
                    tindakLanjut: this.state.tindakLanjut,
                }),
            });
            alert('Terima Kasih Atas Partisipasinya')
            Actions.FirstView()
            this.forceUpdate()
        }
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default KuisionerHasil