import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import PhoneIcon from 'react-native-vector-icons/FontAwesome5';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import Top from "./Components/Top"
import ProfileImage from './Components/ProfileImage';
import Details from "./Components/Details"

export default function App() {






  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.top}>
        <Top />
      </View>

      <View style={styles.profileImage}>
        <ProfileImage />
      </View>

      <View style={styles.profileDetails}>
        <Details />
      </View>
    </SafeAreaView>
  )







}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

  top: {

    padding: 10,

    flex: 5


  },

  profileImage: {


    flex: 35

  },

  profileDetails: {


    flex: 2,
    paddingHorizontal: 50,

    flex: 60
  }


});
