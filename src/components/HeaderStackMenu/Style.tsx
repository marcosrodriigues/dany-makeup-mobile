import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 1,
        width: '94%',
        maxHeight: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        height: '100%'
    },
    icon: {
        fontSize: 16,
        color: '#d2ae6c',
    },
    section: {
        width: '85%',
        justifyContent: 'flex-start',
    },
    title: {
        color: '#d2ae6c',
        fontSize: 24,
    }
});