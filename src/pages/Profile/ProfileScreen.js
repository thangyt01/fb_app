import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    Modal
}
    from "react-native";

import { useSelector } from "react-redux";
import { authSelector } from "../../store/reducers/auth.reducer";

//styles
import { styles } from "./styles";

//icon
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBorderAll, faCamera, faCropSimple, faFileImage, faHeart, faIdBadge, faImage, faUpload } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import FriendService from "../../services/FriendService";
import { httpStatus } from "../../constants/httpStatus";
import Toast from 'react-native-toast-message';
import UserService from "../../services/UserService";
import FriensShowing from "../../components/Profile/FriendsShowing";
import { serverUrl } from "../../constants/serverUrl";
import PostStatus from "../../components/PostStatus";
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import PostAvatar from "./PostAvatar";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import PostCover from "./PostCover";


export default function ProfileScreen({ navigation }) {
    const { user, userToken } = useSelector(authSelector)
    const [friends, setFriends] = useState([]);
    const [profile, setProfile] = useState([])
    const [modalAvatar, setModalAvatar] = useState(false)
    const [modalCover, setModalCover] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const [cover, setCover] = useState(null)
    const [state, setState] = useState(1)

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

    useEffect(() => {
        UserService.show(userToken, user.id)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    setProfile(response.data.data)
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

    const chooseFile = async (type) => {
        try {
            const response = await MultipleImagePicker.openPicker({
                mediaType: 'image',
                isExportThumbnail: true,
                singleSelectedMode: true,
                usedCameraButton: true,
            });

            if (type == 'avatar') {
                setAvatar(getLinkImage(response))
                console.log(avatar)
                setState(2)
            }
            if (type == 'cover') {
                setCover(getLinkImage(response))
                console.log(cover)
                setState(3)
            }

        } catch (e) {
            Toast.show({
                type: 'error',
                text1: e.message,
                position: 'bottom',
            });
        }
    };

    // dùng để lấy link image từ object
    const getLinkImage = (response) => {
        var link = response?.type === 'video'
            ? response?.thumbnail ?? ''
            : 'file://' + (response?.crop?.cropPath ?? response.realPath)

        var width = response.width
        var height = response.height

        var image = { link: link, width: width, height: height }

        return image
    }

    const onPressChangeAvatar = () => {
        setModalAvatar(false)
        chooseFile("avatar")
    }

    const onPressChangeCover = () => {
        setModalCover(false)
        chooseFile("cover")
    }

    const render = () => {
        if (state === 1) {
            return (
                <View style={styles.parentContainer}>
                    <View style={styles.navigationBar}>
                        <TouchableOpacity
                            style={styles.naviIcon}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.searchBar}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    marginLeft: 10,
                                }}
                            >
                                <FontAwesome5Icon size={20} name="search" />
                                <Text
                                    style={{
                                        marginLeft: 5
                                    }}>
                                    Search
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView bounces={false} >
                        <View style={styles.infoWrapper}>
                            <View styles={styles.avatarCoverWrapper}>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <Image
                                        style={styles.cover}
                                        source={{
                                            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btnChangeCover}
                                    onPress={() => setModalCover(true)}
                                >
                                    <FontAwesomeIcon size={18} icon={faCamera} />
                                </TouchableOpacity>
                                <View style={styles.avatarWrapper}>
                                    <TouchableOpacity activeOpacity={0.9}>
                                        <Image
                                            style={styles.avatar}
                                            source={{
                                                uri: profile.avatar
                                                    ? `${serverUrl.HTTP_SERVER_URL}/${profile.avatar}`
                                                    : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.btnChangeAvatar}
                                        onPress={() => setModalAvatar(true)}
                                    >
                                        <FontAwesomeIcon size={18} icon={faCamera} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.introWrapper}>
                                <Text style={styles.name}>
                                    {user.firstName} {user.lastName}
                                </Text>

                                <View style={styles.introOptionsWrapper}>
                                    <TouchableOpacity activeOpacity={0.8} style={styles.btnAddStory}>
                                        <FontAwesome5Icon size={16} color="#fff" name="plus-circle" />
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', marginLeft: 5 }}>
                                            Add to story
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.8} style={styles.btnEditProfile}>
                                        <FontAwesome5Icon size={16} color="black" name="pen" />
                                        <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 5 }}>
                                            Edit profile
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.8} style={styles.btnOption}>
                                        <FontAwesome5Icon size={20} color="#000" name="ellipsis-h" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.introListWrapper}>
                                <View style={styles.introLine}>
                                    <FontAwesome5Icon size={20} style={styles.introIcon} name="briefcase" />
                                    <Text style={styles.introLineText}>
                                        Work at <Text style={styles.introHightLight}>Ha Noi</Text>
                                    </Text>
                                </View>
                                <View style={styles.introLine}>
                                    <FontAwesome5Icon size={20} style={styles.introIcon} name="home" />
                                    <Text style={styles.introLineText}>
                                        Live in <Text style={styles.introHightLight}>Ha Noi</Text>
                                    </Text>
                                </View>
                                <View style={styles.introLine}>
                                    <FontAwesome5Icon size={20} style={styles.introIcon} name="map-marker-alt" />
                                    <Text style={styles.introLineText}>
                                        From <Text style={styles.introHightLight}>Ha Noi</Text>
                                    </Text>
                                </View>
                                <View style={styles.introLine}>
                                    <FontAwesomeIcon size={20} icon={faHeart} style={styles.introIcon} />
                                    <Text style={{ ...styles.introLineText, marginLeft: 10 }}>
                                        Single
                                    </Text>
                                </View>
                                <View style={styles.introLine}>
                                    <FontAwesome5Icon size={20} style={styles.introIcon} name="ellipsis-h" />
                                    <TouchableOpacity>
                                        <Text style={styles.introLineText}>
                                            See your About info
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 20, marginVertical: 20, borderBottomWidth: 0.5, borderBottomColor: '#ddd' }}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.btnEditPublicDetail}>
                                    <Text style={{ color: '#318bfb', fontSize: 16, fontWeight: '500' }}>Edit public details</Text>
                                </TouchableOpacity>
                            </View>

                            <FriensShowing navigation={navigation} friends={friends} />
                        </View>

                        {/* vách ngăn */}
                        <View style={{ paddingVertical: 5, backgroundColor: 'gray' }}>
                            {/* <Text > </Text> */}
                        </View>

                        <View style={{ marginHorizontal: 15 }}>
                            <PostStatus navigation={navigation} />
                        </View>

                        {/* vách ngăn */}
                        <View style={{ paddingVertical: 5, backgroundColor: 'gray' }}>
                            {/* <Text > </Text> */}
                        </View>

                    </ScrollView>

                    {/* Modal change avatar*/}
                    <Modal
                        statusBarTranslucent={true}
                        visible={modalAvatar}
                        animationType="slide"
                        transparent={true}
                    >
                        <TouchableOpacity
                            style={styles.modalContainer}
                            onPress={() => setModalAvatar(false)}
                        >
                            <View style={styles.modalView}>

                                <TouchableOpacity
                                    style={{ ...styles.modalButton, marginTop: 15 }}
                                    onPress={() => setModalAvatar(false)}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faCropSimple} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>Add frame</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => onPressChangeAvatar()}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faFileImage} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>Select profile picture</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => onPressChangeAvatar()}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faIdBadge} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>See profile picture</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Modal>

                    {/* Modal change covert*/}
                    <Modal
                        statusBarTranslucent={true}
                        visible={modalCover}
                        animationType="slide"
                        transparent={true}
                    >
                        <TouchableOpacity
                            style={styles.modalContainer}
                            onPress={() => setModalCover(false)}
                        >
                            <View style={styles.modalView}>

                                <TouchableOpacity
                                    style={{ ...styles.modalButton, marginTop: 15 }}
                                    onPress={() => setModalCover(false)}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faImage} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>View profile cover</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => onPressChangeCover()}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faUpload} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>Upload photo</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => onPressChangeCover()}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faFacebook} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>Select photo on Facebook</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => onPressChangeCover()}
                                >
                                    <View style={styles.modalIcon}>
                                        <FontAwesomeIcon
                                            icon={faBorderAll} size={20}
                                        />
                                    </View>

                                    <Text style={styles.modalText}>Create cover collage</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            )
        }
        else if (state === 2) {
            return (
                <PostAvatar avatar={avatar} onShow={() => setState(1)} />
            )
        }
        else if (state === 3) {
            return (
                <PostCover cover={cover} profile={profile} onShow={() => setState(1)} />
            )
        }

    }

    return (


        render()


    )
}