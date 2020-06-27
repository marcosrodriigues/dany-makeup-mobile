import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    productBox: {
        marginTop: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'row',
        width: '98%',
        height: 180
    },
    boxImage: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    infoName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        marginTop: 8,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    boxInfo: {
        width: '60%',
        padding: 8
    },
    value: {
        fontSize: 18
    },
    text: {
        fontSize: 16,
        textAlign: 'left'
    },
});