import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        maxHeight: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderBottomColor: '#d2ae6c',
        // borderBottomWidth: 2,
        // borderBottomStartRadius: 40,
        // borderBottomEndRadius: 40,
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