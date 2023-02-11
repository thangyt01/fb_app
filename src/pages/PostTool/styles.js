import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parentContainer: {
        height: '100%',
        position: 'relative',
    },
    container: {
        height: '100%',
        width: '100%',
        marginTop: '9%',
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
    infoWrapper: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    areaWrapper: {
        flexDirection: 'row',
    },
    areaOption: {
        marginRight: 10,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 10,
        borderRadius: 50,
        width: 40,
        height: 40,
    },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    editorWrapper: {
        overflow: 'hidden',
        padding: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
    },
    editor: {
        justifyContent: 'center',
        // height: '100%',
        width: '100%',
    },
    toolOptionsWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
    },
    optionFooter: {
        borderTopColor: '#ddd',
        borderTopWidth: 1,
    },
    optionImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    optionContainer: {
        flex: 1, // the number of columns you want to devide the screen into
        marginHorizontal: 'auto',
    },
    optionRow: {
        flexDirection: 'row',
        height: 45,
    },
    btnOption: {
        flex: 1,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgColorsWrapper: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
    },
    bgColorsScrollView: {
        flexDirection: 'row',
    },
    btnBgColor: {
        height: 30,
        width: 30,
    },
    bgColor: {
        height: 30,
        width: 30,
        marginHorizontal: 5,
    },
    bgImage: {
        resizeMode: 'cover',
        height: 30,
        width: 30,
        borderRadius: 10,
        borderWidth: 1,
    },
    toggleBgColors: {
        padding: 5,
        borderWidth: 0,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    modalContainer: {
        // backgroundColor: '#000000aa',
        backgroundColor: '#99999daa',
        flex: 1,
    },
    modalView: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        // left: 15,
        paddingLeft: 15,
        width: '100%',
    },
    modalText: {
        marginLeft: 10,
    },
})

export {styles}