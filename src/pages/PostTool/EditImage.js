// component react
import { useState } from "react";
import { useEffect } from "react";
import { SafeAreaView, View, TouchableOpacity, Text, BackHandler, Dimensions, ScrollView, ImageBackground } from "react-native";

//icon
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

// styles 
import { styles } from "./styles";

//redux
import { useDispatch, useSelector } from "react-redux";
import { postSelector, set, remove } from "../../store/reducers/post.reducer";

export default function EditImage({ navigation }) {
    const { images } = useSelector(postSelector)

    const dispatch = useDispatch();

    const handleBack = () => {
        navigation.goBack()
    }

    const handleRemove = (index) => {
        dispatch(remove(index))
    }

    // hiển thị và chọn xóa 1 ảnh nào đó
    const removeImage = (images) => {
        return (
            <ScrollView>
                <View>
                    {
                        images.map((image, index) => {
                            return (
                                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 50 }}>
                                    <ImageBackground
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            flexDirection: 'row',
                                            width: windowWidth,
                                            height: (windowWidth / image.width) * image.height,
                                        }}

                                        source={{
                                            uri: image.link
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{ marginRight: 10, marginTop: 10, opacity: 0.7 }}
                                            onPress={() => handleRemove(index)}
                                        >
                                            <FontAwesomeIcon icon={faX} size={25} color={'white'} />
                                        </TouchableOpacity>
                                    </ImageBackground>

                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )

    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                navigation.goBack();
                return true;
            }
        )

        return () => {
            backHandler.remove();
        };
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={() => handleBack()}
                    style={styles.naviIcon}
                >
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Edit</Text>
                <TouchableOpacity
                    style={styles.btnPost}
                    onPress={() => handleBack()}
                >
                    <Text style={styles.btnText}>Done</Text>
                </TouchableOpacity>
            </View>

            {removeImage(images)}

        </SafeAreaView>
    )
}

const windowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);