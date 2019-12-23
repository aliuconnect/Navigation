import React from 'react';
import Screen from './Screens';
import HomeScreen from '../Home';
import SettingsScreen from '../Setting';
import DashboardScreen from '../Dashboard';

export const Home= ({navigation})=> {return(<Screen navigation={navigation} ><HomeScreen/></Screen>)}
export const Settings = ({navigation})=> {return(<Screen navigation={navigation} ><SettingsScreen/></Screen>)}
export const Dashboard = ({navigation})=> {return(<Screen navigation={navigation} ><DashboardScreen/></Screen>)}
// {export const ListScreen = ({navigation})=> <Screen navigation={navigation} name='List' />
// export const ReportScreen = ({navigation})=> <Screen navigation={navigation} name='Report' />
// export const StatisticScreen = ({navigation})=> <Screen navigation={navigation} name='Statistic' />
// export const signOutScreen = ({navigation})=> <Screen navigation={navigation} name='signOut' />}