import { Animated, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import images from './Image';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import PostLikeService from '../../services/PostLikeService';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Interaction({ bgColor, post }) {
    const [isLiked, setIsLiked] = useState(false);
    const colorText = bgColor;
    const { userToken, user } = useSelector(authSelector);
    const navigation = useNavigation();

    useEffect(() => {
        if (post.like.includes(user.id)) {
            setIsLiked(true);
        }
    }, []);

    const getIconButton = () => {
        if (isLiked) {
            return images.like_static_fill;
        } else {
            return images.like_static;
        }
    };

    const getColorTextBtn = () => {
        if (isLiked) {
            return '#0000cc';
        } else {
            return colorText;
        }
    };

    const handleLike = (e) => {
        console.log('like');
        e.preventDefault();
        setIsLiked(!isLiked);
        PostLikeService.action(userToken, post._id)
            .then((response) => {
                if (parseInt(response.status) !== parseInt(httpStatus.OK)) {
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
                    text1: err.message,
                    position: 'bottom',
                });
            });
    };

    const handleOpenComment = (post) => {
        navigation.navigate('CommentScreen', {
            post: post,
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.viewBtn} onPress={handleLike}>
                <Image source={getIconButton()} style={[styles.imgLikeInBtn]} />
                <Text
                    style={{
                        ...styles.textBtn,
                        color: getColorTextBtn(),
                    }}
                >
                    Like
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.viewBtn}
                onPress={(e) => {
                    e.preventDefault();
                    handleOpenComment(post);
                }}
            >
                <Icon name="comment-alt" size={20} style={{ marginRight: 6, color: colorText }} />
                <Text style={{ color: colorText }}>Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewBtn}>
                <Icon name="share-square" size={20} style={{ marginRight: 6, color: colorText }} />
                <Text style={{ color: colorText }}>Share</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
    },
    viewBtn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    imgLikeInBtn: {
        width: 25,
        height: 25,
        marginRight: 6,
    },
    textBtn: {
        color: 'black',
        fontSize: 14,
    },
});
