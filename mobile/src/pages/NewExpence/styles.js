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
  },
  moneyInputText: {
    fontSize: 25,
  },
  moneyInput: {
    borderBottomWidth: 1,
    borderColor: '#777',
    fontSize: 25,
    width: '25%',
    marginRight: 5,
    marginLeft: 10,
    textAlign: 'right',
  },
  centsInput: {
    borderBottomWidth: 1,
    borderColor: '#777',
    fontSize: 25,
    width: '10%',
    textAlign: 'right',
  },
  descriptionInput: {
    borderWidth: 1,
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