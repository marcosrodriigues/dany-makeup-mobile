import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingBottom: 16
    },
    imageBackground: {
        width: '100%',
        height: 144, 
        alignItems: 'center',
    },
    section: {
        width: '96%',
        backgroundColor: '#d2ae6c',
        alignItems: 'center',
        marginTop: 16,
    },
})