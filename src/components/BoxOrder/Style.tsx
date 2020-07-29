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
        width: '95%',
        height: 120
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
        padding: 8,
        justifyContent: 'space-between'
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    main: {
        width: '100%'
    },
    bottom: {
        width :'100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0f0f0f',
        maxWidth: '100%'
    },
    pending: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        maxWidth: '100%'
    },
    paid: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        maxWidth: '100%'
    },
    analise: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        maxWidth: '100%'
    }

})