import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { reset } from '../../store/reducers/post.reducer';

//icon
import FontAweSome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function PostStatus({ navigation }) {
    const dispatch = useDispatch();

    const handleNext = (navigation) => {
        dispatch(reset())
        navigation.navigate('CreatePost')
    }



    const styles = StyleSheet.create({
        container: {
            borderTopColor: '#ddd',
            borderTopWidth: 1,
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            marginTop: 10,
            backgroundColor: '#fff',
        },
        postToolWrapper: {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        postOptionsWrapper: {
            flexDirection: 'row',
            height: 40,
            borderTopColor: '#ddd',
            borderTopWidth: 1,
            alignItems: 'center',
        },
        postOptionItemWrapper: {
            flex: 1,
            height: 40,
            justifyContent: 'center',
        },
        postOptionItem: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        postOptionItemMiddle: {
            borderRightColor: '#ddd',
            borderRightWidth: 1,
            borderLeftColor: '#ddd',
            borderLeftWidth: 1,
        },
        postOptionIcon: {
            marginRight: 5,
        },
        postInputWrapper: {
            borderRadius: 48,
            flex: 1,
            marginLeft: 5,
            marginRight: 5,
        },
        postInput: {
            justifyContent: 'center',
            borderRadius: 48,
            height: 40,
            width: '100%',
            borderColor: '#ddd',
            paddingHorizontal: 10,
            borderWidth: 1,
        },
        userAvatar: {
            width: 40,
            height: 40,
            borderRadius: 50,
        },
        userAvatarWrapper: {},
        postInput: {
            justifyContent: 'center',
            borderRadius: 48,
            height: 40,
            width: "100%",
            borderColor: "#ddd",
            paddingHorizontal: 10,
            borderWidth: 1
        },
    });

    // const photoUri = 'https://cdn-icons-png.flaticon.com/512/147/147142.png';

    return (
        <View style={styles.container}>
            <View style={styles.postToolWrapper}>
                <TouchableOpacity activeOpacity={0.5} style={styles.userAvatarWrapper}>
                    <Image
                        style={styles.userAvatar}
                        source={{
                            uri: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                        }}
                    />
                    {/* <Image source={{ uri: user.avatar_url }} style={styles.userAvatar}></Image> */}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNext(navigation)}
                    style={styles.postInputWrapper}
                >
                    <View style={styles.postInput}>
                        <Text>What's on your mind?</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.postOptionsWrapper}>
                <TouchableOpacity activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={styles.postOptionItem}>
                        <FontAwesomeIcon style={styles.postOptionIcon} icon={faVideo} color="red" size={16} />
                        <Text>Live</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={{ ...styles.postOptionItem, ...styles.postOptionItemMiddle }}>
                        <FontAwesomeIcon style={styles.postOptionIcon} icon={faFileImage} color="green" size={16} />
                        <Text>Photo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.postOptionItemWrapper}>
                    <View style={styles.postOptionItem}>
                        <FontAwesomeIcon style={styles.postOptionIcon} icon={faLocationDot} color="red" size={16} />
                        <Text>Check in</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PostStatus;

