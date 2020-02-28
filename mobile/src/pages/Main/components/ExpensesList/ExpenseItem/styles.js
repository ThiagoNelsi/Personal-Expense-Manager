import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-width: 1px;
  border-color: ${props => props.type === 'revenues' ? '#acbf47' : '#e3a8a8'};
  margin-vertical: 6px;
`;

const styles = StyleSheet.create({
  container: {

  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
  }
});

export default styles;
