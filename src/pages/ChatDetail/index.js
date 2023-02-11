import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

function ChatDetail() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    function handleSendMessage() {
        setMessages([...messages, message]);
        setMessage('');
    }

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e6e6' }}>
            <View
                style={{
                    height: 60,
                    backgroundColor: '#0084ff',
                    marginTop: StatusBar.currentHeight,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity style={{ marginLeft: 20, marginRight: 20 }} onPress={handleBack}>
                    <Icon name="chevron-left" size={24} color={'white'}></Icon>
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                        }}
                        source={{
                            uri: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                        }}
                    />
                    <Text style={{ color: 'white', marginLeft: 10, fontSize: 18, fontWeight: '500' }}>User 1</Text>
                </View>
            </View>
            <ScrollView style={{ flex: 1, padding: 10 }}>
                {messages.map((m, index) => (
                    <View
                        key={index}
                        style={{ padding: 10, backgroundColor: '#ffffff', borderRadius: 10, marginBottom: 10 }}
                    >
                        <Text style={{ fontSize: 16 }}>{m}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#ffffff' }}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    style={{
                        flex: 1,
                        height: 40,
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 10,
                    }}
                />
                <TouchableOpacity
                    onPress={handleSendMessage}
                    style={{
                        backgroundColor: '#4287f5',
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#ffffff' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default ChatDetail;
