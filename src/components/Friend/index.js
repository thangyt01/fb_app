import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Friend(props) {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 999,
                    }}
                    source={{
                        uri: props.data.avatar
                            ? `${serverUrl.HTTP_SERVER_URL}/${props.data.avatar.fileName}`
                            : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                    }}
                />
            </View>
            <View
                style={{
                    flex: 3,
                    paddingLeft: 16,
                }}
            >
                <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 4 }}>
                    {props.data.firstName} {props.data.lastName}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ color: '#555', fontWeight: '500' }}>2 mutual friends</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Icon name="ellipsis-h" size={20} color={'#555'} />
            </TouchableOpacity>
        </View>
    );
}

export default Friend;
