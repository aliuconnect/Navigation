import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';

const HomeScreen = props =>{
  // const {navigate} = props.navigation
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home Screen!</Text>
          <TouchableOpacity
          // onPress={()=>navigate('Dashboard')}
          ><Text>Go to Dashboard</Text></TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>navigate('Settings')}
          ><Text>Go to Setting</Text></TouchableOpacity>
        </View>
      );
    
  }
  export default HomeScreen;