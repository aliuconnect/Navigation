import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import {} from 'react-navigation'

  const Dashboard = props=>{
    // const {navigate} = props.navigation
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Dashboard Screen!</Text>
          <TouchableOpacity
          // onPress={()=>navigate('Home')}
          ><Text>Go to Home</Text></TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>navigate('Settings')}
          ><Text>Go to Setting</Text></TouchableOpacity>
        </View>
      );
    }

  export default Dashboard;