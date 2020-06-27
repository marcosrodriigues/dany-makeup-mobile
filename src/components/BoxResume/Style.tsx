import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    box:{
        marginBottom: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center',
        alignItems:'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    column: {
        padding: 4,
        borderWidth: 4,
        borderColor: '#d2ae6c',
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8,
    },
    info: {
        fontSize: 20,
        width: '70%',
        fontWeight: 'bold'
    },
    value: {
        fontSize: 18,
        width: '30%',
        textAlign: 'right'
    },
    title: {
        alignSelf:'flex-start',
        margin: 10,
        fontSize: 16
    }
});