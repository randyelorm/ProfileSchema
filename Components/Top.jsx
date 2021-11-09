import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function App() {




    return (
        <View >

            <View style={styles.editbox}>
                <BackIcon name="arrow-back" style={styles.backIcon} />
                <Text style={styles.editText}>Edit Profile</Text>
            </View>




        </View>

    );
}

const styles = StyleSheet.create({


    backIcon: {
        fontSize: 25,
        marginLeft: 4
    },


    editbox: {

        borderBottomWidth: 2,
        borderColor: "#F6F6F6",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",




    },

    editText: {
        textAlign: "center",
        fontSize: 20,
        flexDirection: "row",
        justifyContent: "center",
        marginLeft: 110
    },



});
