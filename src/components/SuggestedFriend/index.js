import { View, Image, Text, TouchableOpacity } from 'react-native';
import { serverUrl } from '../../constants/serverUrl';
import { useState } from 'react';
import FriendService from '../../services/FriendService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';

function SuggestedFriend(props) {
    const [isSent, setIsSent] = useState(false);

    const { userToken } = useSelector(authSelector);

    const handleSentRequest = () => {
        FriendService.sendRequest(userToken, props.data._id)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    // console.log(response.data.data);
                    setIsSent(true);
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Có lỗi xảy ra',
                        position: 'bottom',
                    });
                }
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: 'Có lỗi xảy ra',
                    position: 'bottom',
                });
            });
    };

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
                <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 8 }}>
                    {props.data.firstName} {props.data.lastName}
                </Text>
                <View>
                    {isSent ? (
                        <View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#eee',
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    borderRadius: 8,
                                    marginRight: 8,
                                    flex: 1,
                                }}
                            >
                                <Text
                                    style={{ color: '#000', fontSize: 16, fontWeight: '600', textAlign: 'center' }}
                                    onPress={handleSentRequest}
                                >
                                    Sent request
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#1778F2',
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    borderRadius: 8,
                                    marginRight: 8,
                                    flex: 1,
                                }}
                            >
                                <Text
                                    style={{ color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' }}
                                    onPress={handleSentRequest}
                                >
                                    Add friend
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#eee',
                                    paddingTop: 8,
                                    paddingBottom: 8,
                                    paddingLeft: 16,
                                    paddingRight: 16,
                                    borderRadius: 8,
                                    flex: 1,
                                }}
                            >
                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default SuggestedFriend;
