import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
    //padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black'    
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red'
  },
  rowContainer: {
    flex:1, 
    flexDirection:'row'
  },
  rowView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})