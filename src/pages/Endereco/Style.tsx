import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        width
        
    },
    scrollView: {
        width: '98%',
    },
    card: {
        height: 100,
        backgroundColor: '#d2ae6c',
        borderRadius: 10,
        marginTop: 16,
        width,
        justifyContent: 'center',
    },
    noAddressText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#d2ae6c',
        height: 60,
        padding: 8,
        margin: 8,
    },
    vIcon: {
        color: '#d2ae6c',
        backgroundColor: 'rgba(210, 174, 108, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        borderRadius: 10,
    },
    icon: {
        fontSize: 24,
    },
    vText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    }
});