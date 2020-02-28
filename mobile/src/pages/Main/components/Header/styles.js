import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcon: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderColor: '#eee',
  },
  headerIconTextGreen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#acbf47',
  },
  headerIconTextRed: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a83232',
  }
});

export default styles;
