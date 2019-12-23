import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const SettingsScreen = props =>{
  // const {navigate} = props.navigation
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings Screen!</Text>
          <TouchableOpacity
          // onPress={()=>navigate('Dashboard')}
          ><Text>Go to Dashboard</Text></TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>navigate('Home')}
          ><Text>Go to Home</Text></TouchableOpacity>
        </View>
      );   
  }
  export default SettingsScreen;