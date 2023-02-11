import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Fragment } from 'react';
import Header from './src/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

//Home
import HomeScreen from './src/pages/HomeScreen';
import Feeds from './src/components/Feeds';
import FriendScreen from './src/pages/FriendScreen';
import VideoScreen from './src/pages/VideoScreen';
import NotificationScreen from './src/pages/NotificationScreen';
import SettingScreen from './src/pages/SettingScreen';
import AllFriends from './src/pages/AllFriends';
import SuggestedFriend from './src/pages/SuggestedFriends';

//Login and Register
import Login from './src/pages/Login';
import IntroduceScreen from './src/pages/Register/Introduce';
import NameScreen from './src/pages/Register/NameScreen';
import BirthDayScreen from './src/pages/Register/BirthdayScreen';
import GenderScreen from './src/pages/Register/GenderScreen';
import PhoneScreen from './src/pages/Register/PhoneScreen';
import PasswordScreen from './src/pages/Register/PasswordScreen';
import TermsScreen from './src/pages/Register/TermsandPrivacy';

// post
import CreatePost from './src/pages/PostTool/CreatePost';
import PostDetail from './src/pages/PostDetail';
import ImageDetail from './src/pages/ImageDetail';
import EditImage from './src/pages/PostTool/EditImage';
import EditPost from './src/pages/PostTool/EditPost';

//profile
import ProfileScreen from './src/pages/Profile/ProfileScreen';

//redux
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { authSelector } from './src/store/reducers/auth.reducer';

import Toast from 'react-native-toast-message';
import ChatScreen from './src/pages/ChatScreen';
import ChatDetail from './src/pages/ChatDetail';
import CommentScreen from './src/pages/CommentScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const rootStack = createNativeStackNavigator();

const AccessTab = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Create account" component={IntroduceScreen} />
            <Stack.Screen name="Name" component={NameScreen} />
            <Stack.Screen name="Birthday" component={BirthDayScreen} />
            <Stack.Screen name="Gender" component={GenderScreen} />
            <Stack.Screen name="Mobile number" component={PhoneScreen} />
            <Stack.Screen name="Password" component={PasswordScreen} />
            <Stack.Screen name="Terms & Privacy" component={TermsScreen} />
        </Stack.Navigator>
    );
};

const MainTab = () => {
    return (
        <Fragment>
            <Header />
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarStyle: {},
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ tintColor, focused }) => (
                            <Icon name="home" size={20} color={focused ? '#318bfb' : '#ddd'}></Icon>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Friend"
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
        </Fragment>
    );
};

const MainApp = () => {
    const navigationOptions = {
        headerShown: false,
    };

    const { isLoggedIn, userToken } = useSelector(authSelector);
    const dispatch = useDispatch();

    const leftToRightAnimation = {
        cardStyleInterpolator: ({ current, layouts }) => {
            return {
                cardStyle: {
                    transform: [
                        {
                            translateX: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-layouts.screen.width, 0],
                            }),
                        },
                    ],
                },
            };
        },
    };

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {/* {isLoggedIn ? (
                    <rootStack.Navigator screenOptions={navigationOptions} initialRouteName="AccessTab">
                        <rootStack.Screen name="AccessTab" component={AccessTab} />
                    </rootStack.Navigator>
                ) : (
                    <rootStack.Navigator screenOptions={navigationOptions} initialRouteName="AccessTab">
                        <rootStack.Screen name="MainTab" component={MainTab} />
                        <rootStack.Screen name="AllFriends" component={AllFriends} />
                        <rootStack.Screen name="SuggestedFriends" component={SuggestedFriend} />
                        <rootStack.Screen
                            name="CreatePost"
                            options={{ animation: 'slide_from_bottom' }}
                            component={CreatePost}
                        />

                        <rootStack.Screen name="PostDetail" component={PostDetail} />
                        <rootStack.Screen
                            name="ImageDetail"
                            options={{ ...TransitionPresets.ScaleFromCenterAndroid }}
                            component={ImageDetail}
                        />
                    </rootStack.Navigator>
                )} */}

                <rootStack.Navigator screenOptions={navigationOptions} initialRouteName="AccessTab">
                    <rootStack.Screen name="AccessTab" component={AccessTab} />
                    <rootStack.Screen name="MainTab" component={MainTab} />
                    <rootStack.Screen
                        name="CommentScreen"
                        options={{ animation: 'slide_from_bottom' }}
                        component={CommentScreen}
                    />
                    <rootStack.Screen name="AllFriends" component={AllFriends} />
                    <rootStack.Screen name="ChatScreen" component={ChatScreen} />
                    <rootStack.Screen name="ChatDetail" component={ChatDetail} />
                    <rootStack.Screen name="SuggestedFriends" component={SuggestedFriend} />
                    <rootStack.Screen
                        name="CreatePost"
                        options={{ animation: 'slide_from_bottom' }}
                        component={CreatePost}
                    />
                    <rootStack.Screen
                        name="EditImage"
                        options={{ animation: 'slide_from_right' }}
                        component={EditImage}
                    />
                    <rootStack.Screen
                        name="EditPost"
                        options={{ animation: 'slide_from_right' }}
                        component={EditPost}
                    />
                    <rootStack.Screen name="PostDetail" component={PostDetail} />
                    <rootStack.Screen
                        name="ImageDetail"
                        options={{ ...TransitionPresets.ScaleFromCenterAndroid }}
                        component={ImageDetail}
                    />

                    {/*profile*/}
                    <rootStack.Screen
                        name="Profile"
                        options={{ animation: 'slide_from_right' }}
                        component={ProfileScreen}
                    />

                </rootStack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default function App() {
    let persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Hello</Text>} persistor={persistor}>
                <MainApp />
                <Toast />
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
