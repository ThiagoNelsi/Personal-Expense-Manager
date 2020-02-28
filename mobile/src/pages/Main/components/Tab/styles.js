import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${props => props.type === 'revenues' ? '#c8db67' : '#c96f6f'};
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;

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
