import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
    boxCarrinho: {
        marginTop: 16,
        paddingBottom: 16,
        width: deviceWidth,
    },
    section: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    boxTitle: {
        marginLeft: 8,
        marginBottom: 8,
    },
    title: {
        color: '#d2ae6c',
        fontSize: 24,
    },
    text: {
        fontSize: 16,
        textAlign: 'left'
    },
    cartBox: {
        alignItems: 'center',
        marginBottom: 16,
    },
    productBox: {
        marginTop: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'row',
        width: '98%',
        height: 180
    },
    box: {
        marginBottom: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'row',
        width: '98%',
    },
    boxImage: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    infoCepFrete:{
        marginBottom: 16,
        backgroundColor: '#d2ae6c',
        flexDirection: 'column',
        width: '100%',
        alignSelf: 'center',
        alignItems:'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    fieldWithButton: {
        flexDirection: 'row',
        width: '100%',
        margin: 10,
        padding: 4,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: '#d2ae6c',
        borderRadius: 10,
    },
    fwbField: {
        flex: 4
    },
    fwbBtn: {
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
    textCep: {
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
    image: {
        width: '100%',
        height: '100%'
    },
    boxInfo: {
        width: '60%',
        padding: 8
    },
    infoName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        marginTop: 8,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    field: {
        backgroundColor: 'black',
        color: '#d2ae6c',
        borderWidth: 1,
        fontSize: 18,
        alignSelf: 'center',
      },
    cepField: {
        backgroundColor: 'black',
        color: '#d2ae6c',
        borderWidth: 1,
        fontSize: 20,
        alignSelf: 'center',
        width: '90%',
      },
    value: {
        fontSize: 18
    }    
});