import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Image, Picker, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default class Merchandise extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                navigation: this.props.navigation //here you assign the navigation props to a state 
            }
    }

    render() {

        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Ionicons style={styles.searchIcon} name="ios-arrow-back" size={20} color="#000" />
                    </View>
                    <View style={styles.SectionStyle}>
                        <Image
                            //We are showing the Image from online
                            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png', }}

                            //You can also show the image from you project directory like below
                            //source={require('./Images/user.png')}

                            //Image Style
                            style={styles.ImageStyle}
                        />

                        <TextInput
                            style={styles.searchInput}
                            placeholder="Enter Your Name Here"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.cameraSection}>
                        <Ionicons style={styles.camerraIcon} name="ios-camera" size={30} color="#000" />
                    </View>
                </View>
                <View style={styles.secondRow}>
                    <View>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Best match" value="Best_match" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={{ flex: 5, marginTop: 15 }}>
                        <Text>Orders</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'row', marginTop: 15 }}>
                        <AntDesign name="filter" size={20} color="#000" />
                        <Text>Filter</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.thirdRow}>
                        <View style={{ flex: 1 }}>
                            <Image
                                source={{ uri: 'https://www.kaft.com/static/images/cache/626/tisort_bug_8775_626_626.jpg?cacheID=1564385581000' }}
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontWeight: '400' }}>Casual T Shirt Men</Text>
                            <Text style={{ fontWeight: '600', marginTop: 10 }}>PKR 800</Text>
                            <Text style={{ marginTop: 10, fontSize: 10, color: 'grey' }}>Shipping: PKR 200</Text>
                            <Text style={{ marginTop: 10, fontSize: 10, color: 'grey' }}>
                                5.0 <AntDesign name="star" size={10} color="#F0AB19" />
                            </Text>
                        </View>
                    </View>
                    <View style={styles.thirdRow}>
                        <View style={{ flex: 1 }}>
                            <Image
                                source={{ uri: 'https://cdn.shopify.com/s/files/1/0161/0482/products/ayegear_tshirt_5_pockets_multipocket_travel_scottevest_navy.jpg?v=1538484272' }}
                                style={styles.cardImg}
                            />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontWeight: '400' }}>Casual T Shirt Men</Text>
                            <Text style={{ fontWeight: '600', marginTop: 10 }}>PKR 800</Text>
                            <Text style={{ marginTop: 10, fontSize: 10, color: 'grey' }}>Shipping: PKR 200</Text>
                            <Text style={{ marginTop: 10, fontSize: 10, color: 'grey' }}>
                                5.0 <AntDesign name="star" size={10} color="#F0AB19" />
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        margin: 10,
        // width: 100%
    },

    searchIcon: {
        marginTop: 20
    },

    camerraIcon: {
        marginTop: 15
    },

    icon: {
        flex: 1
    },

    SectionStyle: {
        flex: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 20,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },

    searchInput: {
        flex: 1
    },

    cameraSection: {
        flex: 2
    },

    secondRow: {
        flexDirection: 'row',
        marginTop: -20,
        marginLeft: 10
    },

    picker: {
        height: 50,
        width: 140,
        fontSize: 2,
        color: 'orange'
    },

    thirdRow: {
        flexDirection: 'row',
        marginTop: 20
    },

    cardImg: {
        // padding: 10,
        marginLeft: 15,
        height: 100,
        width: 100,
        // resizeMode: 'stretch',
        // alignItems: 'center',
    }
});


        // export default Merchandise;

// Merchandise.navigationOptions = {
//     title: 'Merchandise',
// };