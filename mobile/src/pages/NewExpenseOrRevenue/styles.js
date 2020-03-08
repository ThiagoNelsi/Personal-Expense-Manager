import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '90%',
    backgroundColor: '#fff',
    elevation: 2,
    padding: 10,
  },
  moneyInputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999',
    width: '60%',
  },
  moneyInputText: {
    margin: 0,
    fontSize: 25,
    color: '#777'
  },
  moneyInput: {
    fontSize: 25,
    marginLeft: 10,
    flex: 1,
    color: '#777'
  },
  descriptionInput: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 5,
    marginVertical: 30,
    fontSize: 20,
  },
  btnContainer: {
    width: '100%',
    backgroundColor: '#c5e03a',
    padding: 10,
    marginTop: 30,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  }
})

export default styles;
