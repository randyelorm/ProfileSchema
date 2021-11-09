import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';




const ProfileImage = () => {



    return (
        <View>


            <View style={styles.ImageView}>
                <Image source={require("../assets/passport.jpg")} style={styles.Image} />
                <CameraIcon name="camerao" style={styles.cameraIcon} />
            </View>


        </View>

    );
}


export default ProfileImage;

const styles = StyleSheet.create({





    ImageView: {
        width: "100%",
        marginTop: 10,
        position: "relative",
        flexDirection: "row",
        justifyContent: "center",




    },

    Image: {
        height: 150,
        width: 150,
        borderRadius: 100
    },

    cameraIcon: {
        position: "absolute",
        fontSize: 20,
        left: 230,
        top: 85,
        backgroundColor: "#26B4E4",
        color: "white",
        padding: 10,
        borderWidth: 1,
        borderRadius: 100 / 5,
        overflow: "hidden",
        borderColor: "skyblue"




    },





});
