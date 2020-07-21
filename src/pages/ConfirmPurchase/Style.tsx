import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%'
    },
    top: {
        width: '100%',
    },
    header: {
        paddingBottom: 16,
    },
    main: {
        width: '100%',
        backgroundColor: '#d2ae6c',
    },
    footer: {
        alignContent: 'flex-end',
    },
    section: {
        padding: 8
    },
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'black',
        height: 60,
        padding: 8,
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d2ae6c',
        borderWidth: 1,
    },
    btnText: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold',

    },
})