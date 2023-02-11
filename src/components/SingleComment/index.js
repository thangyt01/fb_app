import { Image, Text, View } from 'react-native';
import { serverUrl } from '../../constants/serverUrl';

function SingleComment({ comment }) {
    return (
        <View
            style={{
                marginVertical: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <View style={{ marginRight: 15 }}>
                <Image
                    style={{
                        width: 55,
                        height: 55,
                        borderRadius: 999,
                    }}
                    source={{
                        uri: comment.user.avatar
                            ? `${serverUrl.HTTP_SERVER_URL}/${comment.user.avatar.fileName}`
                            : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
                    }}
                />
            </View>
            <View style={{ backgroundColor: '#eee', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 15 }}>
                <Text style={{ fontWeight: '500', fontSize: 16, marginBottom: 5 }}>
                    {comment.user.firstName} {comment.user.lastName}
                </Text>
                <Text>{comment.content}</Text>
            </View>
        </View>
    );
}

export default SingleComment;
