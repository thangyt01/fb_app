import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/home/Feed';
import RequestFriends from '../screens/home/RequestFriends';
import Setting from '../screens/home/Setting';
import Video from '../screens/home/Video';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBarIcon = ({ focused, route }) => {
    let iconName = '';

    if (route.name === 'feed') {
      iconName = focused ? 'ios-home' : 'ios-home-outline';
    } else if (route.name === 'video') {
      iconName = focused ? 'tv-sharp' : 'tv-outline';
    } else if (route.name === 'request-friends') {
      iconName = focused ? 'person-add-sharp' : 'person-add-outline';
    } else if (route.name === 'setting') {
      iconName = focused ? 'settings-sharp' : 'settings-outline';
    }
    return (
      <Icon name={iconName} size={24} color={focused ? '#3673CB' : '#5D5E62'} />
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => renderTabBarIcon({ focused, route }),
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="video" component={Video} />
      <Tab.Screen name="request-friends" component={RequestFriends} />
      <Tab.Screen name="setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
