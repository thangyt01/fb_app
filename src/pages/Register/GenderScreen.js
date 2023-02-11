import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function GenderScreen({ route, navigation }) {
    const [value, setValue] = React.useState('male');

    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const handleNext = (navigation) => {
        navigation.navigate('Mobile number', {
            firstName: route.params.firstName,
            lastName: route.params.lastName,
            birthday: route.params.birthday,
            gender: value,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Gender</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    What's your gender?
                    {'\n\n'}
                </Text>
                <Text>You can change who sees your gender on your profile later</Text>
            </Text>

            <RadioButton.Group onValueChange={(newValue) => setValue(newValue)} value={value}>
                <RadioButton.Item label="Male" value="male" />
                <RadioButton.Item label="Female" value="female" />
            </RadioButton.Group>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleNext(navigation)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
