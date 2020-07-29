import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
        width
    },
    content: {
        margin: 8,
        width: '100%',
    },
    section: {
        padding: 8
    },
    info: {
        width: '100%',
        backgroundColor: '#d2ae6c',
    },
})