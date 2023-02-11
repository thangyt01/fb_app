import { styles } from "./styles"
import { serverUrl } from "../../constants/serverUrl"
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Text

} from "react-native"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Spinner from 'react-native-loading-spinner-overlay';
import { useState } from "react"

export default function PostCover({ cover, profile, onShow }) {
    const [isLoading, setIsLoading] = useState(false)

    const convertImageToBase64 = async () => {
        const base64 = await FileSystem.readAsStringAsync(cover.link, { encoding: 'base64' });

        return base64;
    };

    const handlePost = async () => {
        const imgs = await convertImageToBase64();
        setIsLoading(true)
    }

    return (
        <View style={styles.parentContainer}>
            <Spinner visible={isLoading} textContent="Loading ..." />
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    style={styles.naviIcon}
                    onPress={onShow}
                >
                    <FontAwesomeIcon color="#000" icon={faArrowLeft} size={20} />
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Drag to adjust</Text>
                <TouchableOpacity
                    style={styles.btnPost}
                    onPress={() => handlePost()}
                >
                    <Text style={styles.btnText}>SAVE</Text>
                </TouchableOpacity>
            </View>

            <ScrollView bounces={false} >
                <View style={styles.infoWrapper}>
                    <View styles={styles.avatarCoverWrapper}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image
                                style={styles.cover}
                                source={{
                                    uri: cover.link
                                        ? cover.link
                                        : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'
                                }}
                            />
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
                        </View>
                    </View>

                    <View style={styles.introWrapper}>
                        <Text style={styles.name}>
                            {profile.firstName} {profile.lastName}
                        </Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}