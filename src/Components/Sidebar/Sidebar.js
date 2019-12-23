import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default Sidebar = props =>(
    <ScrollView>
        <ImageBackground 
            source={require('../../Assets/Images/Background.jpg')}
            style={{width:undefined, padding:16, paddingTop:48}}     
        >
        <Image source={require('../../Assets/Images/profile-pic.png')} style={styles.profile}/>
        <Text style={styles.name}>Ali Muhammdi</Text>

        <View style={{flexDirection:'row'}}>
            <Text style={styles.followers}>734 Followers</Text>
            <Ionicons name='md-people' size={16} color='rgba(255, 255, 255, 0.8)' />
        </View>
        </ImageBackground>
        <View>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>

);

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    profile:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:3,
        borderColor:'#fff',
    }, 
    name:{
        color:'#FFF',
        fontSize:20,
        fontWeight:'800',
        marginVertical:8,
    },
    followers:{
        color:'rgba(255 , 255 , 255 , 0.8)',
        fontSize:13,
        marginRight:4,
    },
})
