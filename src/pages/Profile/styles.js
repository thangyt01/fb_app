import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Math.round(Dimensions.get('window').height);
const windowWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: "white",
        flex: 1,
    },
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        // borderBottomWidth: 1,
        height: 50,
        marginTop: '9%'
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
    searchBar: {
        borderRadius: 15,
        backgroundColor: '#EEEDED',
        marginVertical: 15,
        marginLeft: 15,
        width: "80%",
        height: 35,
        flexDirection: 'row'
    },
    infoWrapper: {
        backgroundColor: '#fff',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    avatarCoverWrapper: {
        paddingBottom: 90,
        position: 'relative',
    },
    cover: {
        width: '100%',
        height: 225,
    },
    avatarWrapper: {
        // backgroundColor: '#000',
        position: 'absolute',
        borderRadius: 2000,
        left: 25,
        marginTop: 90
    },
    avatar: {
        height: 180,
        width: 180,
        borderRadius: 2000,
        borderColor: '#fff',
        borderWidth: 5
    },
    btnChangeCover: {
        backgroundColor: '#fff',
        position: 'absolute',
        paddingVertical: 9,
        paddingHorizontal: 10,
        borderRadius: 45,
        bottom: 10,
        right: 10

    },
    btnChangeAvatar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 50,
        width: 45,
        height: 45,
        borderWidth: 2.5,
        borderColor: '#fff',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    introWrapper: {
        // alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 40,
        paddingVertical: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 0.5
    },
    name: {
        fontSize: 24,
        fontWeight: '500'
    },
    subName: {
        fontSize: 20,
        fontWeight: '500'
    },
    introTxt: {
        color: 'rgba(0,0,0,0.7)',
        marginTop: 10
    },
    introOptionsWrapper: {
        marginTop: 15,
        flexDirection: 'row'
    },
    btnAddStory: {
        backgroundColor: '#318bfb',
        borderRadius: 5,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 500 / 2,
        marginRight: 13
    },
    btnEditProfile: {
        backgroundColor: '#ddd',
        borderRadius: 5,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth - 500 / 2,
        marginRight: 3
    },
    btnOption: {
        marginLeft: 10,
        borderRadius: 5,
        height: 40,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    introListWrapper: {
        paddingVertical: 10,
        marginLeft: 15
    },
    introLine: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'
    },
    introIcon: {
        width: 30,
        color: "#8C8686",
    },
    introLineText: {
        fontSize: 16,
        fontWeight: '400'
    },
    introHightLight: {
        fontWeight: 'bold',
        fontSize: 16
    },
    btnEditPublicDetail: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9dd0eb',
        width: '100%',
        height: 40,
        borderRadius: 5
    },
    friendsWrapper: {
        paddingVertical: 15
    },
    friendsBar: {
        borderRadius: 5,
        paddingVertical: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnFindFriends: {
        paddingHorizontal: 10
    },
    friendGallery: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    friendItem: {
        width: (windowWidth - 30 - 20) / 3,
        marginBottom: 15
    },
    friendAvatar: {
        width: (windowWidth - 30 - 20) / 3,
        height: (windowWidth - 30 - 20) / 3,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: '#333'
    },
    btnViewAllFriends: {
        width: '100%',
        borderRadius: 5,
        height: 40,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: '#464646aa',
        // backgroundColor: '#99999daa',
        flex: 1,
    },
    modalView: {
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        // left: 15,
        paddingLeft: 15,
        width: '100%',
        borderRadius: 15,
    },
    modalButton: {
        flexDirection: 'row',
        marginBottom: 15,
        marginLeft: 10,
        alignItems: 'center'
    },
    modalIcon: {
        backgroundColor: '#E4E4E4',
        borderRadius: 50,
        padding: 10
    },
    modalText: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
})

export { styles }