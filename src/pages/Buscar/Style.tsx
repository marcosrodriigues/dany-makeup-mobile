import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    dataContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
    },
    searchScrollView: {
        justifyContent: 'flex-start',
        marginTop: 8 ,
        paddingBottom: 24,
    },
    title: {
        fontSize: 20,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#d2ae6c'
    },
    box: {
        width: '100%',
        backgroundColor: '#d2ae6c',
        height: 75,
        marginTop: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBox: {
        fontSize: 20,
    },
    btn: {
        width: '90%',
        height: 60,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        backgroundColor: 'black',
        borderColor: '#d2ae6c',
        borderWidth: 1,
        borderRadius: 10,
    },
    txtBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d2ae6c'
    }
})