import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box: {
        borderColor: 'black',
        borderWidth: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    switch: {
        marginTop: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btnSwitch: {
        
    },
    switchActive: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    switchText: {
        color: 'black',
    },
    switchActiveText: {
        fontWeight: 'bold'
    },

    creditCardForm: {
        
    },
    creditCard: {

    },
    noCreditCard: {
        marginTop: 16,
        fontSize: 20,
        textAlign: 'center'
    },
    selectedCard: {
        borderColor: 'green',
        borderWidth: 2
    },
    button: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'black',
        height: 60,
        padding: 8,
        margin: 8,
    },
    vIcon: {
        color: '#d2ae6c',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20%',
        borderRadius: 10,
    },
    icon: {
        fontSize: 24,
        color: '#d2ae6c',
    },
    vText: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d2ae6c',
    },
    boletoForm: {
        borderWidth: 1,
        borderColor: 'black'
    },
    boleto: {
        margin: 16,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
    },
    label: {
        fontSize: 18,
        width: '20%',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'black',
        height: 40,
        width: '70%',
        color: '#d2ae6c',
        fontSize: 18,
        borderRadius: 10,
        padding: 8
    }
})