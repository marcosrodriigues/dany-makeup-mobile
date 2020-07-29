import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        height: '100%'
    },
    header: {
        height: '10%',
        width: '100%',
        paddingBottom: 16,
    },
    content: {
        backgroundColor: '#d2ae6c',
        height: '90%',
        width: '100%',
        margin: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmed: {
        margin: 36,
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    img: {
    },
    info: {
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    btnOrder: {
        width: '100%'
    },
    btn: {
        height: 48,
        backgroundColor: 'black',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    btnText: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
})