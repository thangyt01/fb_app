import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AuthService from '../../services/AuthServices';
import { useSelector, useDispatch } from 'react-redux';
import { httpStatus } from '../../constants/httpStatus';
import { setAuthToken } from '../../configs/axios.config';
import { login } from '../../store/reducers/auth.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';
import { useState } from 'react';

export default function TermsScreen({ route, navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const firstName = route.params.firstName;
    const lastName = route.params.lastName;
    const birthday = new Date(route.params.birthday);
    const gender = route.params.gender;
    const phonenumber = route.params.phonenumber;
    const password = route.params.password;

    const handleSignUp = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.register(firstName, lastName, birthday, gender, phonenumber, password);
            if (response.status != httpStatus.CREATED) {
                setIsLoading(false);
                // console.log('Error Occur when sign up');
                Toast.show({
                    type: 'error',
                    text1: 'Có lỗi xảy ra',
                    position: 'bottom',
                });
            } else {
                // console.log(response.data);
                setAuthToken(response.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(response.data));
                dispatch(login(response.data));
                setIsLoading(false);
                Toast.show({
                    type: 'success',
                    text1: 'Đăng ký thành công',
                    position: 'bottom',
                });
                navigation.navigate('MainTab');
            }
        } catch (err) {
            setIsLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Có lỗi xảy ra',
                text2: err.message,
                position: 'bottom',
            });
        }
    };

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} textContent="Loading ..." textStyle={styles.spinnerTextStyle} />
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Terms & Privacy</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    Finish signing up
                    {'\n\n'}
                </Text>
                <Text>
                    People who use our service many have uploaded your contect information to Facebook. Learn more
                    {'\n\n'}
                </Text>
                <Text>
                    By tapping Sign up, you agree to you Terms, Data Policy and Cookies Policy. You may receive SMS
                    notifications from us and can opt out any time.
                </Text>
            </Text>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}
