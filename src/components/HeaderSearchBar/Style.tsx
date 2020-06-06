import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
        height: 80
    },
    logo: {
        width: '20%',
        height: 72
    },
    containerSearchBar: {
        width: '60%',
        flex: 1,
        backgroundColor: '#000',
    },
    inputSearchBar: {
        fontSize: 16,
        color: '#d2ae6c',
    },
    searchButton: {
        backgroundColor: '#000', 
        width: 40,
        height: 40,
        borderColor: '#d2ae6c',
        borderStyle: 'solid',
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    fa: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: 24,
    },
})