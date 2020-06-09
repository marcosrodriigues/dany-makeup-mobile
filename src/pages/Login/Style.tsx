import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingBottom: 16
    },
    header: {
        flex: 1,
    },
    content: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d2ae6c',
        borderRadius: 16,
        paddingBottom: 16
    },
    socialMedia: {
        height: 60,
        alignItems: 'center',
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'blue',
        marginTop: 10,
    },
    textOu: {
        color: "black",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 16,
    },
    fields: {
        width: '90%',
        justifyContent: 'center',
    },
    field: {
        height: 48,
        backgroundColor: 'black',
        borderColor: 'white',
        color: '#d2ae6c',
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 18,
        paddingLeft: 16,
        borderRadius: 16,
        width: '100%'
    },
    button: {
        height: 48,
        backgroundColor: 'black',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textButton: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    white: {
        color: 'white'
    }
})