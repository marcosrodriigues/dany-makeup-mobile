import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    promocao: {
        width: '100%',
        height: '100%',
        backgroundColor: '#d2ae6c',
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    flatList: {
        alignItems: 'center',
        height: '100%',
    },
    cardPromocao: {
        borderColor: '#000000',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center',
    },
    card: {
        width: 200,
    },
    cardImage: {
        height: 200,
        width: '100%',
        borderRadius: 50
    },
    cardDescription: {
        marginTop: 15,
        alignItems: 'flex-start'
    },
    cardTitle: {
        fontSize: 20,
    },
    cardOriginalValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    cardNewValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'//'#62ae6c',
    },
    cardDiscount: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlignVertical: 'bottom',
        textAlign:'right',
        color: '#d2ae6c',
    },
    inline: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    border: {
        borderWidth: 1,
        borderColor: 'red'
    },
    mt16: {
        marginTop: 16,
    }
    
})