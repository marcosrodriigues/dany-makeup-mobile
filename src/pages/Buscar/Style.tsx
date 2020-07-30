import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    dataContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
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
    
})