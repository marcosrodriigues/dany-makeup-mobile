import { StyleSheet } from "react-native";

export default StyleSheet.create({
    box: {
        borderColor: 'black',
        //borderBottomWidth: 1
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
        
    }
})