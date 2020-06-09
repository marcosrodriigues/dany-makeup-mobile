import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    info: {
        width: '100%',
        paddingTop: 24,
        paddingBottom: 8,
        borderBottomColor: '#d2ae6c',
        borderBottomWidth: 2,
        borderBottomStartRadius: 40,
        borderBottomEndRadius: 40,
        alignItems: 'center'
    },
    infoText: {
        marginTop: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    circle: {
        backgroundColor: '#d2ae6c',
        width: 200,
        height: 200,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 195,
        width: 195,
        borderRadius: 100,
    },
    text: {
        color: '#d2ae6c',
        fontSize: 18,
    },
    main: {
        backgroundColor: '#000000',
        padding: 8,
        width: '100%',
        justifyContent:'center',
    },
    button: {
        height: 64,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',        
        backgroundColor: '#d2ae6c',
        marginBottom: 8
    },
    textMain: {
        paddingLeft: 16,
        width: '60%',
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    inline: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        alignItems: 'center',
        width: '20%'
    },
    border: {
        borderColor: 'red',
        borderWidth: 1,
        borderStyle: 'solid'
    }

})