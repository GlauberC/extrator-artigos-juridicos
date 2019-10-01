import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList``;

export const CardView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  padding: 20px 0;
  margin: 0 20px;
  border-bottom-color: #035ade;
  border-bottom-width: 2px;
`;
export const CardName = styled.Text`
  font-size: 26px;
  color: #035ade;
  font-weight: bold;
`;
export const CardFreq = styled.Text`
  font-size: 22px;
  color: #444444;
`;
