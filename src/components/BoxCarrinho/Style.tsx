import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    boxCarrinho: {
        marginTop: 16,
        paddingBottom: 16,
        width: deviceWidth,
    },
    boxTitle: {
        marginLeft: 8,
        marginBottom: 8,
    },
    title: {
        color: '#d2ae6c',
        fontSize: 24,
    },
    text: {
        color: 'white'
    },
    cartBox: {
        alignItems: 'center',
    },
    produtoBox: {
        backgroundColor: '#d2ae6c',
        flexDirection: 'row',
        width: '98%'
    },
    w20: {
        alignItems: 'center',
        width: '20%'
    },
    w40: {
        width: '40%'
    }
    
});