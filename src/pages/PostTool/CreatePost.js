import { useState } from 'react';
import { useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Dimensions,
    Modal,
    Pressable,
    ScrollView,
    BackHandler,
    Animated
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import InputScrollView from 'react-native-input-scroll-view';
import PostService from '../../services/PostService';
import Base64Encoder from '../../utils/Base64Encoder';
import * as FileSystem from 'expo-file-system';
import store from '../../store';
import { httpStatus } from '../../constants/httpStatus';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';


// icon
import { faGlobeAsia, faPlus, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

//styles
import { styles } from './styles';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import { set, postSelector } from '../../store/reducers/post.reducer';

export default function CreatePost({ navigation }) {
    const [content, setContent] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { images } = useSelector(postSelector)
    const [isLoading, setIsLoading] = useState(false);
    // const [imageResponse, setImageResponse] = useState([]);
    const [videos, setVideos] = useState([]);
    const { user, userToken } = useSelector(authSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                handleBack()
                return true;
            }
        )

        return () => {
            backHandler.remove();
        };
    }, [content, modalVisible])

    const handleBack = () => {
        if (content.length != 0 || images.length != 0) {
            setModalVisible(!modalVisible);
        } else {
            navigation.goBack();
        }
    };

    const convertImageToBase64 = async () => {
        const imgs = [];
        for (let i = 0; i < images.length; i++) {
            const base64 = await FileSystem.readAsStringAsync(images[i].link, { encoding: 'base64' });
            imgs.push(base64);
        }

        return imgs;
    };

    const handlePost = async () => {
        const imgs = await convertImageToBase64();
        setIsLoading(true);
        PostService.create(content, imgs, videos, userToken)
            .then((response) => {
                // console.log(response.status);
                if (parseInt(response.status) !== parseInt(httpStatus.OK)) {
                    setIsLoading(false);
                    Toast.show({
                        type: 'error',
                        text1: 'Đăng bài không thành công',
                        position: 'bottom',
                    });
                } else {
                    setIsLoading(false);
                    Toast.show({
                        type: 'success',
                        text1: 'Đăng bài thành công',
                        position: 'bottom',
                    });
                    navigation.navigate('MainTab', {
                        screen: 'HomeScreen',
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                Toast.show({
                    type: 'error',
                    text1: err.message,
                    position: 'bottom',
                });
            });
    };

    const chooseFile = async () => {
        try {
            const response = await MultipleImagePicker.openPicker({
                // selectedAssets: imageResponse,
                isExportThumbnail: true,
                maxVideo: 1,
                usedCameraButton: true,
                isCrop: true,
                isCropCircle: true,
            });

            // setImageResponse(response)
            dispatch(set(getLinkImage(response)))
        } catch (e) {
            // console.log(e.code, e.message);
            Toast.show({
                type: 'error',
                text1: e.message,
                position: 'bottom',
            });
        }
    };

    // dùng để lấy link image từ object
    const getLinkImage = (response) => {
        var imageList = []

        response.map((value, index) => {
            var link = value?.type === 'video'
                ? value?.thumbnail ?? ''
                : 'file://' + (value?.crop?.cropPath ?? value.realPath)

            var width = value.width
            var height = value.height

            var image = { link: link, width: width, height: height }
            console.log(image)

            imageList.push(image)
        }
        )

        return imageList
    }


    // chuyển sang phần edit image, dùng cho việc sửa/xóa ảnh
    const nextEditImage = (navigation) => {
        navigation.navigate('EditImage')
    }

    // dùng hiển thị trong edit 
    const renderImage = (images, navigation) => {
        if (images === undefined) return;
        var numImages = images.length;

        if (numImages == 1) {
            return (
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => nextEditImage(navigation)}
                    >
                        <Image
                            style={{
                                width: windowWidth,
                                height: (windowWidth / images[0].width) * images[0].height,
                            }}
                            source={{
                                uri: images[0].link
                            }}
                        />
                    </TouchableOpacity>

                </View>
            );
        } else if (numImages == 2) {
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => nextEditImage(navigation)}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>

                            <Image
                                style={{
                                    width: windowWidth / 2,
                                    height: windowWidth,
                                    marginRight: 1,
                                }}
                                source={{
                                    uri: images[0].link
                                }}
                            />
                            <Image
                                style={{
                                    width: windowWidth / 2,
                                    height: windowWidth,
                                    marginLeft: 1,
                                }}
                                source={{
                                    uri: images[1].link,
                                }}
                            />

                        </View>
                    </TouchableOpacity>

                </View>

            );
        } else if (numImages == 3) {
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => nextEditImage(navigation)}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Image
                                    style={{
                                        width: windowWidth / 2,
                                        height: windowWidth + 2,
                                        marginRight: 1,
                                    }}
                                    source={{
                                        uri: images[0].link
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
                                        uri:
                                            images[1].link
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
                                        uri:
                                            images[2].link
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        } else if (numImages == 4) {
            return (
                <View>
                    <TouchableOpacity
                        onPress={() => nextEditImage(navigation)}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Image
                                    style={{
                                        width: windowWidth / 2,
                                        height: windowWidth + 4,
                                        marginRight: 1,
                                    }}
                                    source={{
                                        uri:
                                            images[0].link
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
                                        uri:
                                            images[1].link
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
                                        uri:
                                            images[2].link
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
                                        uri:
                                            images[3].link
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            );
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.parentContainer}
            enabled
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Spinner visible={isLoading} textContent="Loading ..." textStyle={styles.spinnerTextStyle} />
            <SafeAreaView style={styles.container}>
                <View style={styles.navigationBar}>
                    <TouchableOpacity onPress={() => handleBack()} style={styles.naviIcon}>
                        <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                    </TouchableOpacity>
                    <Text style={styles.naviTitle}>Create post</Text>
                    <TouchableOpacity style={styles.btnPost} onPress={() => handlePost()}>
                        <Text style={styles.btnText}>POST</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoWrapper}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                        }}
                    />
                    <View>
                        <Text style={styles.username}>
                            {user.firstName} {user.lastName}
                        </Text>
                        <View style={styles.areaWrapper}>
                            <TouchableOpacity style={styles.areaOption}>
                                <FontAwesomeIcon style={{ marginRight: 5 }} icon={faGlobeAsia} size={14} />
                                <Text>Public</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.areaOption}>
                                <FontAwesomeIcon style={{ marginRight: 5 }} icon={faPlus} size={14} />
                                <Text>Album</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <InputScrollView>
                    <TextInput
                        onChangeText={(newText) => {
                            setContent(newText);
                        }}
                        value={content}
                        placeholder="What's on your mind?"
                        multiline
                        style={{
                            ...styles.editor,
                            fontSize: 26,
                            marginHorizontal: 10,
                            // textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: 10,
                        }}
                    ></TextInput>

                    <View
                        style={{
                            marginBottom: 220,
                        }}
                    >
                        {
                            renderImage(images, navigation)
                        }
                    </View>
                </InputScrollView>

                <Animated.View style={styles.toolOptionsWrapper}>
                    <Animated.View style={styles.optionFooter}>
                        <View style={styles.optionContainer}>
                            <View style={styles.optionRow}>
                                <TouchableOpacity style={styles.btnOption} onPress={() => chooseFile()}>
                                    <FontAwesomeIcon icon={faFileImage} size={25} color={'green'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnOption}>
                                    <FontAwesomeIcon icon={faUserTag} size={25} color={'blue'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnOption}>
                                    <FontAwesomeIcon icon={faFaceLaughBeam} size={25} color={'orange'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnOption}>
                                    <FontAwesomeIcon icon={faLocationDot} size={25} color={'red'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>

                <Modal
                    statusBarTranslucent={true}
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                >
                    <TouchableOpacity
                        style={styles.modalContainer}
                        onPress={() => setModalVisible(false)}
                    >
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 15 }}>Want to finish your post later?</Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>
                                Save it as a draft or you can continue editing it
                            </Text>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', marginVertical: 20 }}
                                onPress={() => setModalVisible(false)}
                            >
                                <FontAwesomeIcon icon={faBookmark} size={25} />
                                <Text style={styles.modalText}> Save as draft{ }</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flexDirection: 'row', marginVertical: 20 }}
                                onPress={() => navigation.goBack()}
                            >
                                <FontAwesomeIcon icon={faTrash} size={25} />
                                <Text style={styles.modalText}> Discard post</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ flexDirection: 'row', marginVertical: 20 }}
                                onPress={() => setModalVisible(false)}
                            >
                                <FontAwesomeIcon icon={faCheck} size={25} color={'blue'} />
                                <Text style={{ ...styles.modalText, color: 'blue' }}> Continue Editing</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const windowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);
