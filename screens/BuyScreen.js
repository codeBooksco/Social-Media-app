import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Image, Picker, Text, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Reinput from 'reinput';


export default class BuyScreen extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                navigation: this.props.navigation, //here you assign the navigation props to a state
                selectedItem: 0,
            }
    }

    onItemSelected = selectedItem => {
        this.setState({ selectedItem })
    }

    onPress = () => {
        this.setState({ selectedItem: 3 })
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.navigate("Website")}>
                        <Ionicons style={styles.camerraIcon} name="ios-arrow-back" size={30} color="#fff" />
                        <Text style={{ fontSize: 18, paddingLeft: 5, color: "#fff" }}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondRow}>
                    <View style={{ flex: 1 }}>
                        <Reinput label='Name' style={{ fontSize: 15, }} />
                    </View>
                </View>
                <View style={styles.thirdRow}>
                    <View style={{ flex: 1 }}>
                        <Reinput label='Contack Number' style={{ fontSize: 15 }} />
                    </View>
                </View>
                <View style={styles.thirdRow}>
                    <View style={{ flex: 1 }}>
                        <Reinput label='Address' style={{ fontSize: 20 }} />
                    </View>
                </View>
                <View style={{alignItems: 'center', marginTop: -20}}>
                    <Picker
                        selectedValue={this.state.language}
                        style={{ height: 150, width: 150 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }
                        >
                        <Picker.Item label="Small" value="sm" />
                        <Picker.Item label="Medium" value="mg" />
                        <Picker.Item label="Large" value="lg" />
                    </Picker>
                </View>
                <View style={styles.submit}>
                    <TouchableOpacity style={styles.btnSubmit} onPress={() => this.props.navigation.navigate("Website")}>
                        <Text style={{fontSize:17, color: '#fff', fontWeight: '600'}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
    },

    searchIcon: {
        marginTop: 20
    },

    backBtn: {
        flexDirection: 'row',
        width: 80,
        height: 50,
        backgroundColor: '#0275d8',
        padding: 13,
        borderRadius: 5
    },

    secondRow: {
        flexDirection: 'row',
        marginLeft: 18,
        marginRight: 18,
        marginTop: 70
    },

    thirdRow: {
        flexDirection: 'row',
        marginLeft: 18,
        marginRight: 18,
    },

    submit: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    btnSubmit: {
        width: 80,
        height: 45,
        padding: 10,
        paddingLeft: 12,
        borderRadius: 10,
        backgroundColor: '#0275d8',
    }

});
