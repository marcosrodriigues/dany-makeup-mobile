import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#000000',
    },
    vIcon: {
        color: '#d2ae6c',
        backgroundColor: 'rgba(210, 174, 108, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%'
    },
    icon: {
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    vText: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '80%'
    },
    textButton: {
        fontWeight: 'bold',
        color: '#d2ae6c',
        width: '100%',
        textAlign: 'center'
    }

})