import React from 'react';
import {Dimensions} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Home, Dashboard, Settings}from '../src/Container/Screens'
// import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons'
import Sidebar from './Components/Sidebar/Sidebar'


const DrawerNavigator = createDrawerNavigator({
   Home:{
      screen: Home,  
      navigationOptions:{
         title:"Home",
         drawerIcon:({tintColor})=> <Icon name = 'ios-home' color={tintColor} size={16}/>
      }
   },
   Dashboard:{
      screen: Dashboard,  
      navigationOptions:{
         title:"Dashboard",
         drawerIcon:({tintColor})=> <Icon name = 'ios-folder' color={tintColor} size={16}/>
      }
   },
   Settings:{
      screen: Settings,  
      navigationOptions:{
         title:"Settings",
         drawerIcon:({tintColor})=> <Icon name = 'ios-options' color={tintColor} size={16}/>
      },
      
   },
},
   {
      contentComponent: props => <Sidebar {...props}/>,
      drawerWidth:Dimensions.get('window').width * 0.85,
      hideStatusBar:true,

      contentOptions:{
         activeBackgroundColor:'rgba(212, 118, 207, 0.2)',
         activeTintColor: '#53115B',

         itemsContainerStyle:{
            marginTop:16,
            marginHorizontal:8,
         },

         itemStyle:{
            borderRadius:4,
         }
      }
      
     
   }
);
export default createAppContainer(DrawerNavigator)  




