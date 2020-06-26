import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    buttonCategoria: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        flex: 1,
        textAlign: 'center',
        flexDirection: 'row',
        marginTop: 24,
        borderColor: '#d2ae6c',
        borderWidth: 2,
        borderStyle: 'solid',
    },
    imageCategoria: {
        width: '100%',
        height: 128,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    titleCategoria: {
        fontSize: 24,
        color: "#d2ae6c",
        fontWeight: 'bold',
        paddingRight: 16
    },
    descriptionCategoria: {
        fontSize: 16,
        color: "#c3c3c3",
        fontWeight: '100',
        paddingRight: 16
    }
})