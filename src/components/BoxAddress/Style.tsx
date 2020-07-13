import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#d2ae6c',
        margin: 8,
        borderRadius: 10,
        borderColor: '#d2ae6c',
        alignItems: 'center',
        width: '100%'
    },
    card: {
        flexDirection: 'row',
        width: '90%'
    },
    iconView: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
    },
    infoView: {
        width: '75%',
        alignItems: 'center',
        padding: 8
    },
    optView: {
        width: '10%',
        alignSelf: 'flex-start',
        top: 8
    },
    view: {
        width: '100%',
        flexDirection: 'row',
    },
    viewColumn: {
        width: '100%'
    },
    textName: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textAddress: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0f0f0f',
        maxWidth: '100%'
    }
})