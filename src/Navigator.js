import React from 'react'
import HomeScreen from '../src/Container/Home';
import SettingsScreen from '../src/Container/Setting';
import DashboardScreen from '../src/Container/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'



const TabNavigator =  createMaterialTopTabNavigator({
  Home:{screen:HomeScreen,
  navigationOptions:{
    tabBarLabel:'Home',
    tabBarIcon:({activeColor})=><Icon name = 'ios-home' color={activeColor} size={24}/>
    
  }
  },
  Dashboard:{screen:DashboardScreen,
    navigationOptions:{
      tabBarLabel:'Dashboard',
      tabBarIcon:({activeColor})=><Icon name = 'ios-folder' color={activeColor} size={24}/>
    }},
  Settings:{screen:SettingsScreen, 
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon:({activeColor})=><Icon name = 'ios-options' activeColor={activeColor} size={24}/>
    }
  },
},{
  initialRouteName:'Home',
  tabBarPosition:'bottom',
  // swipeEnabled:false,

  tabBarOptions: {
    activeTintColor: '#D4AF37',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      borderTopWidth:0.6,
      borderTopColor:'grey',
    },
    indicatorStyle:{
      height:0,
    
    },
    showIcon:true,
  
  },

})
export default createAppContainer(TabNavigator);

// const TabNavigator = createBottomTabNavigator(
//   {
//     Dashboard:DashboardScreen,
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         // let IconComponent = Ionicons;
//         // let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           // Sometimes we want to add badges to some icons.
//           // You can check the implementation below.
//         //   IconComponent = HomeIconWithBadge;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options`;
//         }
//         else if(routeName === 'Dashboard'){
//             iconName = `ios-folder`
//         }

//         // You can return any component that you like here!
//         return <Icon name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',


//     },
//   }
// );
// export default createAppContainer(TabNavigator);