import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Interaction from '../components/Interaction';
import { styles } from './style';
import { serverUrl } from '../constants/serverUrl';

export default function PostDetail({ navigation, route }) {
    const [detailDisplay, setDetalDisplay] = useState('flex');
    const post = route.params?.post;
    const numImages = post.images.length;

    const onPressHideDetailWrapperHandle = () => {
        if (detailDisplay === 'flex') {
            setDetalDisplay('none');
        } else {
            setDetalDisplay('flex');
        }
    };

    const onPressImageDetail = (image) => {
        navigation.navigate('ImageDetail', {
            image: image,
            username: `${post.author.firstName} ${post.author.lastName}`,
            post: post
        });
    };

    const renderPostWithOneImage = () => {
        return (
            <TouchableWithoutFeedback onPress={() => onPressHideDetailWrapperHandle()}>
                <View style={styles.postWrapper}>
                    <View style={styles.imageWrapper}>
                        <Image
                            style={styles.image}
                            resizeMode="contain"
                            source={{
                                uri: `${serverUrl.HTTP_SERVER_URL}/${post.images[0].fileName}`,
                            }}
                        />
                    </View>

                    <View style={{ ...styles.optionIconWrapper, display: detailDisplay }}>
                        <TouchableOpacity style={styles.cycleWrapper}>
                            <FontAwesome5Icon name="ellipsis-v" color="#fff" size={20}></FontAwesome5Icon>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.postContentWrapper, display: detailDisplay }}>
                        <View>
                            <TouchableOpacity>
                                <Text style={styles.name}>
                                    {post.author.firstName} {post.author.lastName}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.content}>{post.described}</Text>
                        </View>
                        {/* Like, Share, Comment */}
                        <Interaction bgColor={'white'} post={post} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const renderPostWithManyImage = () => {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white', paddingTop: 10, paddingBottom: 10, marginTop: 40 }}>
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
                                <Text style={{ fontSize: 12 }}>Second ago</Text>
                            </View>
                        </View>
                        <FontAwesome5 name={'ellipsis-h'} size={18} />
                    </View>
                    {/* Content  */}
                    <View style={{ paddingTop: 8, paddingLeft: 10, paddingRight: 10, paddingBottom: 8 }}>
                        <Text>{post.described}</Text>
                    </View>
                    {/* Like, Comment Button */}
                    <Interaction bgColor={'black'} post={post} />

                    {post.images.map((image, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    onPressImageDetail(`${serverUrl.HTTP_SERVER_URL}/${image.fileName}`);
                                }}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                    <Image
                                        style={{
                                            width: screenWidth,
                                            height: screenWidth,
                                        }}
                                        source={{
                                            uri: `${serverUrl.HTTP_SERVER_URL}/${image.fileName}`,
                                        }}
                                    />
                                </View>
                                <Interaction bgColor={'black'} post={post} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        );
    };

    const renderPostDetail = () => {
        if (numImages > 1) {
            return renderPostWithManyImage();
        } else {
            return renderPostWithOneImage();
        }
    };

    return <View>{renderPostDetail()}</View>;
}

const screenWidth = Math.round(Dimensions.get('window').width);
