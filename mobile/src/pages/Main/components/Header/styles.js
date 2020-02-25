import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextBold: {
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
      color: '#acbf47',
  },
  headerTextRegular: {
      textAlign: 'center',
      color: '#777',
  }
});

export default styles;