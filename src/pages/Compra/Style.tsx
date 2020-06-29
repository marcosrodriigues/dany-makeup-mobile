import { StyleSheet } from "react-native";
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingBottom: 16
    },
    main: {
        width: '100%',
        flexDirection: 'column',
        backgroundColor: '#d2ae6c'
    },
    section: {
        padding: 8
    },
})