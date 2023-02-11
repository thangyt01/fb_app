import { Text, View, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Friend from '../../components/Friend';
import { useState } from 'react';
import { useEffect } from 'react';
import FriendService from '../../services/FriendService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';

function AllFriends({ navigation }) {
    const [friends, setFriends] = useState([]);
    const { userToken } = useSelector(authSelector);

    const handleBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        FriendService.getList(userToken, null)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    setFriends(response.data.data.friends);
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
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleBack}>
                        <Icon size={25} name="chevron-left" />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 16, fontSize: 18, fontWeight: '500' }}>All friends</Text>
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
                    <Text style={{ fontSize: 22, fontWeight: '600' }}>{friends.length} friends</Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#1778F2', fontSize: 18 }}>Sort</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    {friends.map((friend, index) => {
                        return <Friend key={index} data={friend} />;
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AllFriends;
