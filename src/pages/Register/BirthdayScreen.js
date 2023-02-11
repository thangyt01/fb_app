import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import DatePicker from 'react-native-date-picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function BirthDayScreen({ route, navigation }) {
    const [date, setDate] = useState(new Date());
    const handleBack = (navigation) => {
        navigation.goBack();
    };

    const handleNext = (navigation) => {
        navigation.navigate('Gender', {
            firstName: route.params.firstName,
            lastName: route.params.lastName,
            birthday: date.toISOString(),
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={() => handleBack(navigation)} style={styles.naviIcon}>
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Birthday</Text>
            </View>

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    What's your birthday?
                    {'\n\n'}
                </Text>
                <Text>Choose your date of birth. You can always make this private later</Text>
            </Text>

            <DatePicker
                style={styles.dateInput}
                androidVariant="nativeAndroid"
                mode="date"
                locale="en"
                format="DD/MM/YYYY"
                // maximumDate={date}
                date={date}
                textColor="#000000"
                onDateChange={setDate}
            />

            <TouchableOpacity style={styles.buttonContainer} onPress={() => handleNext(navigation)}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}
