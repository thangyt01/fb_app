import { View, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faUserGroup, faUsers, faStore, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { Platform, StatusBar, SafeAreaView, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PostStatus from '../PostStatus';
import SinglePost from '../SinglePost';
import HomeScreen from '../../pages/HomeScreen';
import NotificationScreen from '../../pages/NotificationScreen';
import FriendScreen from '../../pages/FriendScreen';
import VideoScreen from '../../pages/VideoScreen';
import SettingScreen from '../../pages/SettingScreen';
import Feeds from '../Feeds';

const Tab = createMaterialTopTabNavigator();

function RootNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarStyle: {},
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Feeds}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="home" size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={FriendScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="user-circle" size={22} color={focused ? '#318bfb' : '#ddd'}></Icon>
                    ),
                }}
            />
            <Tab.Screen
                name="Video"
                component={VideoScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="video" size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>
                    ),
                }}
            />

            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="bell" size={22} color={focused ? '#318bfb' : '#ddd'}></Icon>
                    ),
                }}
            />

            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon name="bars" size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default RootNavigation;
