import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    containerCamera: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    boxSettings: {
        borderRadius: 50,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-around'
    },
    btnChangeCamera: {
    },
    btnTakePicture: {
    },
    btnCancel: {
    },
    outBorder: { 
        borderWidth: 2,
        borderRadius:50,
        borderColor: 'white',
        height: 50,
        width:50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inBorder: {
        borderWidth: 2,
        borderRadius:50,
        borderColor: 'white',
        height: 40,
        width:40,
        backgroundColor: 'white'
    }

});