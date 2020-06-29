import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        width: '100%',
        marginBottom: '2%',
    },
    sectionImage: {
        width: '100%',
        maxHeight: 260,
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollView: {
        height: '100%',
    },
    sectionDescription: {
        width: '100%',
        padding: 8,
    },
    card: {
        width: 344,
        padding: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    shortDescription: {
        marginTop: 8,
        fontSize: 18,
        color: '#2d2626',
        marginBottom: 24
    },
    fullDescription: {
        marginTop: 24,
        fontSize: 16,
    },
    viewCarrinho: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    priceInfo: {
        width: '40%',
        alignItems: 'center',
        alignContent: 'center',
        textAlignVertical: 'center',
        marginTop: 16,
        marginBottom: 16,
    },
    discount: {
        textAlignVertical: 'bottom',
        textAlign:'center',
        fontWeight: 'bold',
        backgroundColor: 'black',
        color: '#d2ae6c',
        margin: 8,
        borderRadius: 8,
    },
    originalValue: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
        textDecorationLine: 'line-through'
    },
    value: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 24,
    },
    addCarrinho: {
        width: '60%',
    },
    preValue: {
        alignSelf: 'flex-start',
        color: '#000',
        fontWeight: 'bold'
    }
})