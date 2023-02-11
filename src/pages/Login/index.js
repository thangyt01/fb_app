import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from '@react-native-material/core';
import AuthService from '../../services/AuthServices';
import { httpStatus } from '../../constants/httpStatus';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, login } from '../../store/reducers/auth.reducer';
import { setAuthToken } from '../../configs/axios.config';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({ navigation }) => {
    const [phonenumber, setPhonenumber] = useState();
    const [password, setPassword] = useState();
    const { isLoggedIn, userToken } = useSelector(authSelector);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.login(phonenumber, password);
            if (response.status == httpStatus.OK) {
                setAuthToken(response.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(response.data));
                dispatch(login(response.data));
                setIsLoading(false);
                Toast.show({
                    type: 'success',
                    text1: 'Đăng nhập thành công',
                    position: 'bottom',
                });
                navigation.navigate('MainTab');
            } else {
                // console.log('Error when login');
                setIsLoading(false);
                Toast.show({
                    type: 'error',
                    text1: 'Có lỗi xảy ra',
                    position: 'bottom',
                });
            }
        } catch (err) {
            setIsLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Có lỗi xảy ra',
                position: 'bottom',
            });
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigation.navigate('MainTab');
        }
    }, []);

    return (
        <View>
            <Spinner visible={isLoading} textContent="Loading ..." textStyle={styles.spinnerTextStyle} />
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'rgba(0,0,0,0)'} />

            <Image source={require('../../../assets/loginbanner.png')} style={styles.banner} />
            <View style={styles.inputcontainer}>
                <TextInput
                    label="Phone or email"
                    variant="standard"
                    value={phonenumber}
                    style={styles.input}
                    onChangeText={(newVal) => {
                        setPhonenumber(newVal);
                    }}
                />
                <TextInput
                    label="Password"
                    variant="standard"
                    value={password}
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={(newVal) => {
                        setPassword(newVal);
                    }}
                />
            </View>
            <TouchableOpacity style={styles.Logincontainer} onPress={handleLogin}>
                <Text style={styles.Logintext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Passwordcontainer}>
                <Text style={styles.Passwordtext}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.Orcontainer}>
                <View style={styles.çizgi}></View>
                <Text>OR</Text>
                <View style={styles.çizgi}></View>
            </View>

            <TouchableOpacity style={styles.Sigincontainer} onPress={() => navigation.navigate('Create account')}>
                <Text style={styles.Sigintext}>Create new Facebook account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    banner: {
        width: Dimensions.get('window').width,
    },
    dilcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    moretext: {
        color: '#1877F2',
    },
    inputcontainer: {
        marginTop: 50,
    },
    input: {
        // borderBottomWidth: 2,
        borderColor: '#E4E6EB',
        marginHorizontal: 35,
        fontSize: 17,
        marginTop: 10,
    },
    Logincontainer: {
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35,
        borderRadius: 8,
        marginVertical: 20,
    },
    Logintext: {
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 18,
    },
    Passwordcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Passwordtext: {
        fontWeight: 'bold',
        color: '#1877F2',
        fontSize: 18,
    },
    Orcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 45,
    },
    çizgi: {
        borderColor: '#E4E6EB',
        borderTopWidth: 3,
        width: 150,
        alignSelf: 'center',
        marginHorizontal: 5,
    },
    Sigincontainer: {
        backgroundColor: '#2FA24B',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 60,
        borderRadius: 8,
    },
    Sigintext: {
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 15,
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});
