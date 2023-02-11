import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FriendRequest from '../../components/FriendRequest';
import { useState } from 'react';
import { useEffect } from 'react';
import FriendService from '../../services/FriendService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';

function FriendScreen({ navigation }) {
    const [friendRequests, setFriendRequests] = useState([]);
    const { userToken } = useSelector(authSelector);

    useEffect(() => {
        FriendService.getListRequest(userToken)
            .then((response) => {
                // console.log(response)
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    setFriendRequests(response.data.data.receivedList);
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
    }, []);

    const handleShowAllFriends = () => {
        navigation.navigate('AllFriends');
    };

    const handleShowSuggestedFriends = () => {
        navigation.navigate('SuggestedFriends');
    };

    return (
        <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 16,
                    paddingRight: 16,
                    marginTop: 8,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: '800' }}>Friends</Text>
                <TouchableOpacity style={{ padding: 8, backgroundColor: '#eee', borderRadius: 999 }}>
                    <Icon name="search" size={25} />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 16,
                    borderBottomWidth: 2,
                    borderBottomColor: '#eee',
                    paddingBottom: 16,
                }}
            >
                <TouchableOpacity
                    onPress={handleShowSuggestedFriends}
                    style={{ backgroundColor: '#eee', padding: 8, borderRadius: 16, marginRight: 8 }}
                >
                    <Text style={{ fontWeight: '600' }}>Suggested</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleShowAllFriends}
                    style={{ backgroundColor: '#eee', padding: 8, borderRadius: 16 }}
                >
                    <Text style={{ fontWeight: '600' }}>All friends</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    marginTop: 8,
                }}
            >
                <View>
                    <Text style={{ fontSize: 25, fontWeight: '700' }}>Friend requests</Text>
                    {friendRequests.length <= 0 ? (
                        <View>
                            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 16, fontWeight: '500' }}>
                                Không có yêu cầu kết bạn
                            </Text>
                        </View>
                    ) : (
                        <View>
                            {friendRequests.map((friendRequest, index) => {
                                return <FriendRequest key={index} data={friendRequest} />;
                            })}
                        </View>
                    )}
                </View>
            </View>
        </ScrollView>
    );
}

export default FriendScreen;
