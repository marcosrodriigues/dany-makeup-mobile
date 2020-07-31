import { StyleSheet } from "react-native";

export default StyleSheet.create({
    addressList: {
        borderColor: 'black',
        borderWidth: 1
    },
    selected: {
        borderWidth: 2,
        borderColor: 'green'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
    },
    noInfo: {
        marginTop: 16,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'black',
        height: 60,
        padding: 8,
        margin: 8,
    },
    vIcon: {
        color: '#d2ae6c',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        borderRadius: 10,
    },
    icon: {
        fontSize: 24,
        color: '#d2ae6c',
    },
    vText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d2ae6c',
    },
})