import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: '#000000',
        justifyContent: 'flex-start'
    },
    icon: {
        color: '#d2ae6c',
        height: 40,
        width: 40,
        backgroundColor: 'rgba(210, 174, 108, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#d2ae6c',
        paddingLeft: 8,
        alignItems: 'center',
        fontWeight: 'bold',
    },

})