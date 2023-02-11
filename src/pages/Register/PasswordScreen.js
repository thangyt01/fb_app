import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from '@react-native-material/core';
import { styles } from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';

export default function PasswordScreen({ route, navigation }) {
    const [password, setPassword] = useState('');

    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const handleNext = (navigation) => {
        navigation.navigate('Terms & Privacy', {
            firstName: route.params.firstName,
            lastName: route.params.lastName,
            birthday: route.params.birthday,
            gender: route.params.gender,
            phonenumber: route.params.phonenumber,
            password: password,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Password</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    Choose a password
                    {'\n\n'}
                </Text>
                <Text>Create a password with at least 6 characters. It should be something others couldn't guess</Text>
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    label="Password"
                    variant="standard"
                    value={password}
                    style={styles.inputText}
                    onChangeText={(newText) => setPassword(newText)}
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleNext(navigation)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
