import { Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from '@react-native-material/core';
import { styles } from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';

export default function PhoneScreen({ route, navigation }) {
    const [phone, setPhone] = useState('');

    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const handleNext = (navigation) => {
        navigation.navigate('Password', {
            firstName: route.params.firstName,
            lastName: route.params.lastName,
            birthday: route.params.birthday,
            gender: route.params.gender,
            phonenumber: phone,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Mobile number</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    Enter your mobile number
                    {'\n\n'}
                </Text>
                <Text>Enter the mobile number where you can be reached. You can hide this from your profile later</Text>
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    label="Mobile number"
                    variant="standard"
                    value={phone}
                    style={styles.inputText}
                    onChangeText={(newText) => setPhone(newText)}
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleNext(navigation)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
