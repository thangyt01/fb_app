import { Text, View, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SuggestedFriend from '../../components/SuggestedFriend';
import { useState } from 'react';
import { useEffect } from 'react';
import FriendService from '../../services/FriendService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';

function SuggestedFriends({ navigation }) {
    const [suggestedFriends, setSuggestedFriends] = useState([]);
    const [countFriends, setCountFriends] = useState(0);

    const { userToken } = useSelector(authSelector);

    useEffect(() => {
        FriendService.getSuggested(userToken)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    // console.log(response.data.data);
                    setSuggestedFriends(response.data.data.listSuggested);
                    setCountFriends(response.data.data.count);
                } else {
                    Toast.show({
                        type: 'error',
                        text1: 'Có lỗi xảy ra 1',
                        position: 'bottom',
                    });
                }
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: 'Có lỗi xảy ra 2',
                    position: 'bottom',
                });
            });
    }, []);

    const handleBack = () => {
        navigation.goBack();
    };

    if (suggestedFriends.length <= 0) {
        return (
            <SafeAreaView>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: StatusBar.currentHeight,
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 2,
                        paddingTop: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingBottom: 8,
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity onPress={handleBack}>
                            <Icon size={25} name="chevron-left" />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: '500' }}>Suggested friends</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="search" size={25} />
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 10,
                        fontWeight: '500',
                        fontSize: 16,
                    }}
                >
                    Không có gợi ý kết bạn
                </Text>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView>
                {/* Header  */}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: StatusBar.currentHeight,
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 2,
                        paddingTop: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingBottom: 8,
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity onPress={handleBack}>
                            <Icon size={25} name="chevron-left" />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: '500' }}>Suggested friends</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="search" size={25} />
                    </TouchableOpacity>
                </View>

                <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 8,
                        }}
                    >
                        <Text style={{ fontSize: 22, fontWeight: '600' }}>{countFriends} friends</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#1778F2', fontSize: 18 }}>Sort</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {suggestedFriends.map((suggestedFriend, index) => {
                            return <SuggestedFriend key={index} data={suggestedFriend} />;
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default SuggestedFriends;
