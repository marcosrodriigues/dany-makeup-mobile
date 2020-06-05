import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#000000',
        alignItems: 'center'
    },

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
        width: '12%',
        height: 48,
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
    scrollView: {
        width: '94%', 
        flex: 1,
        marginBottom: 16,
        marginTop: 16
    },
    allCategory: {
        fontSize: 24,
        color: '#d2ae6c',
        fontWeight: 'bold'
    },
    content: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        marginTop: 24,
        borderColor: '#d2ae6c',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    categoria: {
        width: '100%',
        height: 128,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    titleCategoria: {
        fontSize: 24,
        color: "#d2ae6c",
        fontWeight: 'bold',
        paddingRight: 16
    }
})