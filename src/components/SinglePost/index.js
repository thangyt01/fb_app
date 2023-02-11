import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Interaction from '../Interaction';
import { serverUrl } from '../../constants/serverUrl';
import images from '../Interaction/Image';
import { showTime } from '../../utils/PostTimeUtil';
import { useEffect, useState } from 'react';

//icon
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import { set } from '../../store/reducers/post.reducer';

import ImageSize from 'react-native-image-size';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';

export default function SinglePost({ navigation, post }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
    const [isLiked, setIsLiked] = useState(false);
    const { user } = useSelector(authSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        if (post.like.includes(user.id)) {
            setIsLiked(true);
        }
    }, []);

    const onPressPostImage = () => {
        navigation.navigate('PostDetail', {
            post: post,
        });
    };

    const getIconButton = () => {
        if (isLiked) {
            return images.like_static_fill;
        } else {
            return images.like_static;
        }
    };

    const nextEditPost = () => {
        var imageList = [];

        post.images.map((value, index) => {
            var link = serverUrl.HTTP_SERVER_URL + '/' + value.fileName;

            ImageSize.getSize(link)
                .then((size) => {
                    setWidth(size.width);
                    setHeight(size.height);

                    console.log('get size', size.width, size.height);
                })
                .catch((error) => console.error(error));

            var image = { link: link, width: width, height: height };
            console.log('sing post', image);
            imageList.push(image);
        });

        dispatch(set(imageList));

        navigation.navigate('EditPost', {
            post: post,
        });
    };

    const showAllImage = (images) => {
        var numImages = images.length;

        if (numImages == 1) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        style={{
                            width: windowWidth,
                            height: windowWidth,
                        }}
                        source={{
                            uri: `${serverUrl.HTTP_SERVER_URL}/${images[0].fileName}`,
                        }}
                    />
                </View>
            );
        } else if (numImages == 2) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image
                        style={{
                            width: windowWidth / 2,
                            height: windowWidth,
                            marginRight: 1,
                        }}
                        source={{
                            uri: `${serverUrl.HTTP_SERVER_URL}/${images[0].fileName}`,
                        }}
                    />
                    <Image
                        style={{
                            width: windowWidth / 2,
                            height: windowWidth,
                            marginLeft: 1,
                        }}
                        source={{
                            uri: `${serverUrl.HTTP_SERVER_URL}/${images[1].fileName}`,
                        }}
                    />
                </View>
            );
        } else if (numImages == 3) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth + 2,
                                marginRight: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[0].fileName}`,
                            }}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth / 2,
                                marginLeft: 1,
                                marginBottom: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[1].fileName}`,
                            }}
                        />
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth / 2,
                                marginLeft: 1,
                                marginTop: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[2].fileName}`,
                            }}
                        />
                    </View>
                </View>
            );
        } else if (numImages == 4) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth + 4,
                                marginRight: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[0].fileName}`,
                            }}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth / 3,
                                marginLeft: 1,
                                marginBottom: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[1].fileName}`,
                            }}
                        />
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth / 3,
                                marginLeft: 1,
                                marginBottom: 1,
                                marginTop: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[2].fileName}`,
                            }}
                        />
                        <Image
                            style={{
                                width: windowWidth / 2,
                                height: windowWidth / 3,
                                marginLeft: 1,
                                marginTop: 1,
                            }}
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${images[3].fileName}`,
                            }}
                        />
                    </View>
                </View>
            );
        }
    };

    return (
        <TouchableOpacity>
            <SafeAreaView style={{ backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, marginTop: 10 }}>
                {/* Avatar and name  */}
                <View
                    style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image
                            style={styles.userAvatar}
                            source={{
                                uri:
                                    post.author.avatar ??
                                    'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                            }}
                        />
                        <View style={{ marginLeft: 8 }}>
                            <Text style={{ fontWeight: '500' }}>
                                {post.author.firstName} {post.author.lastName}
                            </Text>
                            <Text style={{ fontSize: 12 }}>{showTime(post.createdAt)}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <FontAwesome5 name={'ellipsis-h'} size={18} />
                    </TouchableOpacity>
                </View>
                {/* Content  */}
                <View style={{ paddingTop: 8, paddingLeft: 10, paddingRight: 10, paddingBottom: 8 }}>
                    <Text>{post.described}</Text>
                </View>
                {/* Images or Video  */}
                <TouchableOpacity onPress={() => onPressPostImage()}>{showAllImage(post.images)}</TouchableOpacity>

                <View
                    style={{
                        marginRight: 20,
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                        <Image source={images.like_static} style={[styles.imgLikeInBtn]} />
                        <Text>{post.like.length}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginRight: 10, alignItems: 'center' }}>
                        <Icon name="comment-alt" size={20} style={{ marginRight: 6, color: 'black' }} />
                        <Text>{post.countComments}</Text>
                    </View>
                </View>
                {/* Like, Comment Button */}
                <Interaction bgColor={'black'} post={post} />

                <Modal visible={modalVisible} animationType="slide" transparent={true}>
                    <TouchableOpacity
                        style={styles.modalContainer}
                        onPress={() => {
                            setModalVisible(false);
                        }}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 10 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faThumbTack} size={25} transform={{ rotate: 45 }} />
                                    <Text style={styles.modalText}>Pin post</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBookmark} size={20} style={{ marginTop: 10 }} />
                                    <Text style={styles.modalText}>
                                        Save post
                                        <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'normal' }}>
                                            {'\n'}Add this to your saved items
                                        </Text>
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        nextEditPost();
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPen} size={20} />
                                    <Text style={styles.modalText}>Edit post</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMessage} size={20} />
                                    <Text style={styles.modalText}>Who can comment on your post?</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEarthAmericas} size={20} />
                                    <Text style={styles.modalText}>Edit Privacy</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBoxArchive} size={20} />
                                    <Text style={styles.modalText}>Move to archive</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} size={20} style={{ marginTop: 10 }} />
                                    <Text style={styles.modalText}>
                                        Move to trash
                                        <Text style={{ fontSize: 13, color: 'grey', fontWeight: 'normal' }}>
                                            {'\n'}Items in your trash are deleted after 30 days
                                        </Text>
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBellSlash} size={20} />
                                    <Text style={styles.modalText}>Turn off notification for this post</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flexDirection: 'row', marginVertical: 10, marginLeft: 15 }}
                                    onPress={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCopy} size={20} />
                                    <Text style={styles.modalText}>Copy link</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        </TouchableOpacity>
    );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    imgLikeInBtn: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
    modalContainer: {
        backgroundColor: '#191922aa',
        flex: 1,
    },
    modalView: {
        backgroundColor: '#e5e5e6',
        position: 'absolute',
        bottom: 0,
        // left: 15,
        width: '100%',
        borderRadius: 15,
    },
    modalContent: {
        backgroundColor: '#ffffff',
        position: 'relative',
        marginHorizontal: 10,
        marginVertical: 22,
        borderRadius: 5,
    },
    modalText: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
});
