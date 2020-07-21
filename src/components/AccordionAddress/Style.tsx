import { StyleSheet } from "react-native";

export default StyleSheet.create({
    collapse: {
        borderColor: 'black',
        borderBottomWidth: 1
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    strong: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    value: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    sideValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 8,
    }
})