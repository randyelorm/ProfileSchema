import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {

    const [value, setValue] = useState({
        number: "+1-987654321",
    })

    return (
        <KeyboardAwareScrollView>
            <View style={styles.infoView}>
                <Text style={styles.info_heading}>School</Text>
                <Text style={styles.info_text}>CodeTrainGh</Text>
            </View>

            <View style={styles.infoView2}>
                <Text style={styles.info_heading}>Email Address</Text>
                <Text style={styles.info_text}>randydavoh@codetrain.com</Text>
            </View>

            <View style={styles.input_view}>
                <Text style={styles.input_label}>Name</Text>
                <TextInput placeholder="Enter Name" value="Randy Davoh" style={styles.input} />
            </View>
            <View style={styles.input_view}>
                <Text style={styles.input_label}>Nick Name</Text>
                <TextInput placeholder="Enter Nick Name" value="R.Davoh" style={styles.input} />
            </View>
            <View style={styles.input_view}>
                <Text style={styles.input_label}>Emergency Contact</Text>
                <TextInput placeholder="Enter Emergency Contact" value={value.number} style={styles.input} />
                <PhoneIcon style={styles.phoneIcon} name="phone-square-alt" />

            </View>
            <TouchableOpacity style={styles.update_btn}>
                <Text style={styles.btnText}>  UPDATE PROFILE </Text>
            </TouchableOpacity>
        </KeyboardAwareScrollView>


    );
}

const styles = StyleSheet.create({


    TextInput: {
        width: "100%",
        paddingHorizontal: 50,

    },

    infoView: {
        marginBottom: 15
    },

    infoView2: {
        marginBottom: 20
    },

    info_heading: {
        fontSize: 15,
        color: "grey",
        marginBottom: 5
    },

    info_text: {
        fontSize: 20
    },



    input_label: {
        color: "#27B4E4",
        fontSize: 17,
        fontWeight: "bold"
    },

    input_view: {
        marginBottom: 15
    },

    input: {

        fontSize: 16,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#F6F6F6",
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative"

    },


    update_btn: {
        backgroundColor: "#27B4E4",
        alignItems: "center",
        padding: 20,
        borderRadius: 100,
        marginTop: 30,
        marginBottom: 10

    },

    btnText: {
        color: "white",
        fontSize: 20
    },

    phoneIcon: {
        position: "absolute",
        left: 250,
        top: 20,
        fontSize: 25,
        color: "#C5CED1"
    }



});
