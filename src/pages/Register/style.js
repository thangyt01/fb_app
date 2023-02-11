import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#fff'
        marginTop: '10%',
    },
    buttonContainer: {
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35,
        borderRadius: 8,
        marginVertical: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 18,
    },
    contentContainer: {
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 35,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    banner: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        resizeMode: 'contain',
    },
    inputContainer: {
        flexDirection: 'row',
        marginHorizontal: 35,
    },
    inputText: {
        flex: 1,
    },
    buttonAnotherContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35,
        borderRadius: 8,
        marginVertical: 20,
    },
    buttonAnotherText: {
        color: '#1877F2',
        fontSize: 13,
    },
    dateInput: {
        marginHorizontal: 35,
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
    spinnerTextStyle: {
        color: '#FFF',
    },
});

export { styles };
