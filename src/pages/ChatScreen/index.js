import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const users = [
    { id: '1', name: 'User 1' },
    { id: '2', name: 'User 2' },
    { id: '3', name: 'User 3' },
    { id: '4', name: 'User 4' },
    { id: '5', name: 'User 5' },
    { id: '6', name: 'User 6' },
    { id: '7', name: 'User 7' },
    { id: '8', name: 'User 8' },
    { id: '9', name: 'User 9' },
    { id: '10', name: 'User 10' },
    { id: '11', name: 'User 11' },
    { id: '12', name: 'User 12' },
    { id: '13', name: 'User 13' },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 30,
        fontSize: 16,
    },
    userContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
        marginRight: 20,
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
    },
});

function ChatScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    function handleSearch(text) {
        setSearch(text);
        const filtered = users.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredUsers(filtered);
    }

    function handleSelectUser(user) {
        navigation.navigate('ChatDetail', { recipient: user });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: StatusBar.currentHeight,
                    paddingTop: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingBottom: 8,
                }}
            >
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
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '600',
                    }}
                >
                    Chats
                </Text>

                <TouchableOpacity>
                    <Icon name="user-plus" size={22}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput value={search} onChangeText={handleSearch} placeholder="Search" style={styles.input} />
            </View>
            <FlatList
                data={filteredUsers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectUser(item)} style={styles.userContainer}>
                        <View style={styles.userAvatar} />
                        <View>
                            <Text style={styles.userName}>{item.name}</Text>
                            <Text style={{ color: '#666' }}>Hello</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

export default ChatScreen;
