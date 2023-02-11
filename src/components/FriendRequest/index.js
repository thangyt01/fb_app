import { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { serverUrl } from '../../constants/serverUrl';
import FriendService from '../../services/FriendService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { friendStatus } from '../../constants/friendStatus';
import { httpStatus } from '../../constants/httpStatus';

function FriendRequest(props) {
    // 1 - accept
    // 2 - reject
    const [status, setStatus] = useState('0');
    const { userToken } = useSelector(authSelector);

    const handleAccept = () => {
        FriendService.setAccept(userToken, props.data.sender._id, friendStatus.ACCEPTED)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    // console.log(response.data.data);
                    setStatus(friendStatus.ACCEPTED);
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

    const handleReject = () => {
        FriendService.setAccept(userToken, props.data.sender._id, friendStatus.REJECTED)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    // console.log(response.data.data);
                    setStatus(friendStatus.REJECTED);
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
                        uri: props.data.sender.avatar
                            ? `${serverUrl.HTTP_SERVER_URL}/${props.data.sender.avatar}`
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
                    {props.data.sender.firstName} {props.data.sender.lastName}
                </Text>
                {status === friendStatus.ACCEPTED && (
                    <View>
                        <Text>You are friends</Text>
                    </View>
                )}

                {status === friendStatus.REJECTED && (
                    <View>
                        <Text>Rejected</Text>
                    </View>
                )}

                {status === friendStatus.SENT_REQUEST && (
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
                            onPress={handleAccept}
                        >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                                Accept
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
                            onPress={handleReject}
                        >
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
                                Reject
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
}

export default FriendRequest;
