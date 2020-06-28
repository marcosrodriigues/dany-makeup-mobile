import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    cardProduto: {
        backgroundColor: '#d2ae6c',
    },
    product: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    viewImage: {
        width: '50%',
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
        width: '50%',
        justifyContent: 'space-between',
        paddingLeft: 8,
    },
    image: {
        width: '100%',
        height: 200
    },

    value: {
        alignSelf: 'flex-end',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: '#000000',
        justifyContent: 'space-between'
    },
    buttonIcon: {
        color: '#d2ae6c',
        height: 40,
        width: 40,
        backgroundColor: 'rgba(210, 174, 108, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        fontSize: 16,
        color: '#d2ae6c',
        paddingLeft: 4,
        alignItems: 'center',
        textAlign: 'center'
    },

    inline: {
        flex: 1,
        flexDirection: 'row'
    }
    
})