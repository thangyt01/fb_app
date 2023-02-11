import { faArrowLeft, faClock, faCropSimple, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    SafeAreaView,
    Image,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard
}
    from "react-native";

import { TextInput } from '@react-native-material/core';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';

export default function PostAvatar({ avatar, onShow }) {
    const [content, setContent] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const convertImageToBase64 = async () => {
        const base64 = await FileSystem.readAsStringAsync(avatar.link, { encoding: 'base64' })

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
                    onPress={onShow}
                    style={styles.naviIcon}
                >
                    <FontAwesomeIcon color="#000" icon={faArrowLeft} size={20} />
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Preview profile picture</Text>
                <TouchableOpacity
                    style={styles.btnPost}
                    onPress={() => handlePost()
                    }>
                    <Text style={styles.btnText}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView
                enableOnAndroid={true}
                enableAutomaticScroll={false}
            >
                <View style={styles.container}>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 15,
                            marginTop: 5,
                            alignItems: 'center'
                        }}>
                        <Text>To:</Text>
                        <FontAwesomeIcon icon={faGlobeAsia} size={16} style={{ marginHorizontal: 5 }} />
                        <Text>Public</Text>
                    </View>

                    <ImageBackground
                        style={styles.avatar}
                        source={{
                            uri: avatar?.link
                        }}
                    >
                    </ImageBackground>

                    <View
                        style={{
                            marginTop: 15,
                            flexDirection: 'row',
                            marginHorizontal: 15
                        }}
                    >
                        <TouchableOpacity style={styles.btnTemporary}>
                            <FontAwesomeIcon size={16} color="black" icon={faClock} />
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#black', marginLeft: 5 }}>
                                Make tempporary
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnAddFrame}>
                            <FontAwesomeIcon size={16} color="black" icon={faCropSimple} />
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'black', marginLeft: 5 }}>
                                Add frame
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        onChangeText={(newText) => setContent(newText)}
                        placeholder="Say something about your profile picture..."
                        value={content}
                        variant="standard"
                        multiline
                        style={{
                            marginHorizontal: 15,
                            marginTop: 15,
                            marginBottom: 15
                        }}
                    >
                    </TextInput>
                </View>

            </KeyboardAwareScrollView>
        </View>

    )
}

const windowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    parentContainer: {
        // height: '100%',
        // position: 'relative',
        flex: 1,
        marginTop: '9%',
        marginBottom: 20
    },
    container: {
        // height: '100%',
        // width: '100%',
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 50,
    },
    naviIcon: {
        padding: 10,
    },
    naviTitle: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    btnPost: {
        backgroundColor: '#1877F2',
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    avatar: {
        width: windowWidth,
        height: 400,
        marginVertical: 15,
    },
    btnTemporary: {
        backgroundColor: '#E4E4E4',
        borderRadius: 5,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginRight: 13
    },
    btnAddFrame: {
        backgroundColor: '#E4E4E4',
        borderRadius: 5,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        marginRight: 13
    }
})

// import React from 'react';
// import {
//     View,
//     KeyboardAvoidingView,
//     TextInput,
//     StyleSheet,
//     Text,
//     Platform,
//     TouchableWithoutFeedback,
//     Button,
//     Keyboard,
// } from 'react-native';

// export default function PostAvatar({ navigation, route }) {
//     return (
//         <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={styles.container}>
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <View style={styles.inner}>
//                     <Text style={styles.header}>Header</Text>
//                     <TextInput placeholder="Username" style={styles.textInput} />
//                     <View style={styles.btnContainer}>
//                         <Button title="Submit" onPress={() => null} />
//                     </View>
//                 </View>
//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     inner: {
//         padding: 24,
//         flex: 1,
//         justifyContent: 'space-around',
//     },
//     header: {
//         fontSize: 36,
//         marginBottom: 48,
//     },
//     textInput: {
//         height: 40,
//         borderColor: '#000000',
//         borderBottomWidth: 1,
//         marginBottom: 36,
//     },
//     btnContainer: {
//         backgroundColor: 'white',
//         marginTop: 12,
//     },
// });