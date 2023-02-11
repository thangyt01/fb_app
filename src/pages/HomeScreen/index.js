import { FlatList, RefreshControl, ScrollView, Text, View } from 'react-native';
import PostStatus from '../../components/PostStatus';
import SinglePost from '../../components/SinglePost';
import { useState } from 'react';
import { useEffect } from 'react';
import PostService from '../../services/PostService';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/reducers/auth.reducer';
import Toast from 'react-native-toast-message';
import { httpStatus } from '../../constants/httpStatus';
import { FacebookLoader } from 'react-native-easy-content-loader';

function HomeScreen({ navigation }) {
    const [posts, setPosts] = useState([]);
    const { userToken } = useSelector(authSelector);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLoadMore = () => {
        setLoading(true);

        PostService.getAll(userToken, posts)
            .then((response) => {
                if (parseInt(response.status) !== parseInt(httpStatus.OK)) {
                    Toast.show({
                        type: 'error',
                        text1: 'Có lỗi xảy ra',
                        position: 'bottom',
                    });
                } else {
                    setPosts([...posts, ...response.data.data]);
                }
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err.message,
                    position: 'bottom',
                });
            });

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const onRefresh = () => {
        setRefreshing(true);

        PostService.getAll(userToken, [])
            .then((response) => {
                if (parseInt(response.status) !== parseInt(httpStatus.OK)) {
                    Toast.show({
                        type: 'error',
                        text1: 'Có lỗi xảy ra',
                        position: 'bottom',
                    });
                } else {
                    setPosts(response.data.data);
                }
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err.message,
                    position: 'bottom',
                });
            });

        setTimeout(() => {
            // setPosts([...data, ...Array.from({ length: 10 }, (_, i) => i)]);
            setRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            PostService.getAll(userToken, [])
                .then((response) => {
                    if (parseInt(response.status) !== parseInt(httpStatus.OK)) {
                        Toast.show({
                            type: 'error',
                            text1: 'Có lỗi xảy ra',
                            position: 'bottom',
                        });
                    } else {
                        setPosts(response.data.data);
                    }
                })
                .catch((err) => {
                    Toast.show({
                        type: 'error',
                        text1: err.message,
                        position: 'bottom',
                    });
                });
        });
        return unsubscribe;
    }, [navigation]);

    if (posts.length <= 0) {
        return (
            <FlatList
                data={[
                    { key: 'PostStatus', component: <PostStatus navigation={navigation} /> },
                    { key: 'Loader1', component: <FacebookLoader active /> },
                    { key: 'Loader2', component: <FacebookLoader active /> },
                    { key: 'Loader3', component: <FacebookLoader active /> },
                    { key: 'Loader4', component: <FacebookLoader active /> },
                ]}
                renderItem={({ item }) => item.component}
                keyExtractor={(item) => item.key}
            />
        );
    } else {
        return (
            // <FlatList>
            //     <PostStatus navigation={navigation} />
            //     {posts.map((value, index) => (
            //         <SinglePost key={index} navigation={navigation} post={value} />
            //     ))}
            // </FlatList>
            <FlatList
                data={posts}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    loading && (
                        <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'gray' }}>Loading...</Text>
                        </View>
                    )
                }
                renderItem={({ item, index }) => {
                    return (
                        <>
                            {index === 0 && <PostStatus navigation={navigation} />}
                            <SinglePost key={index} navigation={navigation} post={item} />
                        </>
                    );
                }}
            />
        );
    }
}

export default HomeScreen;
