import { StyleSheet } from "react-native";
import { useHeaderHeight } from "@react-navigation/stack";

export default StyleSheet.create({
    creditcard: {
        margin: 16,
        height: 200,

        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d2ae6c',
        justifyContent: 'space-around'
    },
    header: {
        margin: 16,
    },
    headerText: {
        fontSize: 20,
        color: '#d2ae6c'
    },
    footer: {
        margin: 16,
        flexDirection: 'row'
    },  
    footerInfo: {
        width: '65%',
        justifyContent: 'space-between',
    },
    footerBrand: {
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card_number: {
        fontSize: 20,
        color: '#d2ae6c'
    },
    holder_name: {
        fontSize: 18,
        color: '#d2ae6c'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expiration_date: {
        fontSize: 16,
        color: '#d2ae6c'
    },
    cvv: {
        fontSize: 16,
        color: '#d2ae6c'
    }
})