import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import Feed from '../screen/Feed';
import Profile from '../screen/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../common/Header';
import RequestFriends from '../screen/RequestFriends';
import { useTailwind } from 'tailwind-rn/dist';
import Setting from '../screen/Setting';
import Video from '../screen/Video';

const StackScreen = () => {
  const tw = useTailwind();

  const Tab = createBottomTabNavigator();

  return (
    <View style={tw('h-full bg-white')}>
      <Header />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'feed') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'video') {
              iconName = focused ? 'tv-sharp' : 'tv-outline';
            } else if (route.name === 'request-friends') {
              iconName = focused ? 'person-add-sharp' : 'person-add-outline';
            } else if (route.name === 'setting') {
              iconName = focused ? 'settings-sharp' : 'settings-outline';
            }

            return <Icon name={iconName} size={30} color="#30477C" />;
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="feed" component={Feed} />
        <Tab.Screen name="video" component={Video} />
        <Tab.Screen name="request-friends" component={RequestFriends} />
        <Tab.Screen name="setting" component={Setting} />
      </Tab.Navigator>
    </View>
  );
};

export default StackScreen;
