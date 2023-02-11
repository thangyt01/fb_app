import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    postWrapper: {
        position: 'relative',
        backgroundColor: 'black',
        height: "100%"
    },
    imageWrapper: {
        marginTop: 30
    },
    image: {
        backgroundColor: "rgba(0,0,0,0)",
        height: "100%",
    },
    optionIconWrapper: {
        position: 'absolute',
        right: 10,
        top: 40,
        zIndex: 999999,
    },
    cycleWrapper: {
        padding: 10
    },
    postContentWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        left: 0,
        width: "100%",
        // zIndex: 99,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    name: {
        fontWeight: 'bold',
        color: '#fff'
    },
    content: {
        color: '#fff'
    },
    time: {
        marginTop: 5,
        color: '#fff',
        textTransform: 'uppercase',
        opacity: 0.5
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
})

export { styles }