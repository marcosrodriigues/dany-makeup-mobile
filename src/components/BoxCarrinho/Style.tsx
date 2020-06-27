import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    boxCarrinho: {
        marginTop: 16,
        paddingBottom: 16,
        width: deviceWidth,
    },
    section: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    boxTitle: {
        marginLeft: 8,
        marginBottom: 8,
        fontSize: 16,
    },
    title: {
        color: '#d2ae6c',
        fontSize: 24,
    },
    
    cartBox: {
        alignItems: 'center',
        marginBottom: 16,
    },
    box: {
        marginBottom: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'column',
        width: '98%',
    },
    
    button: {
        height: 48,
        backgroundColor: 'black',
        borderColor: '#d2ae6c',
        borderWidth: 2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center'
    },
    textButton: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    empty: {
        fontSize: 24,
        textAlign: 'center',
        margin: 16
    },
    boxW60: {
        width: '60%',
        alignSelf: 'center',
        marginBottom: 16
    }
});