import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from '@react-native-material/core';
import { styles } from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';

//giao diện điền tên
export default function NameScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const handleNext = (navigation) => {
        navigation.navigate('Birthday', {
            firstName: firstName,
            lastName: lastName,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Name</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    What's your name?
                    {'\n\n'}
                </Text>
                <Text>Enter the name you see in real life</Text>
            </Text>

            <View style={styles.inputContainer}>
                <TextInput
                    label="First Name"
                    variant="standard"
                    value={firstName}
                    style={styles.inputText}
                    onChangeText={(newText) => setFirstName(newText)}
                />

                <TextInput
                    label="Last Name"
                    variant="standard"
                    value={lastName}
                    style={styles.inputText}
                    onChangeText={(newText) => setLastName(newText)}
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleNext(navigation)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
