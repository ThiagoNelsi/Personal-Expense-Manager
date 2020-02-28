import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingVertical: 5,
  },
  addIconContainer: {
      width: 60,
      height: 60,
      backgroundColor: '#c5e03a',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 33,
  },
  addIcon: {
      color: 'white',
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
