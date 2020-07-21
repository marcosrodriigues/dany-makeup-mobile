import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#d2ae6c',
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    card: {
        margin: 8,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column: {
        flexDirection: 'column',
        width: '55%',
        justifyContent: 'space-between'
    },
    vImage: {
        width: '40%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 25,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    value: {
        fontSize: 18
    }
})