import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    socialMedia: {
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    buttonsSocialMedia: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    facebookButton: {
        backgroundColor: '#3A5A97',
        width:60,
        height: 60,
        lineHeight: 23,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    facebookIcon: {
        width: 55,
        height: 55,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});