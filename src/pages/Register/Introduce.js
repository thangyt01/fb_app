import { View, Text, TouchableOpacity, Image } from "react-native"
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "./style";

const handleBack = (navigation) => {
    navigation.goBack();
}

const handleNext = (navigation) => {
    navigation.navigate('Name')
}

// giao diện tạo tài khoản
export default function IntroduceScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={() => handleBack(navigation)}
                    style={styles.naviIcon}
                >
                    <FontAwesome5Icon color="#000" name="arrow-left" size={20}></FontAwesome5Icon>
                </TouchableOpacity>
                <Text style={styles.naviTitle}>Create account</Text>
            </View>

            <Image source={require("../../../assets/Blog-post-pana.png")} style={styles.banner} />

            <Text style={styles.contentContainer}>
                <Text style={styles.title}>
                    Join FaceBook
                    {"\n\n"}
                </Text>
                <Text>
                    We'll help you create a new account in a few easy steps
                </Text>
            </Text>

            <TouchableOpacity style={styles.buttonContainer}
                onPress={() => handleNext(navigation)}
            >
                <Text style={styles.buttonText}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
}
