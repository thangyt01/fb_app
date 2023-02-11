import { SafeAreaView, Text, StatusBar, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleComment from '../../components/SingleComment';
import PostCommentServices from '../../services/PostCommentServices';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';
import Spinner from 'react-native-loading-spinner-overlay';

function CommentScreen(props) {
    const [post, setPost] = useState();
    const [comment, setComment] = useState();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const { userToken } = useSelector(authSelector);

    const handleBack = () => {
        navigation.goBack();
    };

    useEffect(() => {
        setPost(props.route.params.post);
        PostCommentServices.getAll(userToken, props.route.params.post._id)
            .then((response) => {
                if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                    // console.log(response.data.data);
                    setComments(response.data.data);
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
                    text1: err.message,
                    position: 'bottom',
                });
            });
    }, []);

    const handleComment = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!comment || comment === '') {
            setIsLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Bạn chưa nhập bình luận',
                position: 'bottom',
            });
        } else {
            PostCommentServices.create(userToken, post._id, comment, null)
                .then((response) => {
                    setIsLoading(false);
                    if (parseInt(response.status) === parseInt(httpStatus.OK)) {
                        setComment('');
                        setComments([...comments, response.data.data]);
                    } else {
                        setIsLoading(false);
                        Toast.show({
                            type: 'error',
                            text1: 'Có lỗi xảy ra',
                            position: 'bottom',
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
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e6e6e6', marginTop: StatusBar.currentHeight }}>
            <Spinner visible={isLoading} textContent="Loading ..." textStyle={{ color: '#FFF' }} />
            <View
                style={{
                    marginTop: 15,
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: 16,
                    borderBottomWidth: 2,
                    borderBottomColor: '#ddd',
                    paddingBottom: 16,
                }}
            >
                <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={handleBack}>
                    <Icon name="chevron-left" size={24} />
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '500' }}>
                        Bài đăng của {post && post.author.firstName}
                    </Text>
                </View>
            </View>
            <ScrollView style={{ flex: 1, padding: 10 }}>
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment} />
                ))}
            </ScrollView>
            <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#ffffff' }}>
                <TextInput
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    style={{
                        flex: 1,
                        height: 40,
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginRight: 10,
                    }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#4287f5',
                        padding: 10,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={handleComment}
                >
                    <Text style={{ color: '#ffffff' }}>Bình luận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default CommentScreen;
