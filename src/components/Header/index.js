import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
    const marginTop = 0;
    const navigation = useNavigation();
    const handleOpenChatScreen = (e) => {
        e.preventDefault();
        navigation.navigate('ChatScreen');
    };

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            // marginTop: '7%',
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        icon: {
            display: 'flex',
            flexDirection: 'row',
            marginRight: 16,
        },
        facebookLogo: {
            width: 150,
            height: 60,
            marginLeft: 8,
            marginTop: marginTop,
        },
        searchIconWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            marginTop: marginTop + 10,
            borderRadius: 999,
            alignSelf: 'baseline',
            marginRight: 8,
            backgroundColor: '#eee',
        },
        searchIcon: {},
        messengerIconWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            // marginTop: marginTop,
            borderRadius: 999,
            alignSelf: 'baseline',
            backgroundColor: '#eee',
        },
        messengerIcon: {},
    });

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Image style={styles.facebookLogo} source={require('../../../assets/logo/facebook-logo.png')} />
                    <View style={styles.icon}>
                        <TouchableOpacity style={styles.searchIconWrapper}>
                            <FontAwesomeIcon style={styles.searchIcon} icon={faMagnifyingGlass} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.messengerIconWrapper} onPress={handleOpenChatScreen}>
                            <FontAwesomeIcon style={styles.messengerIcon} icon={faFacebookMessenger} size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Header;
