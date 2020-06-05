import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    produtosMaisVendidos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#d2ae6c', //f0f0f0
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20
    },
    flatList: {
        alignItems: 'center',
        height: '100%',
    },
    card: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center',
    },
    cardImage: {
        height: 150,
        width: 150
    },
    cardDescription: {
        marginTop: 15,
        alignItems: 'flex-start'
    },
    cardTitle: {
        fontSize: 20,
    },
    cardValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
    },
})