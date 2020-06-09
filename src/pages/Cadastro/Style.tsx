import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0,
    },
    content: {
        backgroundColor: '#d2ae6c',
        width: '96%',
        borderRadius: 5,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        marginBottom: 16
    },
    section: {
        
    },
    textOu: {
        color: "black",
        marginTop: 5,
        marginBottom: 5,
        fontSize: 16,
    },
    media: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    fields: {
        width: '90%',
        alignSelf: 'center'
    },
    text: {
        color: 'white'
    },
    border: {
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: 'solid'
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
        width: '100%',
        marginTop: 16,
    },
    textButton: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
})