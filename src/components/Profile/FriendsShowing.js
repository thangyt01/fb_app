import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity,
    Text,
    Image
} from "react-native";
import { serverUrl } from "../../constants/serverUrl";

export default function FriensShowing({ navigation, friends }) {

    return (
        <View style={styles.friendsWrapper}>
            <View style={{ backgroundColor: "#000", borderRadius: 5, }}>
                <TouchableOpacity
                    activeOpacity={0.8} style={styles.friendsBar}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Friends</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#333' }}>{friends.length} friends</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8} style={styles.btnFindFriends}>
                        <Text style={{ fontSize: 16, color: '#318bfb' }}>
                            Find friends
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={styles.friendGallery}>
                {friends.splice(0, 6).map((friend, index) => (
                    <View key={index} style={styles.friendItem}>
                        <TouchableOpacity
                            activeOpacity={0.8}>
                            <Image
                                style={styles.friendAvatar}
                                source={{
                                    uri: friend.avatar
                                        ? `${serverUrl.HTTP_SERVER_URL}/${friend.avatar}`
                                        : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                                }}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>
                                {friend.firstName} {friend.lastName}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnViewAllFriends}
            >
                <Text style={{ fontSize: 16, fontWeight: '500' }}>See all friends</Text>
            </TouchableOpacity>
        </View>
    )
}

const windowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    friendsWrapper: {
        marginHorizontal: 15,
        marginBottom: 15
    },
    friendsBar: {
        borderRadius: 6,
        paddingVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnFindFriends: {
        paddingHorizontal: 11
    },
    friendGallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    friendItem: {
        width: (windowWidth - 30 - 20) / 3,
        marginBottom: 15
    },
    friendAvatar: {
        width: (windowWidth - 30 - 20) / 3,
        height: (windowWidth - 30 - 20) / 3,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#333'
    },
    btnViewAllFriends: {
        width: '100%',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    }
})