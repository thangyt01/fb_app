import { ScrollView, View } from 'react-native';
import PostStatus from '../PostStatus';
import SinglePost from '../SinglePost';

function Feeds() {
    return (
        <ScrollView>
            <PostStatus />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </ScrollView>
    );
}

export default Feeds;
