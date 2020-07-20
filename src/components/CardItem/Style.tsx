import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        backgroundColor: '#d2ae6c',
        height: 150,
        borderColor: 'black',
        marginBottom: 8
    },
    product: {
        flexDirection: 'row',
    },
    image: {
        height: 120,
        width: '45%',
        borderRadius: 25,
    },
    subtitle: {
        fontSize: 14,
        color: '#1e1e1e'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        justifyContent: 'space-between',
        paddingLeft: 8,
        width: '55%'
    },
    value: {
        alignSelf: 'flex-end',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
})