import { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, TouchableWithoutFeedback } from "react-native"
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Interaction from "../components/Interaction";
import { styles } from "./style";

export default function ImageDetail({ navigation, route }) {
    const image = route.params?.image
    const username = route.params?.username
    const post = route.params?.post
    const timeCreate = route.params?.timeCreate
    const [detailDisplay, setDetalDisplay] = useState("flex")

    const onPressHideDetailWrapperHandle = () => {
        if (detailDisplay === "flex") {
            setDetalDisplay("none")
        } else {
            setDetalDisplay("flex")
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => onPressHideDetailWrapperHandle()}
        >
            <View style={styles.postWrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={{
                            uri: image
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
                            <Text style={styles.name}>{username}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Like, Share, Comment */}
                    <Interaction bgColor={"white"} post={post} />
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}
