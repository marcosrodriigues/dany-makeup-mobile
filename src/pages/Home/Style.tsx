import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
      flex: 0,
      justifyContent: 'flex-start',
      width: '100%',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#000',
      alignItems: 'center',
  },
  imageBackground: {
    flex: 0,
    width: '100%',
    height: 144, //169
    backgroundColor: "#ffffff",
    top: 0, right: 0, left: 0, bottom: 0,
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  content: {
    width: '100%',
    justifyContent:'center',
    alignItems:'center'
  },
  section: {
    width: '94%',
    marginTop: 35,
  }
})