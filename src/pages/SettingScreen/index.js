import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSelector, logout } from '../../store/reducers/auth.reducer';
import { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

function SettingScreen({ navigation }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useSelector(authSelector);

    const handleLogout = async () => {
        setIsLoading(true);
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('token');
        dispatch(logout());
        setIsLoading(false);
        navigation.navigate('Login');
    };

    return (
        <ScrollView
            style={{
                paddingLeft: 16,
                paddingRight: 16,
            }}
        >
            <Spinner visible={isLoading} textContent="Loading ..." textStyle={styles.spinnerTextStyle} />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: '800' }}>Menu</Text>
                <TouchableOpacity style={{ padding: 8, backgroundColor: '#eee', borderRadius: 999 }}>
                    <Icon name="search" size={25} />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    marginTop: 20,
                }}
            >
                <TouchableOpacity
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        style={{
                            marginRight: 10,
                            borderRadius: 50,
                            width: 50,
                            height: 50,
                        }}
                        source={{
                            uri: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Profile")
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '600',
                            }}
                        >
                            {user.firstName} {user.lastName}
                        </Text>
                        <Text style={{ color: '#888', fontWeight: '500' }}>Xem trang cá nhân của bạn</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 15,
                            marginRight: 4,
                        }}
                    >
                        <Image source={require('../../../assets/icons/friend.png')} />
                        <Text>Tìm kiếm bạn bè</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionLeft}>
                        <Image source={require('../../../assets/icons/history.png')} />
                        <Text>Kỷ niệm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionLeft}>
                        <Image source={require('../../../assets/icons/bookmark.png')} />
                        <Text>Đã lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionLeft}>
                        <Image source={require('../../../assets/icons/heart.png')} />
                        <Text>Hẹn hò</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionLeft}>
                        <Image source={require('../../../assets/icons/controller.png')} />
                        <Text>Chơi game</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 15,
                            marginLeft: 4,
                        }}
                    >
                        <Image source={require('../../../assets/icons/group.png')} />
                        <Text>Nhóm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionRight}>
                        <Image source={require('../../../assets/icons/video.png')} />
                        <Text>Video trên Watch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionRight}>
                        <Image source={require('../../../assets/icons/article.png')} />
                        <Text>Trang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionRight}>
                        <Image source={require('../../../assets/icons/calendar.png')} />
                        <Text>Sự kiện</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionRight}>
                        <Image source={require('../../../assets/icons/job.png')} />
                        <Text>Việc làm</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ marginTop: 25 }}>
                <TouchableOpacity style={styles.functionBottom}>
                    <View style={styles.insideFunctionBottom}>
                        <Image source={require('../../../assets/icons/more-options.png')} />
                        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '500' }}>Xem thêm</Text>
                    </View>
                    <Icon name="chevron-down" size={20} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.functionBottom}>
                    <View style={styles.insideFunctionBottom}>
                        <Image source={require('../../../assets/icons/question-mark.png')} />
                        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '500' }}>Trợ giúp & Hỗ trợ</Text>
                    </View>
                    <Icon name="chevron-down" size={20} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.functionBottom}>
                    <View style={styles.insideFunctionBottom}>
                        <Image source={require('../../../assets/icons/gear.png')} />
                        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '500' }}>Cài đặt & quyền riêng tư</Text>
                    </View>
                    <Icon name="chevron-down" size={20} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.functionBottom} onPress={handleLogout}>
                    <View style={styles.insideFunctionBottom}>
                        <Image source={require('../../../assets/icons/logout.png')} />
                        <Text style={{ marginLeft: 8, fontSize: 16, fontWeight: '500' }}>Đăng xuất</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    functionLeft: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginRight: 4,
        marginTop: 8,
    },
    functionRight: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 15,
        marginLeft: 4,
        marginTop: 8,
    },
    functionBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 14,
        borderRadius: 10,
        marginBottom: 16,
    },
    insideFunctionBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
});

export default SettingScreen;
