import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  flex: 1;
  background: #035ade;
  justify-content: center;
  align-items: center;
  border-radius: 1;
  elevation: 4;
`;
export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 36px;
`;

export const IntroView = styled.View`
  flex: 1;
  background: #e7eaef;
  justify-content: center;
  align-items: center;
  border-radius: 1;
  elevation: 2;
`;
export const IntroText = styled.Text`
  font-size: 22px;
  text-align: center;
  margin: 0px 20px;
`;

export const ContentView = styled.View`
  flex: 5;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.Text`
  color: #035ade;
  font-size: 18px;
  font-weight: bold;
`;
export const InputField = styled.TextInput`
  border-color: #035ade;
  border-width: 2px;
  border-radius: 4px;
  margin: 0 20px;
  padding: 10px;
  elevation: 2;
  align-self: stretch;
  text-align: left;
  font-size: 18px;
  color: #035ade;
`;

export const ConsultaButton = styled(RectButton)`
  background: #035ade;
  padding: 10px 35px;
  border-radius: 4px;
  elevation: 4;
`;
export const ConsultaButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
`;

export const FooterView = styled.View`
  flex: 1;
  background: #035ade;
  justify-content: center;
  align-items: center;
  elevation: 4;
  border-radius: 1px;
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
