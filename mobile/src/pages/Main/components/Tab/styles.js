import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${props => props.type === 'revenues' ? '#91ad03' : '#db4b4b'};
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;
export const Balance = styled.Text`
  color: ${props => props.isNegative ? '#a83232' : '#acbf47'};
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 5,
  },
  item: {
    width: '33.333%',
    alignItems: 'center'
  },
  addIcon: {
    color: 'white',
  },
  headerTextRegular: {
    textAlign: 'center',
    color: '#777',
  }
});

export default styles;
