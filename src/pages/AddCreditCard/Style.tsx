import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingBottom: 16,
    },
    loading: {
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: 10,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    form: {
        width: '100%',
        marginTop: 16,
        marginBottom: 16
    },
    fields: {
        width: '100%',
        justifyContent: 'center',
    },
    field: {
        alignSelf: 'center',
        height: 48,
        backgroundColor: 'black',
        borderColor: '#d2ae6c',
        color: '#d2ae6c',
        borderWidth: 1,
        marginBottom: 10,
        fontSize: 18,
        paddingLeft: 16,
        borderRadius: 16,
        width: '100%'
    },
    viewSelect: {
        borderColor: '#d2ae6c',
        borderWidth: 1,
        height: 48,
        width: '100%'
    },
    selectField: {
        color: '#d2ae6c',
    },
    button: {
        height: 48,
        backgroundColor: '#d2ae6c',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textButton: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold'
      },
});