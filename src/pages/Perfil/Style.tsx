import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
      justifyContent: 'flex-start',
      width: '100%',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#000',
      alignItems: 'center',
  },
  header: {
    borderBottomColor: '#d2ae6c',
    borderBottomStartRadius: 20,
    borderBottomWidth: 2,
    borderBottomEndRadius: 20,
    width: '100%',
    paddingBottom: 8
  },
  info: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 8,
    borderBottomColor: '#d2ae6c',
    borderBottomWidth: 2,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    alignItems: 'center'
  },
  infoText: {
      marginTop: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  circle: {
      backgroundColor: '#d2ae6c',
      width: 200,
      height: 200,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
  },
  image: {
      height: 195,
      width: 195,
      borderRadius: 100,
  },
  text: {
      color: '#d2ae6c',
      fontSize: 18,
  },
  main: {
    backgroundColor: '#000000',
    padding: 8,
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    justifyContent:'center',
    marginBottom: 16,
  },
  fields: {
    width: '94%',
    justifyContent: 'center',
  },
  field: {
    height: 48,
    backgroundColor: 'black',
    borderColor: '#d2ae6c',
    color: '#d2ae6c',
    borderWidth: 1,
    marginBottom: 10,
    fontSize: 18,
    paddingLeft: 16,
    borderRadius: 16,
    width: '100%'
  },
  button: {
    height: 48,
    backgroundColor: '#d2ae6c',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  textButton: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  border: {
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  }
});