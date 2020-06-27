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
    row: {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
        padding: 4,
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: '#d2ae6c',
        borderRadius: 10,
    },
    center: {
        alignItems:'center',
        justifyContent: 'center',
    },
    vField: {
        flex: 4
    },
    vButton: {
        flex: 1,
        backgroundColor: 'black',
        borderColor: '#d2ae6c',
        borderWidth: 1,
    },
    icon: {
        color: '#d2ae6c',
        alignSelf: 'center',
        width: 50,
        height:50,
        justifyContent: 'center'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    btn: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
    },
    optButton: {
        backgroundColor: 'black',
        flexDirection: 'row',
        width: '100%',
        margin: 8,
        borderRadius: 8,
    },
    optRadioBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%'
    },
    optInfoBox: {
        justifyContent: 'space-between',
        padding: 8,
        width: '80%'
    },
    optInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoTitle: {
        color: '#d2ae6c',
        fontSize: 16,
        fontWeight: 'bold'
    },
    infoValue: {
        color: '#d2ae6c',
        fontSize: 14,
    },

    field: {
        backgroundColor: 'black',
        color: '#d2ae6c',
        borderWidth: 1,
        fontSize: 20,
        alignSelf: 'center',
        width: '90%',
    },

    options: {
        flexDirection: 'column',
        width: '98%',
        margin: 10,
        padding: 4,
        borderColor: '#000000',
    }
});